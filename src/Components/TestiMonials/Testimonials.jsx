import React, { useRef } from 'react'
import './Testimonials.css'
import back from '../../assets/back-icon.png'
import next from '../../assets/next-icon.png'
import principal from '../../assets/principal.jpg'
import hod from '../../assets/hod.jpg'
import electrical from '../../assets/electrical.jpg'
import ece from '../../assets/ece.jpg'
import civil from '../../assets/civil.jpg'
const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50){
            tx-=20;
        }
        slider.current.style.transform=`translate(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translate(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back} alt="" className='back-btn'onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={principal} alt=""/>
                            <div>
                                <h3>Dr. P. Rajesh Kumar</h3>
                                <h4>Principal | principal@nist.edu</h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={hod} alt=""/>
                            <div>
                                <h3>Dr. Brojo Kishore Mishra</h3>
                                <h4>HOD, School of Computer Science</h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={ece} alt=""/>
                            <div>
                                <h3>Dr. Rajesh Kumar Patjoshi</h3>
                                <h4>HOD,ECE</h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={electrical} alt=""/>
                            <div>
                                <h3> Dr. Sasmita Padhy</h3>
                                <h4>HOD,Electrical</h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={civil} alt=""/>
                            <div>
                                <h3>Dr Barada Prasad Sethy</h3>
                                <h4>HOD, Civil Engineering</h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={civil} alt=""/>
                            <div>
                                <h3>Dr Barada Prasad Sethy</h3>
                                <h4>HOD, Civil Engineering</h4>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonials
