import React from 'react'
import './About.css'
import program_1 from '../../assets/program_1.jpeg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpeg'
import program_4 from '../../assets/mca2.jpg'
const About = () => {
  return (
    <div className='prog'>
    <h1>what we offers</h1>
    <div className='programss'>
        <div className='program-text'>
            <img src={program_1} alt="" />
       < div className='caption'>
            <p>BTech</p>
        </div>
        </div>
        <div className='program-text'>
            <img src={program_2} alt="" />
        < div className='caption'>
            <p>MTech</p>
        </div>
        </div>
        <div className='program-text'>
            <img src={program_3} alt="" />
        < div className='caption'>
            <p>MBA</p>
        </div>
        </div>
        <div className='program-text'>
            <img src={program_4} alt="" />
        < div className='caption'>
            <p>MCA</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default About
