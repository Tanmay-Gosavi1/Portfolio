import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Faqs = () => {
  const faqData = [
    {
      "question": "What information do you need to start a project?",
      "answer": "To get started, I’ll need details about your project goals, target users, preferred tech stack (if any), design inspirations, and the key features you want. Don’t worry — I’ll guide you through everything during our initial discussion.",
      "open": false
    },
    {
      "question": "How do you structure your project pricing?",
      "answer": "My pricing depends on factors like project size, complexity, required technologies, and timelines. Once I understand your needs, I’ll provide a transparent and customized quote.",
      "open": false
    },
    {
      "question": "What technologies do you specialize in?",
      "answer": "I work with the MERN stack (MongoDB, Express, React, Node.js) along with tools like Next.js, Tailwind CSS, and RESTful or GraphQL APIs. I’m also familiar with databases, authentication systems, and deployment on cloud platforms.",
      "open": false
    },
    {
      "question": "Do you provide ongoing maintenance or updates?",
      "answer": "Yes, I offer post-deployment support and maintenance. This includes bug fixes, updates, performance optimization, and adding new features as your project grows.",
      "open": false
    },
    {
      "question": "Can you integrate third-party APIs or services?",
      "answer": "Absolutely! I can integrate APIs such as payment gateways, email services, authentication systems, and analytics tools to enhance your application’s functionality.",
      "open": false
    },
    {
      "question": "How can we start working together?",
      "answer": "You can reach out via my contact form or email. Once we connect, we’ll discuss your goals, define the project scope, and plan the next steps to get started.",
      "open": false
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