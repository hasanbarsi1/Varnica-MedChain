import React, { useState } from 'react'
import ButtonNeo1 from '../component/ButtonNeo1';
import Modal, { Modal7 } from '../component/Modal';
import CardNeo from '../component/cardNeo';
import img from '../asset/hospital.webp'

const Mobile = () => {

    const [isData,setData] = useState(true);

    const list = [
        { title: 'Add access', icon: 'cloud-upload' },
        { title: 'Grant access', icon: 'check-shield' },
        
      ];

    const pubkeyList = [
        {name: 'Clinic City', pubkey: '8tF7q3P4K'},
        {name: 'Indah Clinic', pubkey: 'GJ7q3P4K8'},
        {name: 'Klinik Sentosa', pubkey: 'GFu7q3P4K8'},
        {name: 'Putra Medical Centre', pubkey: '7J4KQ8sF3'},
        {name: 'Taman Desa clinic', pubkey: 'XtqJ3R4K9'},
    ];

  return (
    <div className="mobile w-[360px]">

      {/* Mobile Bar */}
      <div className="mobile-bar flex items-center justify-between p-4 bg-primary shadow-lg">
        <h1 className="text-xl font-semibold text-black">MedChain</h1>
        <div className="mobile-nav">
          <ul className="flex space-x-4 text-secondary">
            <li><a className="hover:underline" href="/menu"><i className="bx bx-menu text-2xl"></i></a></li>
          </ul>
        </div>
      </div>

      {/* MAIN CONTAINER 1 */}
      <ul className='p-6 grid grid-cols-2 gap-[10px]'>
        {list.map((item, index) => (
        <ButtonNeo1 onClick2={()=>document.getElementById('patient_permission_modal').showModal()} key={index} w = "140px"  h="150px" className=" mb-[30px] h-screen text-black flex gap-2 flex-col  items-center justify-center">
            <i className={`bx bx-${list[index].icon} text-[55px] mb-[5px] bg-transparent hover:text-blue-500`}></i>
            <span className='text-[15px] font-normal'>{list[index].title}</span>
        </ButtonNeo1>
        ))}
      </ul>

      {/* MAIN CONTAINER 2 */}
      <CardNeo w="350px" h="62vh" className="h-screen text-black flex flex-col mx-4">
        {/* Header */}
        <div className="flex justify-start items-center border-b-2 border-[#E4E4E4] p-3">
          <h1 className="text-[20px] font-normal mr-[150px]">{isData ? 'Your data' : 'People access'}</h1>
          <i onClick={()=> setData(false)}  className={`bx bx-user mr-2 text-[20px] ${!isData? 'text-blue-500': 'text-black'}`}></i>
          <i onClick={()=> setData(true)}  className={`bx bx-file text-[20px] ${isData? 'text-blue-500': 'text-black'}`}></i>
          
        </div>

        <div
  className="w-[330px] h-[500px]  shadow-md rounded-lg overflow-y-auto p-4"
  style={{ maxHeight: "500px" }}
>
{isData ?<div>
     {/* Patient Basic Info */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2">Basic Info</h3>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">Patient Name:</span>
        <span>John Doe</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Age:</span>
        <span>45</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Gender:</span>
        <span>Male</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Contact:</span>
        <span>(123) 456-7890</span>
      </div>
    </div>
  </div>

  {/* Checkup Details */}
   <div>
    <h3 className="text-lg font-semibold mb-2">Checkup Details</h3>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">Checkup Date:</span>
        <span>12/04/2024</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Blood Pressure:</span>
        <span>120/80 mmHg</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Heart Rate:</span>
        <span>72 bpm</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Weight:</span>
        <span>70 kg</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Height:</span>
        <span>175 cm</span>
      </div>
    </div>
  </div>

  </div> : <div>
     {/* Column Headers */}
        <div className="grid grid-cols-2 gap-40 p-6 text-[13px] text-gray-400 border-b border-gray-200">
          <h1>Name</h1>
          <h1>Pubkey</h1>
        </div>

        {/* Data Rows */}
        <div className="flex-1 overflow-y-auto">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-row items-center gap-0 p-6 text-[13px] text-gray-800 border-b border-gray-200 hover:text-green-500">
              <div className='w-[230px] flex items-center'>
                <img src={img} alt="Profile" className="w-6 h-6 rounded-full mr-2" />
                <h1> {pubkeyList[index].name}</h1>
              </div>
              <h1>{pubkeyList[index].pubkey}</h1>
            </div>
          ))}
        </div>
  </div>}
</div>

      </CardNeo>
      <Modal7></Modal7>
    </div>
  )
}

export default Mobile
