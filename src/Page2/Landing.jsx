import React from 'react'
import Header from '../component/Header'
import img from '../asset/blockchain.png'
import { useNavigate } from 'react-router-dom'
import img2 from '../asset/1.png'

const Landing = () => {

    const navigate = useNavigate();
  
  return (
    <div>

    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">

      {/* HEADER WEB */}
      <header className="w-full py-4 px-8 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 shadow-lg rounded-lg">
        <img src={img2} className="h-[50px] w-auto" alt="Workflow" />
        <nav className="flex lg:space-x-16 md:space-x-4">
          <a href="#" className="text-teal-700 font-bold hover:text-teal-900">Home</a>
          <a href="#" className="text-teal-700 font-bold hover:text-teal-900">About</a>
          <a href="#" className="text-teal-700 font-bold hover:text-teal-900">Services</a>
          <a href="#" className="text-teal-700 font-bold hover:text-teal-900">Contact</a>
        </nav>
        <button className="bg-teal-700 text-white font-bold py-2 px-4 rounded border border-teal-600 hover:bg-teal-800">Login</button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-row lg:gap-[130px] md:gap-[50px]  items-center justify-start p-8">
        <div>
            <h2 className="lg:text-[40px] md:text-[34px] font-semibold mb-4 text-left">Welcome to MediCare</h2>
            <p className="mb-8 lg:text-[20px] md:text-[16px] text-gray-700 max-w-[400px] text-left">
            Your trusted partner in healthcare solutions. We provide a wide range of medical services and information to keep you healthy and informed.
            </p>
            <div className="space-x-4">
            <button onClick={() => navigate('/dash')} className="bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700">
                Learn More
            </button>
            <button className="bg-white text-teal-600 font-bold py-2 px-4 rounded border border-teal-600 hover:bg-teal-100">
                Contact Us
            </button>
            </div>
        </div>
        <img src={img} className="w-[40vw] h-auto mb-8" alt="Landing Page Image" />
      </main>

      {/* FOOTER WEB */}
      <footer className="bg-teal-600 w-full py-4 text-center text-white">
        <p>&copy; 2023 MediCare. All rights reserved.</p>
      </footer>
    </div>
 
    </div>
  )
}

export default Landing




