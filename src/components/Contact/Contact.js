import GoogleMaps from '../Home/sections/GoogleMap';
import Form from 'react-bootstrap/Form';
const Contact = () => {
    return (
        <div className="Contact">
          <div className="container">
            <div className="Contactbg">
              <h1> Contact us</h1>
            </div>
            
            <hr/>
            <div className="row mt-5">
            <div className="col-md-6 col-12 mb-4">
              <i className="fas fa-map-marker-alt"> ADRRESS </i><br/>
                109 Price Chopper Plaza <br/>
                (Route 5, Between Nelliston & Palatine Bridge) <br/>
                Plaatine Bridge. NY 13427

              <div className="mt-2">
              <i className="fas fa-phone-alt"> PHONES</i> 
              <div>
                Telephone1: <a href="tel:518-673-8292"> (518)-673-8292 </a>  <br/>
                Telephone2:  <a href="tel:518-673-2380"> (518)-673-2380</a> 
              </div>
            </div>
            </div>
            <hr/>
            
            <hr/>
            <div className="col-md-6 col-12 mb-4">
              <div>
              <i className="fas fa-clock"> HOURS</i> 
               <br/>
                Monday 11:00am - 10:00pm <br/>
                Tuesday 11:00am - 10:00pm <br/>
                Wednesday 11:00am - 10:00pm <br/>
                Thursday 11:00am - 10:00pm <br/>
                Friday 11:00am - 10:30pm <br/>
                Saturday 11:00am - 10:30pm <br/>
                Sunday 12:00pm - 10:00pm
              </div>
            </div>

          </div>
          <div className="row">
          <div className="col-md-12">
            <GoogleMaps/>
          </div>
          </div>
        
          </div>
          <div>
          <hr/>
            <div className="container">
              <h1>GET IN TOUCH</h1>
              <span>Feel free to send us a message, phone or email us directly, we'd love to hear from you!</span>
              <Form>
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
                <button type="button" className="b btns">Sumit</button>
              </Form>
              </div>
            </div>
        </div>
    )
}

export default Contact
