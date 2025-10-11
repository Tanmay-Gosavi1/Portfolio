import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Form from './pages/Form.jsx'


const App = () => {
  return (
    <div className='selection:text-white selection:bg-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App