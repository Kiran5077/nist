import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>NIST</h1>
        <h3>
YEARS OF GLORIOUS JOURNEY OF MAKING NIST THE MECCA OF TECHNICAL AND PROFESSIONAL EDUCATION
</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rem incidunt, exercitationem consectetur corrupti minus quidem dolores ipsam quibusdam ratione. Perspiciatis, provident vel.</p>
<button className='btn'>Explore more<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
