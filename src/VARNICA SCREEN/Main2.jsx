
import React, { useState } from 'react';
import CardNeo from '../component/cardNeo';
import ButtonNeo1 from '../component/ButtonNeo1';
import img from '../asset/hospital.webp'
import Modal from '../component/Modal';


const Main2 = () => {

  const list = [true, false, true, false, true];

  return (
    <div>
           {/* MAIN CONTAINER 2 */}
           <CardNeo w="810px" h="82vh" className="h-screen text-black flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center border-b-2 border-[#E4E4E4] p-3">
                <h1 className="text-[20px] font-normal">Access Permission List</h1>
                
              </div>

              {/* Column Headers */}
              <div className="flex flex-row items-center gap-40  p-6 text-[13px] text-gray-400 border-b border-gray-200">
                <h1 className='mr-[200px]'>Organization</h1>
                <h1>Date access</h1>
                <h1>Status</h1>
              </div>


              {/* Data Rows */}
              <div className="flex-1 overflow-y-auto">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex flex-row items-center gap-40 p-6 text-[13px] text-gray-800 border-b border-gray-200 ">
                    <div className='flex flex-row items-center gap-4 mr-20'>
                      <img  src={img} alt="description" className="rounded-full w-10 h-10 object-cover" />
                      <h1 className='w-[200px]'>Muhammad Ali</h1>
                    </div>
                    <h1>12/03/2024</h1>
                    <div>
                    <h1 className={`${list[index] ? 'text-blue-500' : 'text-red-500'}`}>{list[index] ? "Accepted" : "Pending"}</h1>
                    <i className={`bx bx-remove} text-[25px] mr-2`}></i>
                    </div>
                    

      
                  </div>
                ))}
              </div>
            </CardNeo>
          </div>
  )
}

export default Main2
