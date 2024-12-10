const {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} = require('@solana/web3.js');
const bs58 = require('bs58');

// Replace with the secret key of the payer
const payer = Keypair.fromSecretKey(bs58.decode('<PAYER_SECRET_KEY>'));

// Replace with your deployed program's ID
const programId = new PublicKey('<YOUR_PROGRAM_ID>');

// The patient's account public key (where data is stored)
const patientAccountPublicKey = new PublicKey('<PATIENT_ACCOUNT_PUBLIC_KEY>');

// The public key of the new authorized user (e.g., doctor)
const newAccessKey = new PublicKey('<DOCTOR_PUBLIC_KEY>');

// Set up connection to Solana network (use Devnet for testing)
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// Function to send the transaction
async function addAccess() {
  try {
    // Instruction data (the new access key)
    const instructionData = Buffer.from(newAccessKey.toBuffer());

    // Create the instruction to add access
    const instruction = new TransactionInstruction({
      keys: [
        { pubkey: patientAccountPublicKey, isSigner: false, isWritable: true }, // Patient account
        { pubkey: payer.publicKey, isSigner: true, isWritable: false },         // Payer (signer)
      ],
      programId,
      data: instructionData, // Add the new access key to the data
    });

    // Create a transaction to execute the instruction
    const transaction = new Transaction().add(instruction);

    // Send and confirm the transaction
    const signature = await sendAndConfirmTransaction(connection, transaction, [payer]);

    console.log('Transaction successful with signature:', signature);
  } catch (error) {
    console.error('Error adding access:', error);
  }
}

// Call the function to add access
addAccess();
