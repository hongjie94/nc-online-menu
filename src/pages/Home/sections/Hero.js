import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
const tl = gsap.timeline();
const Hero = () => {

  // Animations
 

  useEffect(() => {
    tl.to(".Hero", {duration: 0, css: { visibility: 'visible', opacity: 1}});
 
    tl.to(".HeroText", { duration: 2, y: 0, opacity: 1, ease: "back"});

    tl.to(".fishImage", { 
      duration: 2, 
      y: 0, 
      opacity: 1, 
      rotation: 685, 
      // r325,
      ease: "power1"
    }, "-=1");
    tl.to(".fishImage2", { 
      duration: 2, 
      y: 0, 
      opacity: 1, 
      rotation: 505, 
      // transform: "rotate(-215deg) r145",
      ease: "power1"
    }, "-=2");

  }, [])
    return (
        <section className="Hero">
          <div className="Hero__content">
            <div className="fishImage" />
            <div className="HeroText"> 
              <h1>New China</h1>
                <h4>
                  We Serve Chinese and Thai Food  <br/>
                  for Pickup in Palatine Bridge, NY. 
                </h4>
                <div className="phoneNum">
                  <a href="tel:518-673-8292"> Call us at: (518)-673-8292</a> 
                </div>
                  <div className="hours">
                      Mon-Sat: 11:00 AM - 10:00 PM <br/> 
                      <span> Sunday: 12:00 Noon- 09:30 PM</span>
                  </div> 
              <Link className="btn" to="/menu">
                <div className="HeroText__button">
                  View Menu
                </div>
              </Link>  
            </div> 
            <div className="fishImage2" />
         </div> 
       
        </section>
    )
}

export default Hero;
