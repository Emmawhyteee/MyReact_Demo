import React from 'react'
import '../App.css'
import imgg from '../images/about_img.jpeg'

function About() {
 
  return (
    <>
    <div className='about'>
        <h1>About Page</h1>
         <div className='Abt1' id='content3'>
          <img src={imgg} alt='about image' width="450px" />
        </div>
        
        <div className='abt_mum'>
          <div className='abt_L' id='left1'>
            <h1>About Us</h1>
            <p>Welcome to React_Demo, where technology meets innovation! We are a passionate team of tech
              enthusiasts dedicated to pushing the boundaries of what's possible in the digital realm.</p>
          </div>
          <div className='abt_R' id='right1'>
            <h1>Our Mission</h1>
            <p>Our mission is clear — to harness the power of technology to solve
              real-world problems and create solutions that inspire. We thrive on the challenges
              that come with cutting-edge technologies and constantly seek new ways to leverage the latest advancements.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default About;
