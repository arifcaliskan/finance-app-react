import React from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
const Navbar = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {setNav(!nav)}
  return (  
    <div className=" flex text-white justify-between items-center h-24    max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-[#00df9a] font-semibold text-3xl">REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'>Home</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Contact</li>
            <li className='p-5'>Products</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 border-r border-r-gray-700 h-full w-[60%] bg-[#000300] ease-in-out duration-500' : "fixed left-[-100%]  ease-in-out duration-500"}>
        <h1 className="w-full text-[#00df9a] font-semibold text-3xl m-4">REACT.</h1>
          <ul className='uppercase'>
          <li className='p-5 border-b border-gray-700 '>Home</li>
          <li className='p-5 border-b border-gray-700 '>About</li>
          <li className='p-5 border-b border-gray-700 '>Company</li>
          <li className='p-5 border-b border-gray-700 '>Contact</li>
          <li className='p-5'>Products</li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar