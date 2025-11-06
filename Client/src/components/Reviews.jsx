import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import avatar1 from '../assets/avatar1.webp'
import avatar2 from '../assets/avatar2.webp'
import avatar3 from '../assets/avatar3.webp'

const Reviews = () => {
    const data =[
                    {
                        "company_name": "Innovatech Solutions",
                        "founder_name": "Elias Vance (CEO)",
                        "review": "Our developer delivered robust and scalable features using the MERN stack. Their implementation of microservices architecture drastically improved system efficiency. A true full-stack expert who translates business needs into elegant code.",
                        "avatar" : avatar1
                    },
                    {
                        "company_name": "Apex Digital Labs",
                        "founder_name": "Dr. Sarah Chen (CTO)",
                        "review": "A high-impact developer who excels in both front-end and back-end performance. They optimized our MongoDB queries and fine-tuned the React component rendering, resulting in a 40% reduction in page load time for our main application. Highly collaborative .",
                        "avatar" : avatar2
                    },
                    {
                        "company_name": "Global Synergy",
                        "founder_name": "Priya Sharma (Founder)",
                        "review": "This developer's mastery of Node.js and Express was evident in the secure RESTful APIs they built for our new platform. Their commitment to well-tested code ensured smooth deployment post-launch bugs. A dependable asset to any MERN team.",
                        "avatar" : avatar3
                    }
                ];
  return (
    <div className='w-full mb-8'>
        <div className='text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 text-black dark:text-white'>
            What My Client Say
        </div>
        {/* Reviews */}
        <div className='w-full flex gap-2 md:gap-4 justify-center items-center'>
            {/* Review 1 */}
            <Review founder_name={data[0].founder_name} company_name={data[0].company_name} review={data[0].review} isHidden={true} avatar={data[0].avatar} />
            <Review founder_name={data[1].founder_name} company_name={data[1].company_name} review={data[1].review} isHidden={false} avatar={data[1].avatar} />
            <Review founder_name={data[2].founder_name} company_name={data[2].company_name} review={data[2].review} isHidden={true} avatar={data[2].avatar} />
        </div>
    </div>
  )
}

const Review = ({founder_name , company_name , review ,isHidden , avatar }) => {
    return (
        <div className={`border-1 border-[#d3d2d2]/30 dark:border-white/20 w-69 p-4 rounded-lg shadow-md/20 bg-white dark:bg-black ${isHidden  ? 'hidden sm:block mt-5' : ''} hover:translate-y-[-5px] transition-all delay-150`}>
            {/* Quote div */}
            <div className='w-full '>
                <RiDoubleQuotesL size={34} color='#8a8a94' className='dark:text-gray-400' />
            </div>

            {/* Experience */}
            <div className='w-full py-2'>
                <p className='text-[#4d4e54] dark:text-gray-300 tracking-tight text-sm md:text-base '>{review}</p>
            </div>

            {/* Name , Role , Company */}
            <div className='w-full flex justify-start gap-1.5 pt-3'>
                <div className='h-12 w-12 rounded-full overflow-hidden flex justify-center items-center'>
                    <img className='w-full h-full object-cover rounded-full' src={avatar} alt="" />
                </div>
                <div className='w-fit flex flex-col justify-center'>
                    <h1 className='text-base font-medium text-black dark:text-white'>{founder_name}</h1>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{company_name}</p>
                </div>
            </div>
        </div>
    )
}


export default Reviews