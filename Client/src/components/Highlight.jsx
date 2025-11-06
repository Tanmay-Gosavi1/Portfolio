import React from 'react'
import Counter from './Counter.jsx';
const Highlight = () => {
  return (
    <div className='hidden sm:flex flex-col md:flex-row justify-center items-center bg-[#f6f4f4] w-[90%] md:w-[80%] rounded-xl p-4 md:p-7 gap-3 mt-7'>
        <div className='w-full flex flex-col justify-center md:border-r-2 border-[#c7c4c4] items-center'>
            <h1 className='text-4xl font-bold whitespace-nowrap'><Counter from={0} to={3} />+ Years</h1>
            <p className='text-[#64656c]'>Working Experience</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center md:border-r-2  border-[#c7c4c4]'>
            <h1 className='text-4xl font-bold'><Counter from={0} to={10} />+</h1>
            <p className='text-[#64656c]'>Projects Delivered</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold'><Counter from={20} to={30} />+</h1>
            <p className='text-[#64656c]'>Happy Clients</p>
        </div>
    </div>
  )
}

export default Highlight