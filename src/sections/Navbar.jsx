import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {

    function openNav() {
      document.getElementById("myNav").style.height = "100%";
    }
    
    function closeNav() {
      document.getElementById("myNav").style.height = "0%";
    }
  
 
  return (
    <>

<div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
          <div className="overlay-content">
          <Link to="/"><a className='active'>Home</a></Link>
              <Link to="/about"><a>About</a></Link>
              <Link to="/contact"><a>Contact</a></Link>
              <Link to="/team"><a>The Team</a></Link>
            <Link to="/"><div className="btnn">Get Started</div></Link>
          </div>
        </div>


          <div className='fx1'>
              <div className='leftnavbar'>      
              <a>Logo</a>   
              </div>
              <div className='centernavbar'> 
              <Link to="/"><a className='active'>Home</a></Link>
              <Link to="/about"><a>About</a></Link>
              <Link to="/contact"><a>Contact</a></Link>
              <Link to="/team"><a>The Team</a></Link>
              </div>
              <div className='rightnavbar'> 
                  <div className='btn'>Register</div>
                  <spann onClick={openNav}>☰</spann>
              </div>
              </div>
    </>
  )
}

export default Navbar;
