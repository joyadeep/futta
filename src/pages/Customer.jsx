import React from 'react'
import Header from '../components/Header'
import About from './About'
import Footer from './Footer'
import Landing from './Landing'
import Services from './Services'
import VehicleSlider from './VehicleSlider'
import RequestCall from './RequestCall'

const Customer = () => {
  return (
    <>
    <Header/>
    <Landing/>
    <About/>
    <Services/>
    <VehicleSlider/>
    <RequestCall/>
    <Footer/>
    </>
  )
}

export default Customer