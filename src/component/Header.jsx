import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
  return (
   
       
        <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 onClick={() => navigate('/Home')} className='text-[20px] md:text-2xl font-bold'>Foodiex</h1>
          <div>
          <button onClick={() => navigate('/Rider')} className= 'bg-green-500 mr-2 hover:bg-green-700 text-[12px] text-white font-bold py-2 px-4 rounded'>
            Take order
          </button>
          <button onClick={() => navigate('/Chat')} className='bg-blue-500 hover:bg-blue-700 text-white text-[12px] font-bold py-2 px-4 rounded'>
            Chat
          </button>
          </div>
        </div>
   
  )
}

export default Header
