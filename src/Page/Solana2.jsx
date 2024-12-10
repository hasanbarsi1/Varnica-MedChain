// import React, { useState } from 'react';
// import { Connection, Keypair, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
// import * as borsh from 'borsh';
// import bs58 from 'bs58';

// const App = () => {
//   // State variables for the form inputs
//   const [doctorName, setDoctorName] = useState('');
//   const [timestamp, setTimestamp] = useState('');
//   const [fileHash, setFileHash] = useState('');

//   // Solana configuration
//   const connection = new Connection("https://api.devnet.solana.com", 'confirmed');
//   const payer = Keypair.fromSecretKey(bs58.decode('3faxsckYtw7kQbR5DMuSKuoPHp3SSj8jKGsNzEVs4NPNB1GHtq8WkfhCxwLxDXDm3ntfYz3SF5a4Xq2qUbruEzVm'));
//   const programId = new PublicKey('FNoTXGKcxFtiopPYwrAJYmDjS6g1wm79RdVbC69uFwEx');
//   const accountPubkey = new PublicKey('FNoTXGKcxFtiopPYwrAJYmDjS6g1wm79RdVbC69uFwEx'); // Replace with the actual account public key

//   // Medical Record struct
//   class MedicalRecord {
//     constructor(doctorName, timestamp, fileHash) {
//       this.doctorName = doctorName;
//       this.timestamp = timestamp;
//       this.fileHash = fileHash;
//     }
//   }

//   // Serialize the medical record
//   const serializeMedicalRecord = (record) => {
//     const schema = new Map([
//       [MedicalRecord, { kind: 'struct', fields: [['doctorName', 'string'], ['timestamp', 'u64'], ['fileHash', 'string']] }],
//     ]);
//     const serializer = new BorshSerializer(schema);
//     return serializer.serialize(MedicalRecord, record);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const medicalRecord = new MedicalRecord(doctorName, Number(timestamp), fileHash);
//     const serializedData = serializeMedicalRecord(medicalRecord);

//     try {
//       // Create a transaction instruction to call the Solana program
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: payer.publicKey,
//           toPubkey: accountPubkey,
//           lamports: 0, // No tokens will be transferred, just a call to the program
//         })
//       );

//       // Add the program instruction
//       const instruction = new TransactionInstruction({
//         keys: [{ pubkey: accountPubkey, isSigner: false, isWritable: true }],
//         programId,
//         data: Buffer.from(serializedData), // Data for the program (the serialized medical record)
//       });
//       transaction.add(instruction);

//       // Send the transaction
//       const signature = await connection.sendTransaction(transaction, [payer]);
//       console.log('Transaction Signature:', signature);

//       // Wait for confirmation
//       await connection.confirmTransaction(signature);
//       alert('Medical Record stored successfully!');
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error storing the medical record.');
//     }
//   };

//   return (
//     <div>
//       <h1>Submit Medical Record</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Doctor Name</label>
//           <input
//             type="text"
//             value={doctorName}
//             onChange={(e) => setDoctorName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Timestamp</label>
//           <input
//             type="number"
//             value={timestamp}
//             onChange={(e) => setTimestamp(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>File Hash</label>
//           <input
//             type="text"
//             value={fileHash}
//             onChange={(e) => setFileHash(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Store Medical Record</button>
//       </form>
//     </div>
//   );
// };

// export default App;
