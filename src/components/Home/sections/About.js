import animation from '../../Animations'
import { NavLink } from 'react-router-dom';
const About = () => {
  animation();
  return (
    <section id="About" className="About">
      <h1 className="aboutText">About</h1>

      <p className="aboutText"> New China Restaurant is located on 109 Price Chopper Plaza in Plaatine Bridge, NY. Restaurant 

      Serving up a good variety Chinese dishes including Hunan, Szechuan, and Cantonese dishes. 
      New China also Serving delicious Thai dishes. Feel free to check out our Chinese and Thai 
      menus. As of COVID-19 Restaurant Move To a Takeout-Only Model. 
      </p>
      <div className="aboutButtons">
        <NavLink to="/ChineseMenu" class="menuOptions">Chinese Menu</NavLink>
        <NavLink to="/ThaiMenu" class="menuOptions">Thai Menu</NavLink>
      </div>
    
  </section>
  )
};

export default About;
