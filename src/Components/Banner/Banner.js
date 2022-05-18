import React from 'react'
//TODO:5 Create style for banner.js in Banner.css
import './Banner.css'

//TODO:4 create a banner page 
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )//im going to set a fade in the downside of the website

}

export default Banner
