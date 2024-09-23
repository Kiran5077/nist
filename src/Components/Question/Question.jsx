import React from 'react'
import './Question.css'
import white_arrow from '../../assets/white-arrow.png'
const Question = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact
                information below.Your feedback,questions, and suggestions are important 
                to us as we strive to provide exceptional service to our 
                University community
            </p>
            <ul>
                <li>NIST University8</li>
                 <li>info@nist.edu,hello@nist.edu</li>
                 <li>+91-0680-2492421/422</li>
            </ul>
        </div>
      <div className='contact-col'>
        <form>
       <label>Your name</label>
       <input type="text" name='name' placeholder='enter your name'
       required/>
       <label>Phone number</label>
       <input type="tel" name='phone' placeholder='enter your mobile number'
       required/>
       <label>write message here</label>
       <textarea name="message"  cols="30" rows="10" placeholder='enter your message' required></textarea>
       <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Question
