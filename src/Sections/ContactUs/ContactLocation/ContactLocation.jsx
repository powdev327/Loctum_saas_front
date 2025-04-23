import ContactLocationStyle from "./ContactLocation.style";
import Data from "../../../assets/data/contact-us/location";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ContactLocation = () => {
  return (
      <ContactLocationStyle>
        <ScrollAnimate>
          <div className="container">
            <div className="row">
                <div className='container-title'>
                  <h2 className='title'>Get in <span className='badge-title'>Touch</span></h2>
                  <p className='description'>We're here to help with any questions you might have. Reach out to us using any of the contact methods below.</p>
                </div>
              <div className="col-md-12">
                <div className="cards-container">
                  {Data?.map((location, index) => (
                      <ScrollAnimate key={index} delay={index * 100}>
                        <div className="contact-card">
                          <div className="card-accent"></div>
                          <div className="card-content">
                            <div className="card-header">
                              <div className="icon-container">
                                <img src={location.icon || "/placeholder.svg"} alt="icon" />
                              </div>
                              <h4>{location.title}</h4>
                            </div>

                            <div className="card-details">
{/*
                              {location.description && <p className="address">{location.description}</p>}
*/}

                              {location.phoneNumbers &&
                                  location.phoneNumbers?.map((phoneNumber, i) => (
                                      <p key={i} className="contact-info phone">{phoneNumber}</p>
                                  ))}

                              {location.emails &&
                                  location.emails?.map((email, i) => (
                                      <p key={i} className="contact-info email">{email}</p>
                                  ))}
                            </div>
                          </div>
                        </div>
                      </ScrollAnimate>
                  ))}
                </div>

                <div className="contact-map">
                  {/* Map content will go here */}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </ContactLocationStyle>
  );
};

export default ContactLocation;
