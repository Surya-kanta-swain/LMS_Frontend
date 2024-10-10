import React from 'react'
import './Home.css'
import Navbar from '../componemts/Navbar'
import img2 from '../assets/leave-management.png'
const Home = () => {
  return (
    <>
      <div className='home' >
            <div className='left'>
              <div className='name'>
               <h2 >Leave Management </h2>
               <h2>System</h2>
               </div>
            </div>
            <div className='right'>
            <img src={img2} alt="background" className='w-full h-auto' />
            </div>
      </div>

    </>
  );
}

export default Home
