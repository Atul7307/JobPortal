import React from 'react'
import Navbar from '../components_lite/Navbar'
import atul from './At.jpg';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1  gap-6 place-items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={atul} alt="Image" className="h-80 object-cover rounded-xl shadow-md" />
          </div>
          {/* Text Section */}
          <div className='flex flex-col items-center'>
            <h2 className="text-4xl font-extrabold  text-gray-800 mb-4">Atul Kesharwani</h2>
            <h3 className='text-3xl font-semibold text-gray-600'>Role: <span className='text-gray-700'>Full Stack Web Developer</span></h3>
            
            <p className="text-black font-sans">Passionate about creating interactive web applications.</p>
            <a href="https://linktr.ee/Atulk08" target='_blank'><button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" >Contact</button></a>
          </div>
        </div>
      </div>
      
      <hr className="w-full border-gray-300 my-6" />
      
    </div>
  )
}

export default Creator
