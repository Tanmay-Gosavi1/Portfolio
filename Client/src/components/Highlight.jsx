import React from 'react'
import Counter from './Counter.jsx';
const Highlight = () => {
  return (
    <div className='hidden sm:flex flex-col md:flex-row justify-center items-center bg-[#f6f4f4] dark:bg-black border border-gray-300/30 dark:border-white/20 w-[90%] md:w-[80%] rounded-xl p-4 md:p-7 gap-3 mt-7'>
        <div className='w-full flex flex-col justify-center md:border-r-2 border-[#c7c4c4]/30 dark:border-white/20 items-center'>
            <h1 className='text-4xl font-bold whitespace-nowrap text-black dark:text-white'><Counter from={0} to={3} />+ Years</h1>
            <p className='text-[#64656c] dark:text-gray-400'>Working Experience</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center md:border-r-2  border-[#c7c4c4]/30 dark:border-white/20'>
            <h1 className='text-4xl font-bold text-black dark:text-white'><Counter from={0} to={10} />+</h1>
            <p className='text-[#64656c] dark:text-gray-400'>Projects Delivered</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-black dark:text-white'><Counter from={20} to={30} />+</h1>
            <p className='text-[#64656c] dark:text-gray-400'>Happy Clients</p>
        </div>
    </div>
  )
}

export default Highlight