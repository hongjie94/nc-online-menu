import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [ ShowNav, setShowNav ] = useState(false);
 
  const showNav = () => {
    document.body.className = 'body-active';
    gsap.fromTo(".navbar", { y: '-100%', opacity: 0}, 
    {opacity: 1, duration: 1, ease: "power2", y: 0,});  
  };
     
  const hideNav = () => {
    document.body.className = '';
  };

  ShowNav ? showNav() : hideNav();

  return (
    <nav className='navbar navbar-expand-lg'>
      <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo icon"/>
          <h1>China</h1>
      </Link>

      <FaBars id="Fabar" onClick={() => setShowNav(!ShowNav)}/>
      
      <div 
        className={ShowNav ? "navbar-nav navbar-nav-active" : "navbar-nav"
      }> 
        <NavLink onClick={() => setShowNav(false)}   exact={true} className="nav-item nav-link"  to="/">Home</NavLink>
        
        <NavLink  onClick={() => setShowNav(false)}   className="nav-item nav-link"  to="/about">About</NavLink>

        <DropdownButton id="Dropdown" title="Menu">
          <Dropdown.Item as="button">
            <NavLink onClick={() => setShowNav(false)} className="nav-item nav-link" to="/ChineseMenu">Chinese Menu</NavLink>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <NavLink onClick={() => setShowNav(false)} className="nav-item nav-link" to="/ThaiMenu">Thai Menu</NavLink>
          </Dropdown.Item>
        </DropdownButton>

        <NavLink  onClick={() => setShowNav(false)}  className="nav-item nav-link" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
