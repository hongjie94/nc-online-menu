import GoogleMaps from '../Home/sections/GoogleMap';
import Form from 'react-bootstrap/Form';
import animation from '../Animations'
import { useRef, useEffect } from 'react';
const Contact = () => {
  animation();

  const hours = useRef(null)
 
  // Highlight current date
  useEffect(() => {
    const today = new Date().getDay();
    hours.current.childNodes[today].className += " dayActive"
  }, [])

    return (
        <div className="Contact">
          <div className="container">
            <div className="Contactbg mb-5">
              <h1> Contact us</h1>
            </div>
            <div className="row contactInfo">
              <div className="col-md-6 col-12 info">
                <i className="fas fa-map-marker-alt"> ADRRESS </i>
                <span>109 Price Chopper Plaza </span> 
                <span> (Route 5, Between Nelliston & Palatine Bridge)</span>
                <span> Plaatine Bridge. NY 13428</span>
                <div className="contactPhone">
                  <i className="fas fa-phone-alt"> PHONES</i> 
                  <span>
                    Telephone1: <a href="tel:518-673-8292"> (518)-673-8292 </a> 
                  </span>
                  <span>
                    Telephone2: <a href="tel:518-673-2380"> (518)-673-2380</a> 
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-12 hours" ref={hours}>
                <i className="fas fa-clock"> HOURS</i> 
                <span className="mon">Monday 11:00am - 10:00pm </span>
                <span className="tue">Tuesday 11:00am - 10:00pm </span> 
                <span className="wed">Wednesday 11:00am - 10:00pm </span> 
                <span className="thu">Thursday 11:00am - 10:00pm </span> 
                <span className="fri">Friday 11:00am - 10:30pm </span> 
                <span className="sat">Saturday 11:00am - 10:30pm</span> 
                <span className="sun">Sunday 12:00pm - 10:00pm</span>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <GoogleMaps/>
          </div>
          </div>
        
          </div>
          <div className="mb-5">
            <div className="container mt-5 ContactForm">
              <h1>GET IN TOUCH</h1>
              <span >Feel free to send us a message, phone or email us directly, we'd love to hear from you!</span>
              <Form className="mt-4">
                <div className="row">
                  <Form.Group controlId="exampleForm.ControlInput1" className='col-6' >
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1" className='col-6'>
                
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </div>
                <div className="row">
                    <Form.Group controlId="exampleForm.ControlTextarea1" className='col-12'>
                      <Form.Control as="textarea" placeholder="Your Message" rows={7} />
                    </Form.Group>
                </div>
                <button type="button" className="formSubmitBtn">Send</button>
              </Form>
              </div>
            </div>
        </div>
    )
}

export default Contact
