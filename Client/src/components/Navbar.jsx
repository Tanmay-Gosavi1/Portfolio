import React from 'react'
import toast , { Toaster } from 'react-hot-toast';
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Sun , Moon } from 'lucide-react'


const Navbar = ({toggleTheme , isDark}) => {
  const resumeDownload = async () => {
    try {
      window.open('https://portfolio-backend-lvoz.onrender.com/api/download' , '_blank')
      toast.success("Thank you for downloading resume!");
      
    } catch (error) {
      console.error('Resume download error:', error) ;
      toast.error("Failed to download resume.");
    }
  }
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({ behavior: 'smooth' , block: 'start' });
    }
  }
  return (
    <div className='fixed w-full z-99 top-0 flex justify-between items-center px-5 sm:px-14 md:px-20 py-2.5 bg-transparent backdrop-blur-sm dark:backdrop-blur-sm'>
       <Toaster position='top-center'/>
        {/* Logo */}
        <div className='text-2xl font-medium italic flex justify-center items-center'>
            <Link onClick={()=>scrollToSection('home')} className='outline-none font-lobster text-black dark:text-white' to="/">Tanmay.</Link>
        </div>

        {/* Links */}
        <div className='hidden sm:flex justify-center items-center gap-2 sm:gap-6 scroll-smooth font-base '>
            <Link to={'/'} className='outline-none hover:scale-105 hover:font-medium hover:cursor-pointer transition-all delay-50 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300' onClick={()=>scrollToSection('home')}>Home</Link>
            <button className='outline-none hover:scale-105 hover:font-medium hover:cursor-pointer transition-all delay-50 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300' onClick={()=>scrollToSection('projects')}>Projects</button>
            <button className='outline-none hover:scale-105 hover:font-medium hover:cursor-pointer transition-all delay-50 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300' onClick={()=>scrollToSection('techstack')}>About</button>
        </div>
        <div className='flex justify-center items-center'>
          <div>
            <div onClick={toggleTheme} className='h-8 w-8 text-black dark:text-white p-1 bg-gray-100 dark:bg-black border/50 dark:border-white flex justify-center items-center rounded-full hover:scale-105 hover:cursor-pointer transition-all delay-50 mr-4'>
                {isDark ? <Sun />: <Moon/>}
            </div>
          </div>
          {/* Resume Button */}
          <div onClick={resumeDownload} className='flex justify-center items-center bg-gradient-to-b from-black/70 via-black/90 to-black dark:from-white/70 dark:via-white/90 dark:to-white text-white dark:text-black text-sm sm:text-[15px] font-semibold px-2.5 sm:px-6 py-2.25 rounded-full cursor-pointer hover:scale-95 transition-all delay-50'>
              <div className='shadow-black dark:shadow-white shadow-xl/40 flex justify-center items-center gap-0.75'>Resume <span><MdOutlineFileDownload size={20}/></span></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar