import React from 'react'
import Identity from '../images/Founder.svg';
import "./founder.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoneyBag from '../images/Money Bag.svg'

const Founder = () => {
  return (
    <>
      <div className='founder-container'>
       
        <div className='founder-img-container'>
        <img src={Identity} alt='' />
        </div>
        <div className='founder-write-up-container'>
            <div className='founder-container-content'>
            <h1>Who Are We?</h1>
                <div className='founder-write-up'>
                    <br></br><br></br>
                    <p>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
                    <p>
                    Join us at the next Founder's Friday and be part of Abuja's most dynamic startup community. Together, we're not just sharing ideas—we're shaping the future of tech in our city.
                    </p>
                </div>
                <br></br>
                <div className='founder-btn'>
                    <button >Register <ArrowForwardIcon /> </button>
                    <button className='founder-btn-white-bg'>Donate <img src={MoneyBag} alt='money bage' /></button>
                </div>
                
                <h3>Founder's Friday is more than just a meetup — it's a movement.</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default Founder
