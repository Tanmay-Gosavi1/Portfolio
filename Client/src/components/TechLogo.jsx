import React from 'react'
import reactLogo from '../assets/react.png'
import htmlLogo from '../assets/html5.png'
import cssLogo from '../assets/css3.png'
import jsLogo from '../assets/javascript.png'
import nodeLogo from '../assets/nodejs.png'
import expressLogo from '../assets/express.png'
import mongoLogo from '../assets/mongodb.png'
import tailwindLogo from '../assets/tailwind-css.png'
import framerLogo from '../assets/framer.png'
import mysqlLogo from '../assets/mysql.png'
import postgresqlLogo from '../assets/postgresql.png'
import githubLogo from '../assets/github.png'

const TechLogo = () => {
  return (
    <>
       <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={htmlLogo} alt="HTML Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={cssLogo} alt="Css Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={jsLogo} alt="JavaScript Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={reactLogo} alt="React Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={tailwindLogo} alt="Tailwind Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={nodeLogo} alt="Node Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={framerLogo} alt="Framer Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={expressLogo} alt="Express Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={mongoLogo} alt="MongoDB Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={mysqlLogo} alt="MySQL Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={postgresqlLogo} alt="PostgreSQL Logo" />
        </div>
        <div className='flex justify-center items-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-[#faf9f9] rounded-full p-2 sm:p-3 md:p-4 lg:p-5'>
            <img className='w-full h-full object-contain' src={githubLogo} alt="PostgreSQL Logo" />
        </div>
    </>
  )
}

export default TechLogo