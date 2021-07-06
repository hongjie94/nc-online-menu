import logo from '../../images/logo.svg';
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
      <>
      <footer id="Footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="footer_main_left col-sm-12 col-md-4">
              <div className="footer__logo ">
                <img src={logo} alt="logo icon"/>
                <h1>China</h1>
              </div>
              <div className="footer_location">
               <span>New China Restaurant </span> 
               <span>109 Palatine Plaza #5 </span>
               <span>Plaatine Bridge. NY 13428 </span>
              </div>  
            </div>
            <div className="footer_main_center col-sm-12 col-md-4">
            <h1 className="footer_header">Open Timing</h1>
              <div className="footer_hours"> 
                <span>Mon - Sat: 11AM - 10PM</span>
                <span> Sun: 12PM -9:30PM </span>
                <span>(Lunch From 11AM-3PM) </span>
              </div>
            </div>
            <div className="footer_main_right col-sm-12 col-md-4">
              <h1 className="footer_header">Contact Us</h1>
              <div className="footer_contact">
                <a  target="_blank"  rel="noreferrer" href="https://www.facebook.com/Palatine.Plaza"> Social Media <FaFacebook/></a> 
                <a href="tel:518-673-8292"> 1(518)-673-8292 </a> 
                <a href="mailto:Newchinapalatine@gmail.com">Newchinapalatine@gmail.com</a>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      </footer>
      <div className="copyright">
          <p className="copyright__text">Copyright &copy; {new Date().getFullYear()}  All Rights Reserved by
            <span> New China</span>
          </p>
      </div>
      </>
    )
}

export default Footer
