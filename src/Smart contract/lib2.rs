use solana_sdk::signer::Signer; // Import Signer from solana_sdk
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
    program_error::ProgramError,
    program_pack::{Pack, Sealed},
};

/// Account data structure
#[repr(C)]
pub struct PatientAccountData {
    pub owner: Pubkey,              // Owner of the account (patient)
    pub access_list: Vec<Pubkey>,   // List of authorized public keys
}

impl Sealed for PatientAccountData {}

impl Pack for PatientAccountData {
    const LEN: usize = 32 + 1024; // Fixed size (32 bytes for owner + 1024 for access list)
    
    fn pack_into_slice(&self, dst: &mut [u8]) {
        let (owner_dst, access_list_dst) = dst.split_at_mut(32);
        owner_dst.copy_from_slice(self.owner.as_ref());

        // Serialize access list (convert to bytes)
        let serialized_list = bincode::serialize(&self.access_list).unwrap();
        access_list_dst[..serialized_list.len()].copy_from_slice(&serialized_list);
    }

    fn unpack_from_slice(src: &[u8]) -> Result<Self, ProgramError> {
        let (owner_src, access_list_src) = src.split_at(32);
        let owner = Pubkey::new(owner_src);

        // Deserialize access list
        let access_list: Vec<Pubkey> = bincode::deserialize(access_list_src).unwrap();

        Ok(Self { owner, access_list })
    }
}

#[inline]
fn add_access(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    new_access_key: &Pubkey,
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();

    // First account: the patient's account (data account)
    let account = next_account_info(accounts_iter)?;

    // Second account: the patient (owner of the account)
    let patient = next_account_info(accounts_iter)?;

    // Check if the account is owned by the program
    if account.owner != program_id {
        msg!("Account does not belong to this program.");
        return Err(ProgramError::IncorrectProgramId);
    }

    // Check if the patient has signed the transaction
    if !patient.is_signer {
        msg!("Patient has not signed the transaction.");
        return Err(ProgramError::MissingRequiredSignature);
    }

    // Check if the patient owns the account
    let mut account_data = account.try_borrow_mut_data()?;
    let mut patient_data = PatientAccountData::unpack_from_slice(&account_data)?;

    if patient_data.owner != *patient.key {
        msg!("Patient does not own this account.");
        return Err(ProgramError::IllegalOwner);
    }

    // Add the new access key to the access list
    if patient_data.access_list.contains(new_access_key) {
        msg!("Access key already exists.");
    } else {
        patient_data.access_list.push(*new_access_key);
        msg!("Access granted to: {}", new_access_key);
    }

    // Write back the updated data to the account
    PatientAccountData::pack_into_slice(&patient_data, &mut account_data);

    Ok(())
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    if instruction_data.len() != 32 {
        msg!("Instruction data must contain a single public key.");
        return Err(ProgramError::InvalidInstructionData);
    }

    let new_access_key = Pubkey::new(&instruction_data);

    add_access(program_id, accounts, &new_access_key)
}
