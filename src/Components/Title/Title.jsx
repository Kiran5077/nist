import React from 'react'
import './Title.css'
const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h>{title}</h>
      
    </div>
  )
}

export default Title
