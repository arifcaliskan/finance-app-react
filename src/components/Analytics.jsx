import React from 'react'
import Laptop from './assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto ' src={Laptop} alt="Laptop image" />
            <div className='flex flex-col justify-center' >
                <p className='text-[#00df9a] font-bold uppercase' >Data Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 ' >Manage All Data Everywhere, All the Time</h1>
                <p className='text-neutral-600' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quam debitis. Totam, recusandae aliquid perferendis harum vitae est, ea quia ipsam consectetur minima a cum veniam, voluptatibus delectus. Mollitia eligendi a in expedita rem, cupiditate quidem asperiores iure, veritatis atque, veniam soluta itaque culpa sunt. Optio ea exercitationem ad ab.</p>
                <button onClick={() => alert('Clicked Contact Us!')} className='text-[#00df9a] w-[167px] py-3 rounded-xl bg-gray-800 mx-auto my-2 md:mx-0'>Contact Us!</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics