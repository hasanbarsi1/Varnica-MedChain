
import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import CardNeo from '../component/cardNeo';
import ButtonNeo1 from '../component/ButtonNeo1';
import { Link } from 'react-router-dom';
import { Modal, Modal2, Modal3, Modal4 } from '../component/Modal';
import img from '../asset/man.webp'

const Main1 = () => {

    const list = [
        { title: 'Store Medical data', icon: 'cloud-upload' ,modal: 'my_modal_4'},
        { title: 'Verify Authentity', icon: 'check-shield' ,modal: 'my_modal_1'},
        { title: 'Share Data securely', icon: 'data',modal: 'my_modal_3' },
      ];

    const people = [
        { name: 'Ahmad bin Ali', pubkey: 'FNoTXGKcxF' },
        { name: 'Siti binti Aminah', pubkey: 'GFu7q3P4K8' },
        { name: 'Hassan bin Ismail', pubkey: '7uJ4KQ8sF3' },
        { name: 'Aisyah binti Yusof', pubkey: 'XtqJ3R4K9' },
        { name: 'Zulkifli bin Rahman', pubkey: '8tF7q3P4K' },
        { name: 'Nurul binti Kamal', pubkey: 'GJ7q3P4K8' },
        { name: 'Faizal bin Hassan', pubkey: '7J4KQ8sF3' },
        { name: 'Rafidah binti Zainal', pubkey: 'XqJ3R4K9' },
        { name: 'Khalid bin Ibrahim', pubkey: '8F7q3P4K' },
        { name: 'Zainab binti Salim', pubkey: 'GqJ3R4K8' },
    ];

    
  return (

          <div>
            {/* MAIN CONTAINER 1 */}
            <ul className='flex flex-row gap-[30px]'>
              {list.map((item, index) => (
                <ButtonNeo1 onClick2={()=>document.getElementById(list[index].modal).showModal()} key={index} w = "250px"  h="150px" className=" mb-[30px] h-screen text-black flex gap-2 flex-col  items-center justify-center">
                  <i className={`bx bx-${list[index].icon} text-[55px] mb-[5px] bg-transparent hover:text-blue-500`}></i>
                  <span className='text-[15px] font-normal'>{list[index].title}</span>
                </ButtonNeo1>
              ))}
            </ul>

            {/* MAIN CONTAINER 2 */}
            <CardNeo w="810px" h="62vh" className="h-screen text-black flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center border-b-2 border-[#E4E4E4] p-3">
                <h1 className="text-[20px] font-normal">Medical Checkup Report</h1>
                <ButtonNeo1 fontsize={"12px"} onClick2={()=>document.getElementById('my_modal_6').showModal()} w="140px" h="35px" className="text-secondary bg-blue-500 hover:bg-blue-700">Add Data</ButtonNeo1>
              </div>

              {/* Column Headers */}
              <div className="grid grid-cols-4 gap-4 p-6 text-[13px] text-gray-400 border-b border-gray-200">
                <h1>Patient Name</h1>
                <h1></h1>
                <h1>Public key</h1>
                <h1>View data</h1>
              </div>

              {/* Data Rows */}
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                {people.map((_, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-6 text-[13px] text-gray-800 border-b hover:text-green-500 border-gray-200 items-center">
                    <div className="flex items-center w-[250px]">
                      <img src={img} alt="description" className="rounded-full w-10 h-10 object-cover mr-2" />
                      <h1>{people[index].name}</h1>
                    </div>
                    <h1></h1>
                    <h1>{people[index].pubkey}</h1>
                    
                    <button className=" text-gray-800 bg-transparent border hover:border-secondary hover:text-secondary border-gray-400 text-sm w-[100px] h-[35px] rounded-full"><Link to="/main3">View</Link></button>
                    
                  </div>
                ))}
              </div>
            </CardNeo>

            {/* MODAL SHEET */}
            <Modal2></Modal2>
            <Modal></Modal>
            <Modal3></Modal3>
            <Modal4></Modal4>
            
            
          </div>
            
  )
}

export default Main1
