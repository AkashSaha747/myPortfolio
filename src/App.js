import React from 'react'
import Navbar from './components/Navbar'
import Allroutes from './Allroutes/Allroutes'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <>
    

     <Navbar/>
     {/* <Allroutes/> */}
     <Home/>
     <About/>

    </>
  )
}

export default App
