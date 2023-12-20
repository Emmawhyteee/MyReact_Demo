import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './sections/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Team from './sections/Team.jsx'


import './App.css'

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        
      </Routes>
    </>
  )
}

export default App;
