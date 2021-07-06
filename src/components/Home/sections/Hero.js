
import leavesImg from '../../../images/Home/leaves.png';
import leafImg from '../../../images/Home/leaf.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link} from 'react-router-dom';
const Hero = () => {



    return (
        <section className="Hero">
          <div className="Hero__content container">
            <div className="row">
            <div className="leaves col-md-2 col-lg-3"> 
              <img src={leavesImg} alt="leaves"/>
            </div>

            <div className="HeroText col-12 col-md-8 col-lg-6"> 
              <h1>New China</h1>
                <h4>
                  We Serve Chinese and Thai Food  <br/>
                  for Pickup in Palatine Bridge, NY. 
                </h4>
                <div className="phoneNum">
                  Call us at: <a href="tel:518-673-8292">  (518)-673-8292</a> 
                </div>
              
                <div className="hours">
                  <span>Mon-Sat: 11:00 AM - 10:00 PM </span>
                  <span> Sunday: 12:00 Noon- 9:30 PM</span>
                </div>
             
                <DropdownButton id="Dropdown" title="View Menu"> 
                  <Dropdown.Item as="button">
                    <Link className="nav-item nav-link" to="/ChineseMenu">Chinese Menu</Link>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <Link  className="nav-item nav-link" to="/ThaiMenu">Thai Menu</Link>
                  </Dropdown.Item>
                </DropdownButton>
            </div> 

            <div className="leaf col-md-2 col-lg-3" id="leaf">
              {/* <img className="leaf3" src={leaves} alt="fishIage"/>  
              <img className="leaf2" src={leaves} alt="fishIage"/>  */}
              <img className="leaf1" src={leafImg} alt="leaf"/> 
              <div>
              <img className="leaf2" src={leafImg} alt="leaf"/>  
              <img className="leaf3" src={leafImg} alt="leaf"/>  
              </div>
               
            </div>
            </div>
         </div> 
        </section>
    )
}

export default Hero;
