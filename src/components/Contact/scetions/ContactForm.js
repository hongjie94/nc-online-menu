import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ContactForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    NotificationManager.success('Your message was sent successfully. Thanks.', 'Message Sent')
    emailjs.sendForm(
      `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, 
      `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, 
      e.target, 
      `${process.env.REACT_APP_EMAILJS_USER_ID}`
    )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  };

  return (
    <div className="container mt-5 ContactForm">
      <h1>GET IN TOUCH</h1>
      <span >Feel free to send us a message, phone or email us directly, we'd love to hear from you!</span>
  
      <Form className="mt-4" onSubmit={sendEmail}>
        <div className="row">
          <Form.Group controlId="exampleForm.ControlInput1" className='col-6' >
            <Form.Control type="text" placeholder="Your Name" required name="name"/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" className='col-6'>
        
            <Form.Control type="email" placeholder="Your Email" required name="email"/>
          </Form.Group>
        </div>
        <div className="row">
            <Form.Group controlId="exampleForm.ControlTextarea1" className='col-12'>
              <Form.Control as="textarea" placeholder="Your Message" required name="message" rows={7} />
            </Form.Group>
        </div>
        <button type="submit" className="formSubmitBtn" value="Send">Send</button>
        <NotificationContainer/>
      </Form>
    </div>
  )
}

export default ContactForm;
