
import React, { useState } from 'react'
import Lottie from 'lottie-react';
import cook from '../asset/cook.json';
import ride from '../asset/ride3.json';
import finish from '../asset/finish.json';
import ButtonNeo1 from '../component/ButtonNeo1';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';

const Loading = () => {

const navigate = useNavigate();
const [index, setIndex] = useState(0);
  
const animations = [
  { name: 'Your food is preparing...', data: cook, progress: 0 },
  { name: 'Rider is on the way...', data: ride, progress: 0 },
  { name: 'Finished your order', data: finish, progress: 0 }
];

const handleNext = () => {
  setIndex((prevIndex) => (prevIndex + 1) % animations.length);
};

  

  return (
    <div className='bg-[#e5ebf0] h-screen'>

        {/* HEADER */}
        <Header />

        
         <div onClick={handleNext} className='flex flex-col items-center justify-center h-[430px]'>
           <Lottie className='w-[220px] h-[220px] mb-2' animationData={animations[index].data} loop={true} style={{backgroundColor: 'transparent'}} />
           <p className=' text-[13px] font-normal text-gray-700'>{animations[index].name}</p>
         </div>
        

        {/* BUTTON ORDER */}
        <div className='fixed bottom-[100px] left-1/2 transform -translate-x-1/2 flex justify-center p-4 w-full mb-[20px]'>
          <ButtonNeo1 onClick2={() => navigate('/Chat')} className= 'flex flex-row gap-2 items-center justify-center'>
              <p>Chat</p>
              <i className="bx bx-chat text-[25px] mb-[5px] bg-transparent hover:text-blue-500"></i>
          </ButtonNeo1>
        </div>


      
    </div>
  )
}

export default Loading
