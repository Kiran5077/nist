import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/programs/Programs'
import About from './Components/About/About'
import Nav from './Components/Nav/Nav'
import Facilities from './Components/Facility/Facility'
import Courses from './Components/Course/Course'
import PlacementDetails from './Components/Placement/Placement'
import Title from './Components/Title/Title'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/TestiMonials/Testimonials'
import Question from './Components/Question/Question'
import Footer from './Components/Footer/Footer'
import Video from './Components/VideoPlayer/Video'

import Clubdetail from './Components/Clubdetail/Clubdetail'




const App = () => {
  const [playState,setPlayState]=useState(false);
  return (
    <div>
      <Navbar/>
      <Programs/>
      <About/>
      <Nav  setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus photos'/>
     <Campus/>
     <Title subTitle='testimonials' title='Faculties Member'/>
     <Testimonials/>
     <Title subTitle='Nist University' title='Courses and fees'/>
     <Courses/>
     <Facilities/>
     <Clubdetail/>
     <Title subTitle='' title='Placement'/>
     <PlacementDetails/>
     <Title subTitle='Contact us' title='Get In Touch'/>
     <Question/>
     <Footer/>
     
      <Video playState={playState} setPlayState={setPlayState}/>
      
      
    </div>
  )
}

export default App
