import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import Projects from './Projects';
import Techstack from '../components/Techstack';
import Faqs from '../components/Faqs';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer.jsx'
import header_img from '../assets/bestAvatar.jpg'


const Home = () => {
  return (
    <div id='home' className='min-h-screen w-full px-5 sm:px-14 md:px-20 pb-5 flex flex-col items-center pt-19 '>
      {/* Header Div */}
        <div className='flex justify-center sm:justify-between items-center h-100 gap-2 w-full'>
            {/* Left div */}
            <div className='hidden sm:flex flex-col gap-3'>
                <a className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50' href='https://x.com/tanmay_gosavi1' target='_blank'>Twitter</a>
                <a className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50' href='https://linkedin.com/in/tanmay-gosavi-a42368324' target='_blank'>LinkedIn</a>
                <a className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50' href='https://github.com/Tanmay-Gosavi1' target='_blank'>Github</a>
            </div>

            {/* Image div */}
            <div className='h-full w-[92%] sm:w-[80%] md:w-[40%] lg:w-[26%] rounded-3xl overflow-hidden relative shadow-black shadow-xl/20'>
              <img className='h-full w-full object-cover'src={header_img} alt="header_img" />
              <div className='absolute left-[50%] bottom-3 translate-x-[-50%]  hover:scale-105 transition-all delay-150'>
                <Link to={'/form'} className='shadow-black shadow-xl/20 w-full transition-colors delay-50 whitespace-nowrap flex justify-center items-center hover:cursor-pointer gap-1.5 px-8 py-3 bg-[#fefefe] text-black hover:text-[#fefefe] hover:bg-black/90 font-semibold rounded-full border-2 border-black/20 hover:border-white'>Let's Talk<span className='font-extrabold'><MdArrowOutward size={20}  /></span></Link>
              </div>
            </div>

            {/* Right div */}
            <div className='hidden sm:flex flex-col gap-2.5 text-right'>
                <h1 className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>Development</h1>
                <h1 className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>UI/UX Design</h1>
                <h1 className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>Product Design</h1>
                <h1 className='text-[#64656c] hover:text-[#484848] hover:scale-105 hover:font-medium cursor-pointer transition-all delay-50'>Strategy & Business</h1>
            </div>
        </div>

      {/* Header text */}
      <div className='text-[33px] sm:text-4xl md:text-5xl lg:text-7xl flex flex-col w-full justify-center items-center mt-9 text-center max-md:leading-9 selection:text-white selection:bg-black'>
        <h1 className=' font-bold text-[#111724]'>Full Stack <span className='bg-black text-white px-1'>Developer</span></h1>
        <h1 className=' font-bold '><span className='font-lobster tracking-wide font-medium text-[#8a8a94]'>Specializing </span>in Scalable Web Applications</h1>
      </div>

      {/* Introduction text */}
      <div className='text-center text-lg text-[#4d4e54] my-5 font-medium opacity-80 w-full md:w-[70%] mx-auto max-md:leading-6 selection:text-white selection:bg-black'>
        <h1>Hello! I am Tanmay Gosavi, a full-stack web developer based in Gujrat. I specialize in frontend and backend development, crafting seamless digital experiences with clean, optimized code.</h1>
      </div>

      {/* Highlighted box */}
      <div className='hidden sm:flex flex-col md:flex-row justify-center items-center bg-[#f6f4f4] w-[90%] md:w-[80%] rounded-xl p-4 md:p-7 gap-3 mt-7'>
        <div className='w-full flex flex-col justify-center md:border-r-2 border-[#c7c4c4] items-center'>
            <h1 className='text-4xl font-bold whitespace-nowrap'>5+ Years</h1>
            <p className='text-[#64656c]'>Working Experience</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center md:border-r-2  border-[#c7c4c4]'>
            <h1 className='text-4xl font-bold'>50+</h1>
            <p className='text-[#64656c]'>Projects Delivered</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold'>20+</h1>
            <p className='text-[#64656c]'>Happy Clients</p>
        </div>
      </div>

      <Projects />
      <Techstack />
      <Reviews />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Home