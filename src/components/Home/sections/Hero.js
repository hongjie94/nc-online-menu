import { Link } from 'react-router-dom';
const Hero = () => {
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
            
                <div className="HeroText__button">
                  <Link to="/ChineseMenu">
                    <p><span className="bg"></span><span className="base"></span><span className="text">View Menu</span></p>
                  </Link>
                </div> 
              
            
              {/* <Link className="btn" to="/menu"> 
                <div className="HeroText__button">
                  View Menu
                </div>
              </Link>   */}

           

            </div> 
            <div className="fishImage2" />
         </div> 
        </section>
    )
}

export default Hero;
