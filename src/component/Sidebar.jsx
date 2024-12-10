import React from 'react'
import { FiHome, FiFileText, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import CardNeo from './cardNeo';
import { Link } from 'react-router-dom';
import img2 from '../asset/2.png'


const Sidebar = () => {
  return (
    <div className='p-4 bg-primary'>
      {/* Sidebar */}
      <CardNeo w = "270px"  h="93vh" className="  h-screen text-black flex flex-col">
        {/* Logo */}
        <div className="p-4 text-left flex items-start justify-start">
          <img src={img2} alt="MedChain Logo" className="w-auto h-[50px] ml-4 mb-4" />
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-6 p-4">
            <li>
              <button className="flex items-center w-full px-4 py-2 text-left hover:bg-white rounded">
                <FiHome className="mr-3" /><Link to="/">Overview</Link>
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-left hover:bg-white rounded">
                <FiFileText className="mr-3" /> Medical Records
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-left hover:bg-white rounded">
                <FiUser className="mr-3" /> <Link to="/main2">Manage access</Link>
              </button>
            </li>
            <li>
              <button className="flex items-center w-full px-4 py-2 text-left hover:bg-white rounded">
                <FiSettings className="mr-3" /> <Link to="/mobile">Settings</Link>
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-700 rounded">
            <FiLogOut className="mr-3" /> Logout
          </button>
        </div>
      </CardNeo>
    </div>
  )
}

export default Sidebar
