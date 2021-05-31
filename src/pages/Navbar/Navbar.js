import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { useRef, useState } from 'react';

const Navbar = () => {
  const [ ShowNav, setShowNav ] = useState(false);
  let navbarNav = useRef(null);

  const toogleNav = () => {

    const showNav = () => {
      setShowNav(true);
      navbarNav.className =  'navbar-nav navbar-nav-active';
      document.body.className = 'body-active';
    };

    const hideNav = () => {
      setShowNav(false);
      navbarNav.className =  'navbar-nav';
      document.body.className = '';
    }; 

    !ShowNav ? showNav() : hideNav();
  };
 
  return (
    <nav className='navbar navbar-expand-lg'>
      <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo icon"/>
          <h1>China</h1>
      </Link>
      <FaBars id="Fabar" onClick={toogleNav}/>
    
      <div onClick={toogleNav} ref={el=>{ navbarNav = el}} className='navbar-nav'>
        <NavLink exact={true} className="nav-item nav-link"  to="/">Home</NavLink>
        <NavLink  className="nav-item nav-link"  to="/about">About</NavLink>
        <NavLink className="nav-item nav-link"  to="/menu">Menu</NavLink>
        <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
