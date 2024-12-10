import React from 'react'
import food from '../asset/food.jpg'
import ButtonNeo1 from '../component/ButtonNeo1'
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import { useLocation } from 'react-router-dom';

const Menu = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {}; // Fallback for undefined state
    
  return (
    <div className='bg-[#e5ebf0] h-screen'>

      {/* HEADER */}
      <Header />

      
      {/* Carousel */}
      <div className='flex overflow-x-scroll p-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((src, index) => (
          <img key={index} src={food} alt={`Carousel item ${index}`} className='h-[100px] w-auto mx-2 rounded' />
        ))}
      </div>

      {/* Menu Description */}
      <div className='p-4'>
        <p className='p-4 text-[14px] font-semibold text-gray-700'>
            Explore our delicious menu, crafted with love and care using only the freshest ingredients. From our signature dishes to our daily specials, there's something for everyone to enjoy.
        </p>
        <div className='p-4'>
          
          <table className='w-full text-[14px]'>
            <thead>
              <tr className='bg-gray-200 sticky left-0'>
                <th className='px-4 py-2'>Nutrient</th>
                <th className='px-4 py-2'>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2'>Calories</td>
                <td className='px-4 py-2'>230</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Fat</td>
                <td className='px-4 py-2'>12g</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>Sodium</td>
                <td className='px-4 py-2'>450mg</td>
              </tr>
            </tbody>
          </table>
        </div>

        {id % 4 === 0 && (
          <ul className='p-4 text-[12px]  list-inside'>
            <div className='flex flex-row items-start justify-start'>
              <div>
                <div className='flex flex-row gap-2'>
                <i className="bx bxs-leaf text-green-500 text-[23px] mt-2 bg-transparent hover:text-blue-500"></i>
                <li className='my-2'>Eco-friendly packaging</li>
                </div>
                <div className='flex flex-row gap-2'>
                <i className="bx bxs-leaf text-green-500 text-[23px] mt-2 bg-transparent hover:text-blue-500"></i>
                <li className='my-2'>Using energy-efficient</li>
                </div>
                <div className='flex flex-row gap-2'>
                <i className="bx bx-shield-plus text-red-500 text-[23px] mt-2 bg-transparent hover:text-blue-500"></i>
                <li className='my-2'>Locally sourced ingredients</li>
              </div>
              </div>

              <div className='flex flex-row gap-2 items-center justify-center mt-8 ml-2 mr-2'>
              <span className='text-[20px] text-green-600'>10</span>
              <i className=" bx bx-diamond text-yellow-500 text-[25px] mb-[5px] bg-transparent hover:text-blue-500"></i>
              </div>
            </div>
            {/* <li className='my-2'>Locally sourced ingredients</li>
            <li className='my-2'>Using energy-efficient equipment</li> */}
          </ul>
        )}
        
      </div>

      {/* BUTTON ORDER */}
      <div className='fixed gap-4  flex-row bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center p-4 w-full mb-[20px]'>
      <ButtonNeo1   onClick2={() => navigate('/Page')} w={'120px'}>Reserve</ButtonNeo1>
      <ButtonNeo1 onClick2={() => navigate('/Payment')}  w={'120px'}>Order</ButtonNeo1>
      </div>
      


      

    </div>
  )
}

export default Menu
