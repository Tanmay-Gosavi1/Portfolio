import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import bankImg from '../assets/bank.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full flex flex-col pt-8 md:pt-15 selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold mb-3 md:mb-0 lg:mb-8 text-black dark:text-white'>Explore My <span className='font-lobster text-[#8a8a94] dark:text-gray-400 font-light'>Projects</span></h1>
        {/* Projects*/}
        <div className='w-full flex flex-col '>
            {/* First */}
            <div className='w-full flex py-5 md:py-15 flex-col lg:flex-row'>
                {/* For lg and below*/}
                <div className='flex flex-col lg:hidden items-center'>
                    {/* Left */}
                    <div className='w-full sm:w-[85%] md:w-[70%] relative group cursor-pointer '>
                        <img className='h-full w-full object-cover rounded-xl' src={bankImg} alt="" />
                        <div className='hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex justify-center items-center h-25 w-25 border-3 border-white dark:border-gray-300 bg-black/50 dark:bg-white/20 rounded-full'>
                            <div>
                                <MdArrowOutward size={40} color='white'/>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='w-full flex flex-col md:pr-10 pt-5'>
                        <h1 className='text-5xl md:text-7xl font-light text-[#8b8a8f] dark:text-gray-500'>01.</h1>
                        <h1 className='text-4xl md:text-5xl font-semibold mt-4 mb-4 text-black dark:text-white'>Finance Banking Website</h1>
                        <h3 className='text-lg font-medium text-[#7a7a7a] dark:text-gray-400'>The Finserve banking app is a vital source aim at improving financial literacy and accessibility for users by offering comprehensive digital support to both professionals and customers.</h3>
                        <div className='flex gap-2 my-4'>
                            <button className='flex whitespace-nowrap justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit hover:scale-105 transition-all delay-50 hover:text-[#fefefe] hover:bg-black/90 dark:hover:bg-white dark:hover:text-black hover:border-white dark:hover:border-gray-300 text-black dark:text-white'>View Project <MdArrowOutward /></button>
                            <button className='flex whitespace-nowrap justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit hover:scale-105 transition-all delay-50 bg-black/90 dark:bg-white text-white dark:text-black hover:bg-[#fefefe] dark:hover:bg-gray-800 hover:text-black/90 dark:hover:text-white hover:border-black dark:hover:border-gray-300'>Github repo <MdArrowOutward /></button>
                        </div>
                    </div>
                </div>


                {/* For lg and above */}
                <div className='hidden lg:flex w-full flex-row'> 
                    {/* Left */}
                    <div className='w-[50%] flex flex-col md:pr-10 pt-5'>
                        <h1 className='text-7xl font-light text-[#8b8a8f] dark:text-gray-500'>01.</h1>
                        <h1 className='text-5xl font-semibold mt-4 mb-7 text-black dark:text-white'>Finance Banking Website</h1>
                        <h3 className='text-lg font-medium text-[#7a7a7a] dark:text-gray-400'>The Finserve banking app is a vital source aim at improving financial literacy and accessibility for users by offering comprehensive digital support to both professionals and customers.</h3>
                        <div className='flex gap-5'>
                            <button className='flex justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit my-10 hover:scale-105 transition-all delay-50 text-black dark:text-white hover:text-[#fefefe] hover:bg-black/90 dark:hover:bg-white dark:hover:text-black hover:border-white dark:hover:border-gray-300'>View Project <MdArrowOutward /></button>
                            <button className='flex justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit my-10 hover:scale-105 transition-all delay-50 bg-black/90 dark:bg-white text-white dark:text-black hover:bg-[#fefefe] dark:hover:bg-gray-800 hover:text-black/90 dark:hover:text-white hover:border-black dark:hover:border-gray-300'>Github repo <MdArrowOutward /></button>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='w-[50%] relative group cursor-pointer transition-all duration-300'>
                        <img className='h-full w-full object-contain rounded-xl' src={bankImg} alt="" />
                        <div className='hidden transition-all duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex justify-center items-center h-25 w-25 border-3 border-white dark:border-gray-300 bg-black/50 dark:bg-white/20 rounded-full'>
                            <div>
                                <MdArrowOutward className='transition-all duration-300' size={40} color='white'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects 