import React from 'react'
import Header from '../component/Header'

const Page = () => {
  return (
    <div className='bg-[#e5ebf0] h-screen w-screen'>
        <Header/>

        <div className='flex flex-col items-center justify-center h-full'>
            <input className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded' type="text" placeholder='Name' />
            <input className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded' type="text" placeholder='Phone Number' />
            <input className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded' type="text" placeholder='Kolej' />
            <input className='w-1/2 p-2 m-2 border-2 border-gray-400 rounded' type="text" placeholder='Time' />
            <button className='bg-gray-400 text-white p-2 m-2 rounded'>Reserve</button>
        </div>
        
      
    </div>
  )
}

export default Page
