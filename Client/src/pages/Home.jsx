import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import Projects from './Projects';
import Techstack from '../components/Techstack';
import Faqs from '../components/Faqs';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer.jsx'
import header_img from '../assets/bestAvatar.jpg'
import Highlight from '../components/Highlight.jsx';
import axios from 'axios';

const Home = ({textEnter , textLeave }) => {
  // Ping backend to wake it up on component mount
  useEffect(()=>{
    const startBackend = async()=>{
      const BackendUrl = "https://portfolio-backend-lvoz.onrender.com/"
      try {
          await axios.get(BackendUrl);
      } catch (error) {
          console.error("Error starting backend:", error);
      }
    }
    startBackend();
  },[]); 
  return (
    <div id='home' className='min-h-screen w-full px-5 sm:px-14 md:px-20 pb-5 flex flex-col items-center pt-19 bg-[#fefefe] dark:bg-black'>
        {/* Header Div */}
      <div className='my-5 md:my-7'>
          <div className='flex justify-center sm:justify-between items-center h-100 gap-2 w-full'>
              {/* Left div */}
              <div className='hidden sm:flex flex-col gap-3'>
                  <a className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50' href='https://x.com/tanmay_gosavi1' target='_blank'>Twitter</a>
                  <a className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50' href='https://linkedin.com/in/tanmay-gosavi-a42368324' target='_blank'>LinkedIn</a>
                  <a className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50' href='https://github.com/Tanmay-Gosavi1' target='_blank'>Github</a>
              </div>

              {/* Image div */}
              <div className='h-full w-[92%] sm:w-[80%] md:w-[40%] lg:w-[26%] rounded-3xl overflow-hidden relative shadow-black dark:shadow-white shadow-xl/20'>
                <img className='h-full w-full object-cover'src={header_img} alt="header_img" />
                <div className='absolute left-[50%] bottom-3 translate-x-[-50%]  hover:scale-105 transition-all delay-150'>
                  <Link to={'/form'} className='shadow-black dark:shadow-white shadow-xl/20 w-full transition-colors delay-50 whitespace-nowrap flex justify-center items-center hover:cursor-pointer gap-1.5 px-8 py-3 bg-[#fefefe] dark:bg-white text-black hover:text-[#fefefe] hover:bg-black/90 dark:hover:bg-black dark:hover:text-white font-semibold rounded-full border-2 border-black/20 dark:border-white hover:border-white dark:hover:border-white'>Let's Talk<span className='font-extrabold'><MdArrowOutward size={20}  /></span></Link>
                </div>
              </div>

              {/* Right div */}
              <div className='hidden sm:flex flex-col gap-2.5 text-right'>
                  <h1 className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>Development</h1>
                  <h1 className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>UI/UX Design</h1>
                  <h1 className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>Product Design</h1>
                  <h1 className='text-[#64656c] dark:text-gray-400 hover:text-[#484848] dark:hover:text-gray-200 hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>Strategy & Business</h1>
              </div>
          </div>

        {/* Header text */}
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-[33px] sm:text-4xl md:text-5xl lg:text-7xl flex flex-col w-full justify-center items-center mt-9 text-center max-md:leading-9 selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white'>
          <h1 className=' font-bold text-[#111724] dark:text-white'>Full Stack <span className='bg-black dark:bg-white text-white dark:text-black px-1'>Developer</span></h1>
          <h1 className=' font-bold text-black dark:text-white'><span className='font-lobster tracking-wide font-medium text-[#8a8a94] dark:text-gray-400'>Specializing </span>in Scalable Web Applications</h1>
        </div>

        {/* Introduction text */}
        <div className='text-center text-lg text-[#4d4e54] dark:text-white my-5 font-medium opacity-80 w-full md:w-[70%] mx-auto max-md:leading-6 selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white'>
          <h1>Hello! I am Tanmay Gosavi, a full-stack web developer based in Gujrat. I specialize in frontend and backend development, crafting seamless digital experiences with clean, optimized code.</h1>
        </div>
    </div>

      {/* Highlighted box */}
      <Highlight />
      <Projects />
      <Techstack />
      <Reviews />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home