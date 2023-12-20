import React from 'react'
import '../App.css'
import img1 from '../images/mobile.png'

function Home() {
 
  return (
    <>
      <div className='section'>
        <div className='left-section'>
          <h1>Hello World!
            Lorem impus Lorem impus Lorem impusLorem impusLorem impusLorem impusLorem
            Lorem impusimpusLorem impusLorem impusLorem impusLorem impus impusvimpus
        </h1>
        </div>
        <div className='right-section'>
       <img src={img1} alt='phone-view' height='500px' />
        </div>
      </div>
    </>
  )
}

export default Home
