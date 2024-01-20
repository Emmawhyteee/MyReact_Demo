import React from 'react'
import '../App.css'
import img1 from '../images/mobile.png'

function Home() {
 
  return (
    <>
      <div className='section'>
        <div className='left-section' id="content">
          <h1>Hello World!<br />
           React learning is lovely and I didnt know it was this easy <br />
           I also leant some new things that I shouldn't focus on past knowledge <br />
           that I should also learn to read always
        </h1>
        <div className='btnn'>Get Started</div>
        </div>
        <div className='right-section' id='content1'>
       <img src={img1} alt='phone-view' height='500px' />
        </div>
      </div>
    </>
  )
}

export default Home
