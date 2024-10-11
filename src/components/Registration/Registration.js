import React from 'react'
import BgLine from '../images/Horizontal.svg';
import Potrate1 from '../images/Image-Frame 610.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './reg.css'

const Registration = () => {
  return (
    <>
      <div className='reg-container'>
        <div className='reg-title'>
            <p>Register And Be Part of Our Community</p>
            <div>
              <p>Join our community of over 1000+ founders, developers, and tech junkies in general.Be inspired by people who live to inspire!</p>
            </div>
           
            
            
        </div>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <div className='horizontal-line-container'>
            <img src={BgLine} alt='Horizontal line'></img>
            <div className='img-potrat'>
           <img src={Potrate1} alt='Horizontal line'></img>
           </div> 
           <div className='reg-btn'>
            <button >Register Now <ArrowForwardIcon /> </button> 
           </div>
            
        </div>
      </div>
    </>
  )
}

export default Registration
