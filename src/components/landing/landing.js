import React from 'react'
import './landing.css'
import Whoweare from '../aboutus/Whoweare'
import Offer from '../Offer/Offer'
import Registration from '../Registration/Registration'
import Founder from '../Founder/Founder'

const Landing = () => {

  return (
    <div className="curved-line">
        <h3>Landing Page</h3>
        <Whoweare />
        <br></br>
        <Offer />
        <Registration />
        {/* <Founder /> */}
    </div>
  )
}

export default Landing
