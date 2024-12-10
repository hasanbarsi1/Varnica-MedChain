import React, { useState } from 'react';
import { Connection, Keypair, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, TransactionInstruction } from '@solana/web3.js';
import { Buffer } from 'buffer';  // Import Buffer polyfill
import bs58 from 'bs58';  // Import bs58

const PRIVATE_KEY = '3faxsckYtw7kQbR5DMuSKuoPHp3SSj8jKGsNzEVs4NPNB1GHtq8WkfhCxwLxDXDm3ntfYz3SF5a4Xq2qUbruEzVm';

const decodedPrivateKey = bs58.decode(PRIVATE_KEY);

// Create a wallet from the decoded private key
const wallet = Keypair.fromSecretKey(decodedPrivateKey);
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const programId = new PublicKey('FNoTXGKcxFtiopPYwrAJYmDjS6g1wm79RdVbC69uFwEx'); // Replace with your deployed program ID
const balance = await connection.getBalance(wallet.publicKey);
const Solana = () => {
  
console.log(`Wallet balance: ${balance} lamports`);

  const [doctorName, setDoctorName] = useState('');
  const [fileHash, setFileHash] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [status, setStatus] = useState('');

  const sendMedicalRecord = async () => {
    const medicalRecord = {
      doctor_name: doctorName,
      timestamp: parseInt(timestamp),
      file_hash: fileHash
    };
    

    const newAccount = Keypair.generate();
    const newAccountPublicKey = newAccount.publicKey;

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: newAccountPublicKey,  // Create a new account to store the data
        lamports: await connection.getMinimumBalanceForRentExemption(0),
        space: 4096,  // Define the space for the data
        programId,
      }),
      new TransactionInstruction({
        keys: [{ pubkey: newAccountPublicKey, isSigner: true, isWritable: true }, ], // Use new account as signer and writable
        programId,
        data: Buffer.from(JSON.stringify(medicalRecord)),
      })
    );

    try {
      const txid = await sendAndConfirmTransaction(connection, transaction, [wallet, newAccount]);
      setStatus(`Success! Transaction ID: ${txid}`);
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Medical Record System</h1>
      <input
        type="text"
        placeholder="Doctor's Name"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />
      <input
        type="text"
        placeholder="File Hash (IPFS)"
        value={fileHash}
        onChange={(e) => setFileHash(e.target.value)}
      />
      <input
        type="text"
        placeholder="Timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <button onClick={sendMedicalRecord}>Submit Record</button>
      <p>{status}</p>
    </div>
  );
};

export default Solana;
