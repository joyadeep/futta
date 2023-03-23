import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import About from './pages/About'
import Footer from './pages/Footer'
import Landing from './pages/Landing'
import Services from './pages/Services'
import viteLogo from '/vite.svg'


function App() {
 
  return (
   <>
   <Header/>
   <Landing/>
   <About/>
   <Services/>
   <Footer/>
   </>
  )
}

export default App
