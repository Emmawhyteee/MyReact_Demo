import React from 'react'
import '../App.css'
import img_T from '../images/Team.jpg'

function Team() {
 

  
  return (
      <>
           <div className='section'>
        <h1>Team page</h1></div>
      <p className='Team_L'> Our tech team is not just a group of individuals;
        we are a collective force driving innovation, solving complex challenges, and shaping the future of technology. Comprising highly skilled professionals with diverse expertise, our team brings a wealth of knowledge
        and a passion for cutting-edge solutions to every project.</p>
      <div className='Team_Mum'>
        <div id='left_T'>
          {/* i tried using anything here as a tag,
          and it still worked when i called it in css */}
          <img src={img_T} alt="Team_member" width={'250px'} /> <br />
         <text> Manager</text>
        </div>
        <div id='center_T'>
          <img src={img_T} alt="Team_member" width={'250px'} /> <br />
          <text>Team lead</text>
        </div>
        <div id='Right_T'>
          <img src={img_T} alt="Team_member" width={'250px'} /> <br />
          <text> Developers</text>
        </div>
      </div>
    </>
  )
}

export default Team;
