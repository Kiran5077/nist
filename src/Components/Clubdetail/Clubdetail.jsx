import React from 'react'
import './Clubdetail.css'
import robot from '../../assets/robot.jpg'
import excel from '../../assets/excel.jpg'
import nmss from '../../assets/nms.jpg'
import recs from '../../assets/rec.png'
import ncss from '../../assets/ncs.jpg'
import ndcs from '../../assets/ndc.jpg'
import multi from '../../assets/multi.jpg'
import innova from '../../assets/innova.jpg'
import civil from '../../assets/civeng.jpg'
import foto from '../../assets/foto.png'
import eureka from '../../assets/eureka.jpg'
import cloud from '../../assets/cloud.jpg'
import ad from '../../assets/ad.jpg'
import white from '../../assets/white-arrow.png'

const Clubdetail = () => {
  return (
    <div className="club">
    <h1>Club details</h1>
    <div className="clubs">
        <div className="clubs-detail">
        <img src={robot} alt=""/>
        <h3>Robotics Club</h3>
        </div>
        <div className="clubs-detail">
        <img src={cloud} alt=""/>
        <h3>Cloud computing Club</h3>
        </div>
        <div className="clubs-detail">
        <img src={ad} alt=""/>
        <h3>Arts and Dramatic Club</h3>
        </div>
   <div className="clubs-detail" >
        <img src={excel} alt=""/>
        <h3>Club Excel</h3>
    </div>
    <div className="clubs-detail" >
        <img src={nmss} alt=""/>
        <h3>NIST Musical Society</h3>
    </div>
    <div className="clubs-detail" >
        <img src={recs} alt=""/>
        <h3>Rec: Renewable Energy Club</h3>
    </div>
    <div className="clubs-detail" >
        <img src={ndcs} alt=""/>
        <h3>NIST Dance Club</h3>
    </div>
    <div className="clubs-detail" >
        <img src={multi} alt=""/>
        <h3>Multimedia Club</h3>
    </div>
    <div className="clubs-detail" >
        <img src={civil} alt=""/>
        <h3>Civeng club</h3>
    </div>
    <div className="clubs-detail" >
        <img src={innova} alt=""/>
        <h3>Club Innova</h3>
    </div>
    <div className="clubs-detail" >
        <img src={foto} alt=""/>
        <h3>Club Foto Folks</h3>
    </div>
    <div className="clubs-detail" >
        <img src={eureka} alt=""/>
        <h3>Eureka Club</h3>
    </div>
  
    </div>
    <button className='btn'>see more<img src={white} alt=""/></button>
</div>
  )
}

export default Clubdetail
