import React from 'react'
import Single from './assets/single.png'
import Double from './assets/double.png'
import Triple from './assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full py-[7rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-100'>
                <img className='w-28 mt-[-3rem] bg-transparent mx-auto' src={Single} alt="Single User" />
                <h2 className='text-2xl font-bold text-center py-3 '>Single User</h2>
                <p className='font-bold text-center text-4xl '> $ 159</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-6 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-6'>1 Granted User</p>
                    <p className='py-2 border-b mx-6'>Up to 100 mbps</p>
                </div>
                <button onClick={() => alert('Chose Single User')} className=' p-2 rounded-md bg-emerald-500 sm:mx-auto sm:bg-gray-700 sm:text-[#00df9a]  md:mx-0 md:bg-[#00df9a] md:text-white text-white font-medium my-6 '>Start Trial</button>
            </div>
            <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-100'>
                <img className='w-28 mt-[-3rem] bg-transparent mx-auto' src={Double} alt="Single User" />
                <h2 className='text-2xl font-bold text-center py-3 '>Double User</h2>
                <p className='font-bold text-center text-4xl '> $ 179</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-6 mt-8'>2 TB Storage</p>
                    <p className='py-2 border-b mx-6'>2 Granted User</p>
                    <p className='py-2 border-b mx-6'>Up to 250 mbps</p>
                    <p className='py-2 border-b mx-6 text-emerald-600'>AI Enabled*</p>
                </div>
                <button onClick={() => alert('Chose Double User')} className=' p-2 rounded-md bg-emerald-500  sm:mx-auto sm:bg-gray-700 sm:text-[#00df9a] text-white font-medium my-6  md:mx-0 md:bg-[#00df9a] md:text-white '>Start Trial</button>
            </div>
            <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-100'>
                <img className='w-28 mt-[-3rem] bg-transparent mx-auto' src={Triple} alt="Single User" />
                <h2 className='text-2xl font-bold text-center py-3 '>Triple User</h2>
                <p className='font-bold text-center text-4xl '> $ 199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-6 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-6'>3 Granted User</p>
                    <p className='py-2 border-b mx-6'>Up to 500 mbps</p>
                    <p className='py-2 border-b mx-6 text-emerald-600'>AI Enabled*</p>
                    <p className='py-2 border-b mx-6 text-emerald-700'>7/24 Support**</p>
                </div>
                <button onClick={() => alert('Chose Triple User')} className=' p-2 rounded-md  sm:mx-auto md:mx-0 md:bg-[#00df9a] md:text-white sm:bg-gray-700 sm:text-[#00df9a] bg-emerald-500 text-white font-medium my-6 '>Start Trial</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cards