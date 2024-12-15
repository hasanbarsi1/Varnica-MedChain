import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import CardNeo from '../component/cardNeo';
import ButtonNeo1 from '../component/ButtonNeo1';
import { Routes, useNavigate } from 'react-router-dom';
import Searchbar from '../component/Searchbar';
import ChartComponent from '../component/Chart';
import MedicalBarChart from '../component/Chart2';
import img from '../asset/hospital.webp'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Mobile from './Mobile';

const Dashboard = () => {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    
    <div className="flex h-screen bg-primary ">
      
      {/* Sidebar */}
      {window.innerWidth > 1100 && <Sidebar />}

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        
        <Searchbar />

        <div className='flex flex-row gap-[30px]'>
          
            <div className="content-container">
            <Routes>
              <Route path="/" element={<Main1 />} />
              <Route path="/Main2" element={<Main2 />} />
              <Route path="/Main3" element={<Main3/>} />
              <Route path="/mobile" element={<Mobile/>} />
              
              <Route path="*" element={<div>404: Page Not Found</div>} />
            </Routes>
            </div>

            {window.innerWidth > 1100 &&
            <div>
            {/* MAIN CONTAINER 3 */}
            <CardNeo w = "320px"  h="82vh" className="  h-screen text-black flex flex-col items-center justify-center">
              <div className='w-[500px] h-[300px] flex flex-col justify-center items-center '>
              <ChartComponent />
              </div>
              <MedicalBarChart />
            </CardNeo>
            </div>
            }
        </div>
      </div>

      
    </div>
  );
};

export default Dashboard;
