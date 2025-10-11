import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Faqs = () => {
    const faqData = [
  {
    "question": "What information do you need to get started?",
    "answer": "To begin, I’ll need a clear understanding of your goals, target audience, brand guidelines (if available), and any specific features or design preferences you have in mind. I’ll guide you through the details during our initial consultation.",
    "open" : false
  },
  {
    "question": "What do you charge for your services?",
    "answer": "My pricing varies depending on the project’s scope, complexity, and requirements. After discussing your goals and deliverables, I’ll provide a detailed quote tailored to your needs.",
    "open" : false
  },
  {
    "question": "Can you work within our brand guidelines?",
    "answer": "Absolutely! I can seamlessly integrate your existing brand guidelines to ensure consistency across your designs and digital presence.",
    "open" : false
  },
  {
    "question": "Do you offer ongoing support after project completion?",
    "answer": "Yes, I offer post-project support and maintenance to help with updates, troubleshooting, or further improvements as needed.",
    "open" : false
  },
  {
    "question": "How do we get started?",
    "answer": "Simply reach out through my contact form or email to schedule an initial consultation. We’ll discuss your goals, project timeline, and next steps.",
    "open" : false
  },
  {
    "question": "Are there any tutorials available for new users of Forerunner™?",
    "answer": "Yes, Forerunner™ provides a variety of tutorials and guides to help new users get started quickly and effectively.",
    "open" : false
  }
]
const [faq, setFaq] = useState(faqData);

  return (
    <div className='w-full flex flex-col md:flex-row py-4 md:py-9'>
        <div className='w-full md:w-[50%] pb-5'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold max_md:text-center'>Frequently Asked <span className='font-lobster text-[#8a8a94] font-light'>Questions</span></h1>
        </div>
        <div className='w-full md:w-[50%] flex flex-col gap-2 md:gap-4'>
            {
                faq.map((ele , idx)=>(
                    <div key={idx} onClick={()=>setFaq(faq.map((item , i)=> i==idx ? {...item , open: !item.open} : (item.open ? {...item , open: !item.open} : item)))} className='relative cursor-pointer flex flex-col p-2 border-1 border-[#e4e1e1] rounded-lg'>
                        <h1 className='text-base md:text-lg font-medium pr-6'>{ele.question}</h1>
                        <div className='absolute top-3 right-3 cursor-pointer'>{ele.open ? <IoIosArrowUp size={20}/> : <IoIosArrowDown size={20}/>}</div>
                        <p className='text-[#4d4e54] text-sm md:text-base mt-1.5'>{ele.open ? ele.answer : ""}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Faqs