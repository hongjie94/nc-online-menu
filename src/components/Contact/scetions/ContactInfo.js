import { useRef, useEffect } from 'react';

const ContactInfo = () => {

  const hours = useRef(null);
 
  // Highlight current date
  useEffect(() => {
    let today = new Date().getDay();
    if (today === 0) {
        today = 7;
    }
    hours.current.childNodes[today].className += " dayActive"
  }, [])
    return (
     
      <>
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
      </>
      
    )
}

export default ContactInfo;
