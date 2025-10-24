import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Form from './pages/Form.jsx'
import PreLoader from './pages/PreLoader.jsx'

const App = () => {
  const [ready , setReady] = useState(false);

  if(!ready) return <PreLoader onFinish={()=>setReady(true)} />
  return (
    ready && <div className='selection:text-white selection:bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App