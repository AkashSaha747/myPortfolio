import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default Allroutes
