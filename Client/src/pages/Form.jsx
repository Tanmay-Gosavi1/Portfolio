import React from 'react'
import toast , { Toaster } from 'react-hot-toast';
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { IoMailSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { TbClipboardCopy } from "react-icons/tb";


const Form = () => {
    const { register, handleSubmit , reset } = useForm();

    const submitEvent = async (data)=>{
        try {
            const { name , email , message } = data;
            const res = await axios.post('http://localhost:5000/api/contact' , { name , email , message });
            console.log(res);
            if(res.status === 200){
                toast.success("Thank you for contacting me!");
                reset();
            }else{
                toast.error("Something went wrong!");
            }
            
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message.");
        }
    }

    const handleCopy = async (data)=>{
        try {
            await navigator.clipboard.writeText(data);
            console.log(data)
            toast.success("Copied successfully")
        } catch (error) {
            console.log(error)
            toast.error("Not Copied")
        }
    }

  return (
    <div className='min-h-screen w-full flex justify-center items-center pt-19 px-5 sm:px-14 md:px-20'>
        <Toaster position='top-center'/>
        <div className='flex flex-col md:flex-row w-full md:justify-between lg:justify-center'>
            {/* left div */}
            <div className=' md:flex md:flex-col md:w-[50%] lg:w-[40%] justify-center pr-10 md:mb-20'>
                <h1 className='text-base font-medium text-[#8b8b8f]'>I'm here to collaborate</h1>
                <h1 className='text-3xl md:text-5xl font-semibold'>Got an Idea?</h1>
                <h2 className='text-3xl md:text-5xl font-semibold leading-10 md:leading-13'>I’ll Code It Into <span className='bg-black text-white px-2'>Reality</span>!</h2>
                <h1 className='text-sm font-medium mt-5 mb-10'>Are you looking for a professional and creative web developer to bring your ideas to life? Let’s build something amazing together.</h1>
                <div className='flex w-fit items-center mb-5'>
                    <IoMailSharp size={40} color='black' />
                    <div className='flex flex-col ml-3 justify-center'>
                        <h1 className='text-xs font-medium text-[#8a8a94]'>Email</h1>
                        <div onClick={()=>handleCopy('work.tanmayy@gmail.com')} className='flex justify-center items-center gap-1 cursor-pointer'>
                            <h1 className='text-base font-medium'>work.tanmayy@gmail.com</h1><TbClipboardCopy/>
                        </div>
                    </div> 
                </div>
                <div className='flex w-fit items-center mb-5'>
                    <IoMdCall size={40} color='black' />
                    <div className='flex flex-col ml-3 justify-center'>
                        <h1 className='text-xs font-medium text-[#8a8a94]'>Phone</h1>
                        <div onClick={()=>handleCopy('7972308018')} className='flex justify-center items-center gap-1 cursor-pointer'>
                            <h1  className='text-base font-medium'>+91 7972308018</h1><TbClipboardCopy/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className='w-full md:w-[50%] lg:w-[40%] p-5 md:p-10 border-2 border-black/10 shadow-xl rounded-xl bg-white'>
                <form action="" onSubmit={handleSubmit(submitEvent)}>
                    <div className='flex flex-col mb-4'>
                        <label className='mb-2 font-medium text-[#565658]' htmlFor="name">Name</label>
                        <input {...register("name")} className='outline-none p-2 rounded-md bg-[#f6f4f4]' type="text" id="name" name="name" placeholder='Enter your name' required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='mb-2 font-medium text-[#565658]' htmlFor="email">Email</label>
                        <input {...register('email')} className='outline-none p-2 rounded-md bg-[#f6f4f4]' type="email" id="email" name="email" placeholder='Enter your email' required />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='mb-2 font-medium text-[#565658]' htmlFor="message">Message</label>
                        <textarea {...register('message')} className='outline-none p-2 rounded-md bg-[#f6f4f4]' id="message" rows="4" name="message" placeholder='Type your message' required></textarea>
                    </div>
                    <div className='flex gap-5 mt-5 md:mt-10 px-2 py-2 w-fit rounded-full bg-black text-white font-semibold cursor-pointer hover:scale-102'>
                        <div className='h-9 w-9 rounded-full flex justify-center items-center bg-white'><FaArrowRightLong size={20} color='black' /></div>
                        <button className='pr-3 cursor-pointer' type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Form