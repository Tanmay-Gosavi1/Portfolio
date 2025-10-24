import React, { useEffect } from 'react'
import { useState } from 'react';
import {TypeAnimation} from 'react-type-animation';
import blackBg from '../assets/blackTexturebg.jpg'

const PreLoader = ({onFinish}) => {
    const greetings = [
        "Hello",
        "Namaste",
        "Bonjour",
        "Namaskar",
        "Hola",
        "Ciao",
        "Hallo",
        "Konnichiwa",
        "Kem Chho"
      ];

      const [greetIndex, setGreetIndex] = useState(-1);

      useEffect(()=>{ //component did mount
        const timerId = setInterval(()=>{
            setGreetIndex(prev=>(prev+1)%greetings.length); 
        }, 390)

        return ()=> clearInterval(timerId); //cleanup on unmount
      } , []) //empty dependency array means run once on mount

    useEffect(()=>{
        setTimeout(()=>{
            onFinish();
        },3600);
    }, [onFinish])

  return (
    <div style={{backgroundImage: `url(${blackBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='px-5 sm:px-14 md:px-20 min-h-screen min-w-screen text-white flex items-center justify-center'>
      <h1 className='text-5xl md:text-8xl font-bold text-center'>
        {greetings[greetIndex]}
      </h1>
    </div>
  )
}

export default PreLoader
// Welcome to my Portfolio