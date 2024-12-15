
import React, { useState } from 'react';
import CardNeo from '../component/cardNeo';
import ButtonNeo1 from '../component/ButtonNeo1';
import img from '../asset/hospital.webp'
import Modal, { Modal5, Modal6 } from '../component/Modal';


const Main3 = () => {

  const [isVerified, setIsVerified] = useState(false);
  return (
    <div>
           {/* MAIN CONTAINER 2 */}
           <CardNeo w="810px" h="82vh" className="h-screen text-sm text-black flex flex-col">
  {/* Header */}
  <div className="flex justify-between items-center border-b-2 border-[#E4E4E4] p-3">
    <h1 onClick={()=> setIsVerified(!isVerified)} className="text-base font-normal">Patient Medical Checkup</h1>
    <div className='flex flex-row gap-4'>
    <ButtonNeo1 fontsize={"12px"} onClick2={()=>document.getElementById('my_modal_2').showModal()} w="110px" h="35px" className="text-secondary bg-blue-500 hover:bg-gray-700">Edit data</ButtonNeo1>
      <ButtonNeo1 fontsize={"12px"} onClick2={()=>document.getElementById('my_modal_2').showModal()} w="110px" h="35px" className="text-secondary bg-blue-500 hover:bg-gray-700">Request access</ButtonNeo1>
     <ButtonNeo1 fontsize={"12px"} onClick2={()=>document.getElementById('my_modal_7').showModal()} w="110px" h="35px" className="text-secondary bg-blue-500 hover:bg-gray-700">Verify data</ButtonNeo1>
    </div>
  </div>

  {/* Body */}
<div className="flex flex-col p-5 overflow-y-auto">
  <table className="w-full table-auto text-sm" style={{borderCollapse: 'separate', borderSpacing: '0 1em'}}>
    {/* Patient Basic Info */}
    <thead className="mb-10">
      <tr>
        <th colSpan="2" className="text-lg font-semibold text-left">Basic Info</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="font-medium">Patient Name:</td>
        <td>John Doe</td>
      </tr>
      <tr>
  <td className="font-medium">Age:</td>
  <td style={{filter: isVerified ? 'blur(0)' : 'blur(3px)'}} className="">45</td>
</tr>
<tr>
  <td className="font-medium">Gender:</td>
  <td style={{filter: isVerified ? 'blur(0)' : 'blur(3px)'}} className="">Male</td>
</tr>
<tr>
  <td className="font-medium">Contact:</td>
  <td style={{filter: isVerified ? 'blur(0)' : 'blur(3px)'}} className="">(123) 456-7890</td>
</tr>

    </tbody>
    <thead>
      <tr>
        <th colSpan="2" className="text-lg font-semibold text-left">Checkup Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="font-medium">Checkup Date:</td>
        <td>12/04/2024</td>
      </tr>
      <tr>
        <td className="font-medium">Blood Pressure:</td>
        <td>120/80 mmHg</td>
      </tr>
      <tr>
        <td className="font-medium">Heart Rate:</td>
        <td>72 bpm</td>
      </tr>
      <tr>
        <td className="font-medium">Weight:</td>
        <td>70 kg</td>
      </tr>
      <tr>
        <td className="font-medium">Height:</td>
        <td>175 cm</td>
      </tr>
    </tbody>
  </table>
</div>


{/* Modal */}
<div className="w-full h-[150px] overflow-x-auto   p-4 flex items-center space-x-4" style={{overflowX: 'auto', scrollbarWidth: 'none'}}>
  {/* Timeline Items */}
  {[...Array(10).keys()].map(i => (
    <div key={i} className="min-w-[200px] h-full bg-transparent text-black border border-gray-400 p-4 rounded-md flex flex-col justify-center">
      <p className="text-sm font-semibold">Date: {`0${i+1}`}/04/2024</p>
      <p className="text-sm">Updated By: Dr. Smith</p>
      <p className="text-sm">Hospital: City Hospital</p>
    </div>
  ))}
  
</div>


<Modal5></Modal5>
<Modal6></Modal6>


  

</CardNeo>

          </div>
  )
}

export default Main3
