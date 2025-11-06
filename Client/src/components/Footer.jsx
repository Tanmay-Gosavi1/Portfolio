import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { MdArrowOutward } from "react-icons/md";
import { TbClipboardCopy } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Footer = () => {

    const email = 'work.tanmayy@gmail.com';
    const phoneNo = '+91 79723038018';
    const handleCopyEmail = async ()=>{
        try {
            await navigator.clipboard.writeText(email);
            toast.success("Email copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy email:", error);
            toast.error("Failed to copy email.");
        }
    }
    const handleCopyPhone = async ()=>{
        try {
            await navigator.clipboard.writeText(phoneNo);
            toast.success("Phone number copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy phone number:", error);
            toast.error("Failed to copy phone number.");
        }
    }
  return (
    <div className='px-5 sm:px-14 md:px-20 py-8 flex flex-col items-center w-full'>
        <Toaster position='top-center'/>
        {/* div1 */}
        <div className='w-full flex flex-col justify-center items-center pb-5'>
            <div className='pb-8'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold text-center text-black dark:text-white'>Ready to build something</h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-light text-center font-lobster text-[#8a8a94] dark:text-gray-400'>remarkable ?</h1>
            </div>
            <div className='shadow-black dark:shadow-white rounded-full shadow-xl/20 transition-all delay-100 hover:scale-105'>
                <Link to={'/form'} className='w-fit whitespace-nowrap transition-colors delay-50 flex justify-center items-center hover:cursor-pointer gap-1.5 px-5 md:px-10 py-3 text-[#fefefe] bg-gradient-to-tl from-black/70 via-black/90 to-black dark:from-white/70 dark:via-white/90 dark:to-white dark:text-black hover:bg-gradient-to-tl hover:from-white/70 hover:via-white/90 hover:to-white dark:hover:from-black/70 dark:hover:via-black/90 dark:hover:to-black hover:text-black/90 dark:hover:text-white font-semibold rounded-full border-2 border-white/20 dark:border-white hover:border-black dark:hover:border-white'>Let's Talk<span className='font-extrabold'><MdArrowOutward size={20}  /></span></Link>
            </div>
        </div>

        {/* div2 */}
        <div className='w-full pt-4 md:pt-7 flex flex-col md:flex-row justify-center items-center border-t-1 border-black/30 dark:border-white/20 gap-3'>
            <div onClick={handleCopyEmail} className='hover:cursor-pointer w-full font-medium flex justify-center items-center py-3 bg-[#f6f4f4] dark:bg-black border border-gray-300/30 dark:border-white/20 hover:bg-[#f0eeee] dark:hover:bg-gray-900 rounded-2xl relative text-black dark:text-white'>
                {email} 
                <div className='cursor-pointer absolute right-4 bottom-[50%] translate-y-[50%] text-black dark:text-white'><TbClipboardCopy size={20}  /></div>
            </div>
            <div onClick={handleCopyPhone} className='hover:cursor-pointer w-full font-medium flex justify-center items-center py-3 bg-[#f6f4f4] dark:bg-black border border-gray-300/30 dark:border-white/20 hover:bg-[#f0eeee] dark:hover:bg-gray-900 rounded-2xl relative text-black dark:text-white'>
                {phoneNo} 
                <div className='cursor-pointer absolute right-4 bottom-[50%] translate-y-[50%] text-black dark:text-white'><TbClipboardCopy size={20}  /></div>
            </div>
            <a href='https://linkedin.com/in/tanmay-gosavi-a42368324' target='_blank' className='w-full flex font-medium justify-center items-center py-3 bg-[#f6f4f4] dark:bg-black border border-gray-300/30 dark:border-white/20 rounded-2xl hover:bg-[#f0eeee] dark:hover:bg-gray-900 text-black dark:text-white'>LinkedIn</a >
        </div>
    </div>
  )
}

export default Footer