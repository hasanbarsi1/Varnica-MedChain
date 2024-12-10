import React from 'react'
import ButtonNeo1 from '../component/ButtonNeo1';
import food from '../asset/food.jpg'
import firebaseService from '../Firebase/FirebaseFunction';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';

const Payment = () => {

  const navigate = useNavigate();

    const items = [
        { name: 'Burger', price: 5.0 },
        { name: 'Fries', price: 3.0 },
        { name: 'Fee = RM3 +', price: 3.5 },
      ];

    const createOrder = () => {
        navigate('/Loading');
        console.log('Creating order...');
        const order = {
          name: 'John Doe',
          total: 22.5,
          status: 'Pending',
          foodName: 'Burger',
          kolej: 3
        };
        firebaseService.createDocument('orders', order);
      };

  return (
    <div className='bg-[#e5ebf0] h-screen lg:width-[500px]'>

        {/* HEADER */}
        <Header />

        <div className='flex justify-center mt-10 mb-20 '>
            <div className='w-[70vw] h-[170px] rounded-xl overflow-hidden border-2 border-green-500'>
                <img onClick={createOrder} src={food} className='w-full h-full object-cover'/>
            </div>
        </div>

        {/* Order Items */}
        <div className='px-20'>
            <div className="space-y-3">
                {items.map((item, index) => (
                <div key={index}className={`flex justify-between items-center ${ index == 2 ? 'text-green-500' : 'text-gray-600'}`}>
                    {index == 2 ? <span className='font-semibold'>{item.name} <br/>(2KM x RM 0.25)</span> : <span>{item.name}</span>}
                    
                    <span className="font-medium text-gray-800">RM {item.price.toFixed(2)}</span>
                </div>
                ))}
            </div>

        {/* Total */}
            <div className="mt-4 border-t pt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-lg font-bold text-gray-900">RM 11.50</span>
            </div>
        </div>

        {/* Payment Button */}
        <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center p-4 w-full mb-[20px]'>
            <ButtonNeo1 onClick2={createOrder}>Order Now</ButtonNeo1>
        </div>

      
    </div>
  )
}

export default Payment
