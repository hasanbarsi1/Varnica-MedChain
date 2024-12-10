import React from 'react'
import Header from '../component/Header'

const Rider2 = () => {
  return (
    <div className='bg-[#e5ebf0] h-screen'>
        <Header/>
<div className='flex flex-col items-center justify-center h-full p-4 md:p-8'>
  {/* Rider Order Information */}
  <div className='bg-white shadow-md rounded-lg p-4 w-full max-w-md md:max-w-lg md:p-6'>
    <h2 className='text-xl font-bold mb-2 md:text-2xl'>Order Accepted</h2>
    <p className='mb-2 md:mb-4'>You have accepted a new order. Please proceed to pick up the order from the restaurant and deliver it to the customer.</p>
    <button 
      
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-6 md:py-3 md:px-6 md:text-lg'>
      View Order Details
    </button>
  </div>

  {/* Map or Route Information */}
  <div className='bg-white shadow-md rounded-lg p-4 w-full max-w-md md:max-w-lg md:p-6 mt-4 md:mt-8'>
    <h2 className='text-xl font-bold mb-2 md:text-2xl'>Route Information</h2>
    <p className='mb-2 md:mb-4'>Estimated Time: 15 mins</p>
    <p className='mb-2 md:mb-4'>Distance: 5 km</p>
    {/* Map Component can be placed here */}
  </div>
</div>
      
    </div>
  )
}

export default Rider2
