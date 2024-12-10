// AddData.js
import React, { useState,   useEffect } from 'react';
import firebaseService from './FirebaseFunction';

function AddData() {
  const [inputData, setInputData] = useState('');


  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={() => firebaseService.createDocument('expenses', { name: inputData, amount: 0 })}>Add Data</button>
      {/* <ul>
      {dataList.map((data) => (
        <li key={data.id}>
          {data.name}: ${data.amount}
        </li>
      ))}
    </ul> */}
    </div>
  );
}

export default AddData;
