import React, { useRef } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Prepmate from '../assets/Prepmate.png';
import RoasterAI from '../assets/RoasterAI.png';

// 1. DUMMY DATA (Added more items to demonstrate the scroll effect)
// Replace 'slackImg' with your actual imports
import slackImg from '../assets/SlackImg.png'; 

const projectsData = [
    {
            projectName : "Prepmate - AI Study Assistant",
            projectDescription : "Prepmate is an AI-powered study assistant designed to help students enhance their learning experience by providing personalized study plans, resources.",
            projectTech : ["ReactJs", "NodeJs" , "Express" , "MongoDB" , "Gemini API" , "Cloudinary" , "TailwindCss" ],
            liveLink : 'https://prepmate-study-buddy.onrender.com/',
            githubLink : 'https://github.com/Tanmay-Gosavi1/AI-powered-learning-assistant',
            projectImg : Prepmate
        },
        {
            projectName : "RoasterAI",
            projectDescription : "Give funny and friendly roasts replies to your texts.",
            projectTech : ["ReactJs" , "NodeJs" , "Express" , "MongoDB" , "Gemini API" ,"TailwindCss" ],
            liveLink : 'https://roastbot-client.onrender.com/',
            githubLink : 'https://github.com/Tanmay-Gosavi1/RoastBot',
            projectImg : RoasterAI
        },
        {
            projectName : "Slack URL Shortner",
            projectDescription : "The Slack URL Shortner is a tool designed to simplify the sharing of links within Slack channels by providing shortened URLs.",
            projectTech : ["ReactJs" , "TailwindCss" , "NodeJs" , "MongoDB" ],
            liveLink : 'https://slack-url-shortner.onrender.com',
            githubLink : 'https://github.com/Tanmay-Gosavi1/URL_Shortner',
            projectImg : slackImg
        }
];

const Projects = () => {
    // 2. FRAMER MOTION SETUP
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform scroll progress (0 to 1) into horizontal movement (1% to -95%)
    // The -95% depends on how many items you have. 
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        // The outer container determines the "scroll length". 
        // 300vh means you have to scroll 3 screens worth of height to finish the animation.
        <div ref={targetRef} id='projects' className='relative h-[300vh] w-full bg-white dark:bg-black'>
            
            {/* 3. STICKY CONTAINER */}
            <div className='sticky top-5 flex h-screen items-center overflow-hidden'>
                
                {/* Title (Stays absolute or moves with flow - kept distinct here) */}
                <div className='absolute top-10 left-10 z-10'>
                     <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-black dark:text-white'>
                        Explore My <span className='font-lobster text-[#8a8a94] dark:text-gray-400 font-light'>Projects</span>
                    </h1>
                </div>

                {/* 4. MOTION DIV - This moves horizontally */}
                <motion.div style={{ x }} className='flex gap-10 pl-10 pt-5 sm:pt-9 md:pl-20'>
                    {projectsData.map((project, idx) => (
                        <ProjectCard key={idx} p={project} idx={idx} />
                    ))}
                </motion.div>
            </div>
            
        </div>
    );
};

// 6. SUB-COMPONENT FOR CLEANER CODE (The Card Design)
const ProjectCard = ({ p, idx }) => {
    return (
        <div className='relative h-[70vh] sm:h-[80vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 rounded-3xl bg-gray-100 dark:bg-gray-950/80 overflow-hidden border border-gray-200 dark:border-gray-800 p-3.5 md:p-10 flex flex-col justify-between'>
            
            {/* Content Top */}
            <div>
                <div className='flex justify-between items-start mb-6'>
                    <h1 className='text-6xl font-light text-gray-700/70 dark:text-gray-700 select-none pr-2'>{`0${idx + 1}`}</h1>
                    <div className='flex gap-2 flex-wrap'>
                        {/* Tags */}
                        {p.projectTech.slice(0, 5).map((t, i) => (
                            <span key={i} className='text-xs font-mono px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-500'>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <h1 className='text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white leading-tight'>
                    {p.projectName}
                </h1>
                <p className='text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md'>
                    {p.projectDescription}
                </p>
            </div>

            {/* Content Bottom (Image + Buttons) */}
            <div className='mt-8'>
                <div className='flex gap-4 mb-6'>
                     <LinkButton href={p.liveLink} text="View Project" primary={false} />
                     <LinkButton href={p.githubLink} text="Github Repo" primary={true} />
                </div>
                
                {/* Image Container with hover effect */}
                <div className='w-full h-48 md:h-64 rounded-xl overflow-hidden group'>
                    <img 
                        src={p.projectImg} 
                        alt={p.projectName} 
                        className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105' 
                    />
                </div>
            </div>
        </div>
    );
};

// Helper Button Component
const LinkButton = ({ href, text, primary }) => (
    <Link 
        to={href} 
        target='_blank' 
        className={`flex items-center gap-2 px-5 py-3 rounded-full border whitespace-nowrap transition-all duration-300 text-sm font-medium
        ${primary 
            ? 'bg-black text-white border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white' 
            : 'bg-transparent text-black border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
        }`}
    >
        {text} <MdArrowOutward />
    </Link>
);

export default Projects;