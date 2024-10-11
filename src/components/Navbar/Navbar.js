
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/Web_Logo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Navbar = ({ count }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt='' /><span>Founder's Friday</span>
      </div>

      <div className='menu-right'>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/' style={{ textDecoration: 'none' }}>About Us</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/men' style={{ textDecoration: 'none' }}>Gallery</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to='/women' style={{ textDecoration: 'none' }}>Contact Us</Link>
        </li>
      </ul>
      
      <div className='nav-login-cart'>
        <button>
            <Link to='LoginSignup'>Register <ArrowForwardIcon /></Link>
        </button>
      </div>

      </div>
      <div className='hamburger' onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </div>
  );
};

export default Navbar;













