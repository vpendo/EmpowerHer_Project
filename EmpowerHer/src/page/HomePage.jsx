import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Course from '../Components/Course/Course'
import About  from '../Components/About/About'
import Mentorship from '../Components/Mentorship/Mentorship'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Back from '../Components/Back/Back'

export default function HomePage() {
  return (
    <>
        <Navbar /> 
        <Back />
      <Course />
        <Mentorship />
       
        <About /> 
        <Contact />
        
       
        <Footer /> 

    </>
  )
}
