import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import avatar1 from '../assets/avatar1.webp'

const Reviews = () => {
  return (
    <div className='w-full mb-8'>
        <div className='text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10'>
            What My Client Say
        </div>
        {/* Reviews */}
        <div className='w-full flex gap-2 md:gap-4 justify-center items-center'>
            {/* Review 1 */}
            <Review isHidden={true} />
            <Review  isHidden={false}/>
            <Review isHidden={true}/>
        </div>
    </div>
  )
}

const Review = ({ isHidden }) => {
    return (
        <div className={`border-1 border-[#d3d2d2] w-69 p-4 rounded-lg shadow-md/20 ${isHidden  ? 'hidden sm:block mt-5' : ''}`}>
            {/* Quote div */}
            <div className='w-full '>
                <RiDoubleQuotesL size={34} color='#8a8a94' />
            </div>

            {/* Experience */}
            <div className='w-full py-2'>
                <p className='text-[#4d4e54] tracking-tight text-sm md:text-base '>Tanmay is an exceptional UI/UX designer who transformed our website with his innovative designs and user-centric approach. His attention to detail and creativity are unmatched.</p>
            </div>

            {/* Name , Role , Company */}
            <div className='w-full flex justify-start gap-1.5 pt-3'>
                <div className='h-12 w-12 rounded-full overflow-hidden flex justify-center items-center'>
                    <img className='w-full h-full object-cover rounded-full' src={avatar1} alt="" />
                </div>
                <div className='w-fit flex flex-col justify-center'>
                    <h1 className='text-base font-medium'>John snow</h1>
                    <p className='text-sm'>Co-founder Gitlab</p>
                </div>
            </div>
        </div>
    )
}


export default Reviews