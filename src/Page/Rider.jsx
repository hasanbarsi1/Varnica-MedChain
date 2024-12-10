import React, { useEffect, useState } from 'react'
import CardNeo from '../component/cardNeo'
import Man from '../asset/man.webp'
import firebaseService from '../Firebase/FirebaseFunction';
import { useNavigate } from 'react-router-dom';

import { Connection, Keypair, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction, TransactionInstruction } from '@solana/web3.js';


const Rider = () => {

  const wallet = Keypair.generate();
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const programId = new PublicKey('FNoTXGKcxFtiopPYwrAJYmDjS6g1wm79RdVbC69uFwEx'); // Replace with your deployed program ID


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
        space: 1024,  // Define the space for the data
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
    
    const navigate = useNavigate();
    const [documents, setDocuments] = useState([]); // State to store documents

    const handleUpdateStatus = async (docId, newStatus) => {
        navigate('/Rider2');
        if (!docId || !newStatus) {
          console.log("Please provide both document ID and status.");
          return;
        }
    
        try {
          // Prepare the data to update
          const data = { status: newStatus };
    
          // Call firebaseService to update the document
          const updatedDocId = await firebaseService.updateDocument('orders', docId, data);
          console.log("Order status updated for document ID:", updatedDocId);
        } catch (error) {
          console.error("Error updating order status:", error);
        }
      };
  
    useEffect(() => {
      // Fetch documents on component mount
      const fetchDocuments = async () => {
        try {
          const docs = await firebaseService.readDocuments('orders');
          setDocuments(docs); // Update state with fetched documents
        } catch (error) {
          console.error("Error fetching documents: ", error);
        }
      };
  
      fetchDocuments();
    }, []);


  return (
    <div className='bg-[#e5ebf0] h-screen'>

      {/* HEADER */}
      <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 onClick={() => navigate('/Home')} className='text-2xl font-bold'>Foodiex</h1>
          
      </div>

      {/* ORDER LIST */}
      <ul className='flex flex-col mt-8 items-center gap-4 p-4 overflow-y-scroll h-screen'>
        {documents.map((doc) => (
          <li key={doc.id} onClick={() => handleUpdateStatus(doc.id,"Accepted")}>
            <CardNeo  shadow='shadow-outside' className={`flex  ${doc.status === "Accepted" ? "bg-gray-400" : "bg-[#ecf0f3]"} flex-col items-between hover:bg-gray-300 justify-start pt-[10px] mb-4`} w="80vw" h="80px">
              
              <div className='flex flex-row justify-start items-center px-[10px] py-[5px]'>
                <img className='w-[50px] rounded-full h-[50px] object-cover mr-6' src={Man} alt="" object-fit="cover" />
                <div className='w-[90px] lg:w-[120px]'>
                    <p className='text-[13px] font-normal'>{doc.name}</p>
                    <p className='text-[12px] font-normal text-blue-500'>Kolej {doc.kolej}</p>
                </div>
                <div>
                    <p className='text-[13px] font-normal text-orange-600'>{doc.foodName}</p>
                    <div className='flex flex-row justify-start items-center'>
                    <p className='text-[12px] font-normal text-orange-600 mr-1'>RM {doc.total}</p>
                    <p className='text-[12px] font-normal text-green-600'>{" "}+ 4.90</p>
                    </div>
                </div>
              </div>
            </CardNeo>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Rider
