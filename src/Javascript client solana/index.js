const {
  Connection,
  PublicKey,
  Keypair,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} = require('@solana/web3.js');
const bs58 = require('bs58');
const crypto = require("crypto");

// Set up the connection
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const payer = Keypair.fromSecretKey(bs58.decode('3faxsckYtw7kQbR5DMuSKuoPHp3SSj8jKGsNzEVs4NPNB1GHtq8WkfhCxwLxDXDm3ntfYz3SF5a4Xq2qUbruEzVm'));

// Create the transaction to store data
const storeData = async (data) => {

  // Generate hash of the medical data
  const hash = crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
  const cipher = crypto.createCipher('aes-256-cbc', 'mySecretKey123');
  const encryptedData = Buffer.concat([cipher.update(JSON.stringify(data)), cipher.final()]);
  const decipher = crypto.createDecipher('aes-256-cbc', 'mySecretKey123');
  const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
  const dataStringEncrypted = encryptedData.toString('hex');
  const dataStringDecrypted = decryptedData.toString('utf-8');

  // Get the program's public key (replace with actual program ID once deployed)
  const programId = new PublicKey('FNoTXGKcxFtiopPYwrAJYmDjS6g1wm79RdVbC69uFwEx');

  // Create a new account to store the data
  const account = Keypair.generate();
  const instructionData = Buffer.from(dataStringEncrypted + hash); // The data to store

  // Ensure enough space for storing the data (e.g., 256 bytes)
  const space = instructionData.length; // Adjust based on actual data size needed

  // Create the transaction to invoke the program and fund the new account
  const transaction = new Transaction().add(
    // Create the account and transfer 1 SOL from payer to account
    SystemProgram.createAccount({
      fromPubkey: payer.publicKey,
      newAccountPubkey: account.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(space), // Ensure enough space for rent exemption
      space: space, // Space required for storing the data
      programId,
    }),
    // Add the instruction to store data
    new TransactionInstruction({
      keys: [
        { pubkey: account.publicKey, isSigner: true, isWritable: true },
        { pubkey: payer.publicKey, isSigner: true, isWritable: false },
      ],
      programId,
      data: instructionData, // Sending data to the program
    })
  );

  // Send the transaction
  // const signature = await sendAndConfirmTransaction(
  //   connection,
  //   transaction,
  //   [payer, account]
  // );
  // console.log("Transaction successful with signature:", signature);
};

const retrieveData = async (accountPubkey) => {
  try {
    // Fetch the account data from Solana
    const accountInfo = await connection.getAccountInfo(accountPubkey);
    const signatures = await connection.getSignaturesForAddress(accountPublicKey);
console.log(signatures);


    if (accountInfo === null) {
      console.log("Account not found.");
      return;
    }

    // Parse the stored data (Buffer -> string)
    const dataBuffer = accountInfo.data;
    const storedData = dataBuffer.toString(); // Convert buffer to string

    // Extract the original data and hash
    const dataLength = storedData.length - 64; // Assuming 64-byte hash is stored at the end
    const originalData = storedData.slice(0, dataLength);
    const storedHash = storedData.slice(dataLength);

    console.log("Stored Data: ", originalData);
    console.log("Stored Hash: ", storedHash);

    // You can now parse `originalData` as JSON if needed
    const parsedData = JSON.parse(originalData);
    console.log("Parsed Data: ", parsedData);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};


// storeData({ patient: "John Doe", age: 30, diagnosis: "Flu" }).catch(console.error);
const accountPublicKey = new PublicKey('AVrUvpDPYn4UoC9PAfzES84Zfx8uDrASAAXw7ETgouwf'); // replace with actual public key of account

retrieveData(accountPublicKey).catch(console.error);
