import React from 'react'
import ButtonNeo1 from '../component/ButtonNeo1'
import CardNeo from '../component/cardNeo'
import event from '../asset/promo.jpg'
import { useNavigate } from 'react-router-dom';

const Voucher = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-[#e5ebf0] h-screen'>

        {/* HEADER */}
        <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 onClick={() => navigate('/Home')} className='text-2xl font-bold'>Foodiex</h1>
          <div className='flex flex-row gap-2 items-center justify-center mr-2'>
            <span className='text-[20px] text-green-600'>300</span>
            <i className="bx bx-diamond text-yellow-500 text-[25px] mb-[5px] bg-transparent hover:text-blue-500"></i>
          </div>
        </div>
        
        <ul className='flex flex-col items-center gap-4 p-4 overflow-y-scroll h-screen'>
          {[1,2,3,4,5,6].map((item, index) => (
            <li key={index}>
              <CardNeo shadow='shadow-outside' className='flex flex-col items-center justify-start pt-[10px] mb-4' w={window.innerWidth < 600 ? "80vw" : "27vw"} h="250px">
                <div className={`rounded-t-md border-2 border-black overflow-hidden w-[75vw] h-[130px] mb-[10px]`}>
                  <img className='w-full h-full object-cover' src={event} alt="" object-fit="cover" />
                </div>
                <div className='flex flex-col justify-center items-center px-[10px] py-[5px]'>
                  <p className='text-[15px] font-semibold'>Promosi 50% Tealive Bangsar</p>
                  <ButtonNeo1  w="100px" h= "30px" className="bottom-0 mt-[30px] text-green-500 font-bold" type="submit" >
                    <span className='text-[15px] text-green-600'>300</span>
                    <i className="bx bx-diamond text-yellow-500 text-[18px] mb-[5px] bg-transparent hover:text-blue-500"></i>

                  </ButtonNeo1>
                </div>
              </CardNeo>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Voucher
