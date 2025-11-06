import React, { useState , useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Form from './pages/Form.jsx'
import PreLoader from './pages/PreLoader.jsx'
import { motion } from 'motion/react'

const App = () => {
  const [ready , setReady] = useState(false);

  const [isDark , setIsDark] = useState(()=>{
      const savedtheme = localStorage.getItem('theme')
      return savedtheme === 'dark';
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    // Ensure body background is pure black in dark mode
    if (isDark) {
      document.body.style.backgroundColor = '#000000'
    } else {
      document.body.style.backgroundColor = '#fefefe'
    }
  }, [isDark]) 

  const toggleTheme = () => {
    setIsDark(prev=>!prev)
    localStorage.setItem('theme' , !isDark ? 'dark' : 'light')
	}

  const [mousePosition , setMousePosition] = useState({
    x:0 ,
    y:0
  })

  useEffect(()=>{
    const mouseMovement = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove' , mouseMovement);

    return ()=> window.removeEventListener('mousemove' , mouseMovement);
  },[])

  const [mouseVariant , setMouseVariant] = useState("default");

  const variants = {
    default: {
      x : mousePosition.x - 12,
      y : mousePosition.y - 12,
      backgroundColor: isDark ? "#ffffff" : "#000000",
      transition: { type: 'spring', stiffness: 500, damping: 28  },
    },
    text : {
      height : 150,
      width : 150,
      x : mousePosition.x - 75,
      y : mousePosition.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setMouseVariant("text");
  const textLeave = () => setMouseVariant("default");

  if(!ready) return <PreLoader onFinish={()=>setReady(true)} />
  return (
    ready && <div className='selection:text-white selection:bg-black dark:bg-black dark:text-white dark:selection:text-black dark:selection:bg-white min-h-screen'>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Routes>
        <Route path='/' element={<Home textEnter={textEnter} textLeave={textLeave}/>} />
        <Route path='/form' element={<Form />} />
      </Routes>
      <motion.div className={`bg-black h-6 w-6 rounded-full fixed top-0 left-0 pointer-events-none z-100 `} animate={mouseVariant} variants={variants}></motion.div>
    </div>
  )
}

export default App