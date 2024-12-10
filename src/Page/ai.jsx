import React from 'react';
import Header from '../component/Header';
import { useNavigate } from 'react-router-dom';
import { sendMessage, sendMessage2 } from "../Firebase/openAI.js";
import { useEffect, useRef, useState } from 'react'
import CardNeo from '../component/cardNeo';
import food3 from '../asset/food3.webp'
import food from '../asset/food.jpg'
import food2 from '../asset/food2.jpg'
import food4 from '../asset/salad.jpg'
import food5 from '../asset/grill.jpg'
import food6 from '../asset/yor.jpeg'
import ButtonNeo1 from '../component/ButtonNeo1';

const ChatGPTUI = () => {

  const navigate = useNavigate();
  const divend = useRef(null); 
  const [res, setRes] = useState(0);
  const [messages, setMessages] = useState("");
  const [messagesList, setMessagesList] = useState([
    {
      text : "Hello,I am Mr foodie..may i help you?",
      isBot : true,
      Menu : null
    }]);

    useEffect(() => {
      divend.current.scrollIntoView();
    }, [messagesList]);

    
    
    const MenuWestern = [
        { name: 'Cappuccino', price: 5, img: food },
        { name: 'Fish and chips', price: 5, img: food2 },
        { name: 'Chicken chop', price: 5, img: food3 },
      ]
    
    const MenuHealthy = [
        { name: 'Greek Salad', price: 2, img: food4 },
        { name: 'Grilled Chicken', price: 5, img: food5 },
        { name: 'Yogurt Parfait', price: 3, img: food6 },
      ]

    const responses = [
    "Hey, I think you might enjoy our Western menu at Kolej Kediaman Kelima that's only RM5! We have Chicken Chop, Fish and Chips, and more. Would you like to try any of those?",
    "Great! You can try our Healthy menu at Kolej Kediaman Kelima that's only RM2! We have Greek Salad, Grilled Chicken, and more. Would you like to try any of those?",
    ]
    const menu = [MenuWestern, MenuHealthy];
    const MenuInfo = menu[res];
  const handlemsg = async (e) => {
    e.preventDefault();
    setMessagesList([...messagesList,{text : messages,isBot : false}]);
    // const response = await sendMessage2(messages);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = responses[res];
    setMessagesList([...messagesList,{text : messages,isBot : false,Menu : null},{text : response, isBot : true,Menu : MenuInfo}]);
    setMessages("");
    setRes(res + 1);
    console.log(response);
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      
      {/* HEADER */}
      <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 onClick={() => navigate('/Home')} className='text-[19px] md:text-2xl font-bold'>Foodiex</h1>
          
        </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
      {
        messagesList.map((item, index) => (
        !item.isBot ?

        // USER MESSAGE
        <div className="flex justify-end mb-4">
          <div className="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-xs">{item.text}</div>
        </div>
        :
        // BOT MESSAGE
        <div className="flex flex-col justify-start mb-4">
            {/* Menu */}
            <div className="bg-gray-300 py-2 px-4 rounded-lg max-w-xl">
            {index !== 0 &&
            <ul className='grid grid-cols-3 gap-2 p-2 overflow-y-scroll h-[180px]'>
          {[...Array(3).keys()].map((items, index) => (
            <li key={index}>
              <CardNeo shadow='shadow-outside' className='flex flex-col items-center justify-start pt-[5px]' w={window.innerWidth < 600 ? "25vw" : "20vw"} h="150px">
                <div className={`rounded-t-md border-2 border-black overflow-hidden w-[${window.innerWidth < 600 ? "23" : "20"}vw] h-[70px] mb-[5px]`}>
                  <img className='w-full h-full object-cover' src={item.Menu[index].img} alt="" object-fit="cover" />
                </div>
                <div className='flex flex-col justify-center items-center px-[5px] py-[2px]'>
                  <p className='text-[13px] font-semibold'>{item.Menu[index].name}</p>
                  <div className='flex flex-row gap-2 items-center justify-center mr-1'>
                  <ButtonNeo1 onClick2={() => navigate('/Menu')}  w="50px" h= "20px" className="mt-[5px] text-blue-500 font-bold" type="submit" >RM {item.Menu[index].price}</ButtonNeo1>
                  {(index % 4 === 0) && (
                    <div className='flex flex-row gap-1 items-center justify-center mt-2'>
                      <i className="bx bxs-leaf text-green-500 text-[12px] mb-[3px] bg-transparent hover:text-blue-500"></i>
                      <i className="bx bxs-shield-plus text-red-500 text-[12px] mb-[3px] bg-transparent hover:text-blue-500"></i>
                    </div>
                  )}
                  </div>
                </div>
              </CardNeo>
            </li>
          ))}
        </ul>
}

            
              {item.text}
            </div>
        </div>
             ))
      }
      </div>

      <div ref={divend}></div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-300">
        <div className="flex items-center gap-2">
          <input
            value={messages} onChange={(e) => setMessages(e.target.value)}
            type="text"
            className="flex-1  w-[80vw] border-2 bg-white border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button onClick={handlemsg} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTUI;
