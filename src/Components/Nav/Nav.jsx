import React from 'react'
import './Nav.css'
import image from '../../assets/nist2.jpg'
import play_icon from '../../assets/play-icon.png'
const Nav = ({setPlayState}) => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={image} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
    </div>
    <div className='About-right'>
       <h3>ABOUT UNIVERSITY</h3>
       <p>National Institute of Science & Technology (NIST), Berhampur is a Private Institute located in
             Berhampur, Orissa. It is approved by AICTE, UGC, NBA. The Institute was established as a Private institute in 1996. The total Campus area of the National Institute of Science & Technology (NIST), Berhampur is
              60 acres.</p>
        <p>National Institute of Science & Technology (NIST), Berhampur an AC Class Rooms, Library, Cafeteria,
             Auditorium, Sports, Conference Hall, Convenience Store, Music Room, labs, Transport facilities, Separate 
             Hostels for Girls and boys, Mess, Wi-Fi enabled campus, Gym, ATM, Medical & Hospital Facility, Security
              guards, 24x7 camera surveillance and much more.</p>
      
    </div>
    </div>
  )
}

export default Nav
