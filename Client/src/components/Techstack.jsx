import React from 'react'
import { motion } from 'motion/react'
import TechLogo from './TechLogo'

const Techstack = () => {
  return (
    <div id='techstack' className='w-full md:w-[80%] overflow-hidden relative max-md:py-6 md:pt-16 md:pb-8'>
        <div className='mb-8 sm:mb-10'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-center font-bold text-black dark:text-white'>My Tech Stack</h1>
        </div>
        {/* All logos */}
        <div className='relative'>
            <motion.div className='flex gap-2 sm:gap-3 md:gap-4 py-3 sm:py-5 w-max'
                animate={{ x: "-50%" }}
                transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear'
                }}
            >
                {/* First set of logos */}
                <TechLogo />
                
                {/* Duplicate set for seamless loop */}
                <TechLogo />
                
            </motion.div>
            
            {/* Left fade overlay */}
            <div className='absolute top-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-r from-[#fefefe] dark:from-black to-transparent pointer-events-none z-10'></div>
            
            {/* Right fade overlay */}
            <div className='absolute top-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 h-full bg-gradient-to-l from-[#fefefe] dark:from-black to-transparent pointer-events-none z-10'></div>
        </div>
    </div>
  )
}

export default Techstack