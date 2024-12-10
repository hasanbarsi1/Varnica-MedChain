import React, { useState } from 'react'
import CardNeo from '../component/cardNeo'
import food from '../asset/food.jpg'
import food2 from '../asset/food2.jpg'
import food3 from '../asset/food3.webp'
import food4 from '../asset/food4.jpg'
import ButtonNeo1 from '../component/ButtonNeo1'
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import firebaseService from '../Firebase/FirebaseFunction'

const Home = () => {

  const handleNavigate = (index) => {
    navigate('/Menu', {
      state: {
        id : index
      },
    });
  };

  const [selectedKolej, setSelectedKolej] = useState(0);
  const navigate = useNavigate();
  const kolejList = [
    "Kolej 1",
    "Kolej 2",
    "Kolej 3",
    "Kolej 4",
    "Kolej 1",
    "Kolej 2",
    "Kolej 3",
    "Kolej 4",
  ];

  const MenuInfo = [
    { name: 'Nasi Lemak', price: 5, img: food },
    { name: 'Fish and chips', price: 5, img: food2 },
    { name: 'Chicken chop', price: 5, img: food3 },
    { name: 'Mee Tomyam', price: 5, img: food4 },

  ]

  const handleKolejClick = (index) => {
    
    console.log(`Kolejclicked`);
    index > 4 ? setSelectedKolej(index - 4) : setSelectedKolej(index);
  };

  return (
    <div className='bg-[#e5ebf0] h-screen w-screen'>

        {/* HEADER */}
        <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 onClick={() => navigate('/Home')} className='text-[19px] md:text-2xl font-bold'>Foodiex</h1>
          <div>
          <button onClick={() => navigate('/Voucher')} className= 'bg-purple-500 mr-2 text-[10px] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
            Rewards
          </button>
          <button onClick={() => navigate('/Rider')} className= 'bg-green-500 mr-2 text-[10px] hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            Take order
          </button>
          <button onClick={() => navigate('/Ai')} className='bg-blue-500 text-[10px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            AI
          </button>
          </div>
        </div>

        {/* Kolej list */}
        <ul className='flex justify-start items-center p-4 pl-2 m-[5px] w-screen overflow-x-scroll scrollbar-hide'>
        {kolejList.map((kolej, index) => (
          <ButtonNeo1 key={index} onClick2={() => handleKolejClick(index)} shadow='shadow-outside' className={`flex-shrink-0 flex-col ${selectedKolej === index ? 'text-blue-500' : 'text-black'} items-center justify-center mr-[20px]`} w="80px" h="80px">
            <i className="bx bx-home text-[25px] mb-[5px] bg-transparent "></i>
            <p className='text-[12px] '>{kolej}</p>
          </ButtonNeo1>
        ))}
          {/* <li className='w-[80px] h-[80px] border-2 border-red-500 mr-4'></li> */}
        </ul>

        {/* Trending Menu */}
        <div className='flex justify-between items-center p-4 pr-10 border-b-2 border-gray-20'>
          <h1 className='text-[17px] font-semibold text-gray-500'>Trending Menu</h1>
          <i onClick={() => firebaseService.deleteAllDocuments('orders')} className="bx bx-sort-alt-2 text-[25px]"></i>
        </div>
        
        {/* MAIN MENU LIST */}
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-2 px-2 pt-2 overflow-y-scroll h-[550px] scrollbar-hide'>
          {[...Array(20).keys()].map((item, index) => (
            <li key={index}>
              <CardNeo shadow='shadow-outside' className='flex flex-col mb-[20px]  items-center justify-start pt-[10px]' w={window.innerWidth < 600 ? "45vw" : "27vw"} h="220px">
                <div className={`rounded-t-md  overflow-hidden w-[${window.innerWidth < 600 ? "37" : "34"}vw] h-[115px] mb-[10px]`}>
                  <img className='w-full h-full object-cover' src={MenuInfo[selectedKolej].img} alt="" object-fit="cover" />
                </div>
                <div className='flex flex-col justify-center items-center px-[10px] py-[5px]'>
                  <p className='text-[15px] font-semibold'>{MenuInfo[selectedKolej].name}</p>
                  <div className='flex flex-row gap-4 items-center justify-center mr-2'>
                  <ButtonNeo1 onClick2={() => handleNavigate(index)}  w="80px" h= "30px" className="mt-[10px] text-blue-500 font-bold" type="submit" >
                  { (index < 7) ? "RM 5" : 
                  <span className='flex flex-row gap-1 items-center justify-center'>
                  <span className='text-[15px] font-normal text-green-500'>RM {MenuInfo[selectedKolej].price - 3}</span>
                  <span className='text-[13px] text-blue-500 line-through'>RM {MenuInfo[selectedKolej].price }</span>
                  
                </span>
                  }  
                  </ButtonNeo1>
                  {(index % 4 === 0) && (
                    <div className='flex flex-row gap-2 items-center justify-center mt-4'>
                      <i className="bx bxs-leaf text-green-700 text-[18px] mb-[5px] bg-transparent hover:text-blue-500"></i>
                      <i className="bx bxs-shield-plus text-red-500 text-[18px] mb-[5px] bg-transparent hover:text-blue-500"></i>
                    </div>
                  )}
                  </div>
                </div>
              </CardNeo>
            </li>
          ))}
        </ul>
      
    </div>
  )
}

export default Home
