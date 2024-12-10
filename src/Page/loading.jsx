import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../asset/loading.json'; // Path to your JSON file
import ButtonNeo1 from '../component/ButtonNeo1';
import { useNavigate } from 'react-router-dom';

const Loading = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-[#e5ebf0] h-screen'>

        {/* HEADER */}
        <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 className='text-2xl font-bold'>Foodiex</h1>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Chat
          </button>
        </div>

        
         <div onClick={() => navigate('/Progress')} className='flex flex-col items-center justify-center h-[430px]'>
           <Lottie className='w-[220px] h-[220px] mb-2' animationData={animationData} loop={true} style={{backgroundColor: 'transparent'}} />
           <p className=' text-[13px] font-normal text-gray-700'>Waiting rider to accept...</p>
         </div>
        

        {/* BUTTON ORDER */}
        <div className='fixed bottom-[100px] left-1/2 transform -translate-x-1/2 flex justify-center p-4 w-full mb-[20px]'>
          <ButtonNeo1 onClick2={() => navigate('/Payment')}>Cancel</ButtonNeo1>
        </div>


      
    </div>
  )
}

export default Loading
