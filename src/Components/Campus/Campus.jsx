import React from 'react'
import './Campus.css'
import atrium from '../../assets/atrium.jpeg'
import galleria from '../../assets/galleria.jpeg'
import lhc from '../../assets/lhc.jpg'
import tifac from '../../assets/tifac.jpg'
import white from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
    <div className='gallery'>
      <img src={atrium} alt=""/>
        
      <img src={galleria} alt=""/>
      <img src={lhc} alt=""/>
      <img src={tifac} alt=""/>
    </div>
   <button className='btn'>see more<img src={white} alt=""/></button>
    </div>
  )
}

export default Campus
