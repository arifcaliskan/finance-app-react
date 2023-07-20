import React from 'react'


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] uppercase font-bold p-2 '>Access to our data financing app.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 '>Our data solutions will help expand your business overseas.</h1>
            <div className='flex flex-row justify-center items-center py-4'>
                <p className='md:text-4xl sm:text-2xl text-xl font-bold'>Fast, reliable and flexible for </p> 
                
              
                <p  className='md:text-4xl sm:text-2xl text-xl font-bold text-[#00df9a] ml-4'> 'BTB','BTC', 'SAAS'</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-400 pt-4' >Monitor the analysis of your data via our platform.</p>
            <button onClick={() => alert('Clicked get Started')} className='bg-[#00df9a] text-black font-semibold rounded-lg w-[169px] mx-auto my-6 py-2 border-x-white' >Get Started</button>
        </div>
    </div>
  )
}

export default Hero