import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
 
  return (
    <>
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
              </div>
              </div>
    </>
  )
}

export default Navbar;
