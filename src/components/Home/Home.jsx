import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import logo from './logo.jpg'
import "./index.css"


const Home = () => {
  return (
    <div name="home"
     className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='  flex flex-col  justify-center items-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
            <h2 className='text-3xl sm:text-5xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-600 py-4 max-w-md '>I have 8+ projects of experience buliding and desgining software.
            Currently ,I love  to work on web application using technologies like 
            React, Tailwind, Sqlite etc. </p>
         
            <div>
           <button className= ' group text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>
            Portfolio <span className='group-hover:rotate-90 duration-300 '><MdOutlineKeyboardArrowRight size={26}/> </span>
        </button>
           </div>
        </div>
        <div className='pt-0'>
            <img src={logo} alt="my-profile"  className='imges-hi rounded-2xl  mx-3 max-auto w-2/3 md:w-full '/>
        </div>
      </div>
    </div>
  )
}

export default Home
