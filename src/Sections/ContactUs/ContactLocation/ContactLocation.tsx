import ContactLocationStyle from "./ContactLocation.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

// Import icons
import Icon2 from "../../../assets/images/icons/phone.svg";
import Icon3 from "../../../assets/images/icons/sms.svg";

const ContactLocation = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      icon: Icon2,
      titleKey: "callUs",
      contactKey: "mobile",
    },
    {
      icon: Icon3,
      titleKey: "mailUs",
      contactKey: "contact",
    },
  ];
  return (
      <ContactLocationStyle>
        <ScrollAnimate>
          <div className="container">
            <div className="row">
                <div className='container-title'>
                  <h2 className='title'>{t('contactUs.getInTouch.title')} <span className='badge-title'>{t('contactUs.getInTouch.titleBadge')}</span></h2>
                  <p className='description'>{t('contactUs.getInTouch.description')}</p>
                </div>
              <div className="col-md-12">
                <div className="cards-container">
                  {contactData?.map((item, index) => (
                      <ScrollAnimate key={index} delay={index * 100}>
                        <div className="contact-card">
                          <div className="card-accent"></div>
                          <div className="card-content">
                            <div className="card-header">
                              <div className="icon-container">
                                <img src={item.icon || "/placeholder.svg"} alt="icon" />
                              </div>
                              <h4>{t(`contactUs.getInTouch.contactInfo.${item.titleKey}`)}</h4>
                            </div>

                            <div className="card-details">
                              <p className="contact-info">{t(`contactUs.getInTouch.contactInfo.${item.contactKey}`)}</p>
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
