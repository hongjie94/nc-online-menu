import { Link } from 'react-router-dom';
import fishImage from '../../../images/Home/fish.png'
const Hero = () => {

    return (
        <section className="Hero">
          <div className="Hero__content container">
            <div className="row">
            <div className="fishImage col-md-2 col-lg-3"> 
              <img src={fishImage} alt="fishIage"/>
            </div>

            <div className="HeroText col-12 col-md-8 col-lg-6"> 
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
              <div className="HeroText__buttons">
                <div className="HeroText__button">
                  <Link to="/ChineseMenu">
                    <p><span className="bg"></span><span className="base"></span><span className="text">Chinese Menu</span></p>
                  </Link>
                </div>  
                <div className="HeroText__button">
                  <Link to="/ThaiMenu">
                    <p><span className="bg"></span><span className="base"></span><span className="text">Thai Menu</span></p>
                  </Link>
                </div> 
              </div>
            </div> 

            <div className="fishImage2 col-md-2 col-lg-3">
              <img src={fishImage} alt="fishIage"/>  
            </div>
            </div>
         </div> 
        </section>
    )
}

export default Hero;
