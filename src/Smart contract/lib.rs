
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
    program_error::ProgramError,
};

#[inline]
fn store_data(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    data: &str,
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let account = next_account_info(accounts_iter)?;

    // Check if the account is owned by the program
    if account.owner != program_id {
        msg!("Account does not belong to this program.");
        return Err(ProgramError::IncorrectProgramId);
    }

    // Check if the account has enough space to store the data
    let data_len = data.len();
    let mut account_data = account.try_borrow_mut_data()?;
    if account_data.len() < data_len {
        msg!("Account has insufficient space to store the data.");
        return Err(ProgramError::AccountDataTooSmall);
    }

    // Store the data (string) in the account
    account_data[..data_len].copy_from_slice(data.as_bytes());

    msg!("Data stored: {}", data);
    Ok(())
}

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    // Convert instruction_data to a UTF-8 string
    let data = String::from_utf8(instruction_data.to_vec()).map_err(|_| ProgramError::InvalidInstructionData)?;

    // Store data in the account
    store_data(program_id, accounts, &data)
}


