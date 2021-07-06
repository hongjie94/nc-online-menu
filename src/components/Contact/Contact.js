import ContactInfo from '../Contact/scetions/ContactInfo';
import GoogleMaps from '../Home/sections/GoogleMap'; //Using the same Map from Home page
import ContactForm from '../Contact/scetions/ContactForm';
import animation from '../Animations';

const Contact = () => {
  animation("Contact");
  return (
    <div className="Contact">
      <div className="container">
        <div className="Contactbg mb-5">
          <h1> Contact us</h1>
        </div>
        <div className="row contactInfo">
          <ContactInfo />
        </div>
      
        <div className="row">
          <div className="col-md-12">
            <GoogleMaps/>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact;
