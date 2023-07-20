import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 ' >
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-semibold py-2' >Tips & Tricks to Boost your Startup!</h1>
                <p className='md:text-2xl text-xl'>Sign up to our weekly newsletter!</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='text-black flex p-3 rounded-sm pl-3 w-full' type="email" placeholder='Enter Email' />
                    <button  className='bg-[#00df9a] w-[200px] text-gray-800 font-semibold ml-4 py-3 rounded-sm ' >Notify me!</button>
                </div>
                <p className='font-medium '>We care about your <a className='text-[#00dfdf] underline uppercase' href='https://www.kvkk.gov.tr/Icerik/5362/Veri-Ihlali-Bildirimi' target='_blank'>Privacy</a></p>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter