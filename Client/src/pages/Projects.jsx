import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import slackImg from '../assets/SlackImg.png'
import { Link, redirect } from 'react-router-dom';   

const Projects = () => {
    const pro = [
        {
            projectName : "Slack URL Shortner",
            projectDescription : "The Slack URL Shortner is a tool designed to simplify the sharing of links within Slack channels by providing shortened URLs.",
            projectTech : ["ReactJs" , "TailwindCss" , "NodeJs" , "MongoDB" ],
            liveLink : 'https://slack-url-shortner.onrender.com',
            githubLink : 'https://github.com/Tanmay-Gosavi1/URL_Shortner',
            projectImg : slackImg
        }
    ]
  return (
    <div id='projects' className='w-full flex flex-col pt-8 md:pt-15 selection:text-white selection:bg-black dark:selection:text-black dark:selection:bg-white'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold mb-3 md:mb-0 lg:mb-8 text-black dark:text-white'>Explore My <span className='font-lobster text-[#8a8a94] dark:text-gray-400 font-light'>Projects</span></h1>
        {/* Projects*/}
        <div className='w-full flex flex-col '>
            {/* First */}
            {
                pro.map((p, idx)=>(
                    <div key={idx} className='w-full flex py-5 md:py-15 flex-col lg:flex-row'>
                        {/* For lg and below*/}
                        <div className='flex flex-col lg:hidden items-center'>
                            {/* Left */}
                            <div className='w-full sm:w-[85%] md:w-[70%] relative group cursor-pointer '>
                                <img className='h-full w-full object-cover rounded-xl' src={p.projectImg} alt="" />
                            </div>
                            {/* Right */}
                            <div className='w-full flex flex-col md:pr-10 pt-5'>
                                <h1 className='text-5xl md:text-7xl font-light text-[#8b8a8f] dark:text-gray-500'>{`0${idx + 1}.`}</h1>
                                <h1 className='text-4xl md:text-5xl font-semibold mt-4 mb-4 text-black dark:text-white'>{p.projectName}</h1>
                                <h3 className='text-lg font-medium text-[#7a7a7a] dark:text-gray-400'>{p.projectDescription}</h3>
                                <h3 className='text-lg font-medium text-[#7a7a7a] dark:text-gray-400'>{p.projectTech[0]}</h3>
                                <div className='flex gap-2 my-4'>
                                    <Link to={p.liveLink} target='_blank' className='flex whitespace-nowrap justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit hover:scale-105 transition-all delay-50 hover:text-[#fefefe] hover:bg-black/90 dark:hover:bg-white dark:hover:text-black hover:border-white dark:hover:border-gray-300 text-black dark:text-white'>View Project <MdArrowOutward /></Link>
                                    <Link to={p.githubLink} target='_blank' className='flex whitespace-nowrap justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit hover:scale-105 transition-all delay-50 bg-black/90 dark:bg-white text-white dark:text-black hover:bg-[#fefefe] dark:hover:bg-gray-800 hover:text-black/90 dark:hover:text-white hover:border-black dark:hover:border-gray-300'>Github repo <MdArrowOutward /></Link>
                                </div>
                            </div>
                        </div>


                        {/* For lg and above */}
                        <div className='hidden lg:flex w-full flex-row'> 
                            {/* Left */}
                            <div className='w-[50%] flex flex-col md:pr-10 pt-5'>
                                <h1 className='text-7xl font-light text-[#8b8a8f] dark:text-gray-500'>{`0${idx + 1}.`}</h1>
                                <h1 className='text-5xl font-semibold mt-4 mb-7 text-black dark:text-white'>{p.projectName}</h1>
                                <h3 className='text-lg font-medium text-[#7a7a7a] dark:text-gray-400'>{p.projectDescription}</h3>
                                <h3 className='text-lg font-medium text-black dark:text-white pt-5 pb-2'>TechStack : {
                                        p.projectTech.map((tech , idx)=>(
                                            <span key={idx} className='text-[#7a7a7a] dark:text-white/70'>{tech}{idx < p.projectTech.length - 1 ? ', ' : ''}</span>
                                        ))
                                    }</h3>
                                <div className='flex gap-5 mt-5'>
                                    <Link to={p.liveLink} target='_blank' className='flex justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit mb-10 hover:scale-105 transition-all delay-50 text-black dark:text-white hover:text-[#fefefe] hover:bg-black/90 dark:hover:bg-white dark:hover:text-black hover:border-white dark:hover:border-gray-300'>View Project <MdArrowOutward /></Link>
                                    <Link to={p.githubLink} target='_blank' className='flex justify-center items-center gap-1.5 cursor-pointer px-4 py-2.5 rounded-full border-1 border-black dark:border-gray-600 w-fit mb-10 hover:scale-105 transition-all delay-50 bg-black/90 dark:bg-white text-white dark:text-black hover:bg-[#fefefe] dark:hover:bg-gray-800 hover:text-black/90 dark:hover:text-white hover:border-black dark:hover:border-gray-300'>Github repo <MdArrowOutward /></Link>
                                </div>
                            </div>
                            {/* Right */}
                            <div className='w-[50%] relative group cursor-pointer transition-all duration-300'>
                                <img onClick={()=>redirect(p.liveLink)} className='h-full w-full object-contain rounded-xl' src={p.projectImg} alt="" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects 