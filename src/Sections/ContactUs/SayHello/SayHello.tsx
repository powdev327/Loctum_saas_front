import SayHelloStyle from "./SayHello.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import ContactImg from "../../../assets/images/contact/contact-img.png";
import ShapeImg1 from "../../../assets/images/contact/shape-1.svg";
import ShapeImg2 from "../../../assets/images/contact/shape-2.svg";
import SmsTrackingImg from "../../../assets/images/icons/sms-tracking-2.svg";
import CallOutgoingImg from "../../../assets/images/icons/call-outgoing.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const SayHello = () => {
  const { t } = useTranslation();

  return (
    <SayHelloStyle>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="contact-img">
                <img src={ContactImg} alt="contact-img" />
                <div className="overlay-item shape-1">
                  <img src={ShapeImg1} alt="shape-img" />
                  <div className="icon">
                    <img src={SmsTrackingImg} alt="icon" />
                  </div>
                </div>
                <div className="overlay-item shape-2">
                  <img src={ShapeImg2} alt="shape-img" />
                  <div className="icon">
                    <img src={CallOutgoingImg} alt="icon" />
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="col-lg-6">
            <div className="contact-content">
              <ScrollAnimate>
                <SectionTitle
                  subtitle={t('contactUs.sayHello.subtitle')}
                  title={t('contactUs.sayHello.title')}
                />
              </ScrollAnimate>

              <ScrollAnimate>
                <div className="contact-content-body">
                  <form action="/" method="post">
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="user-name">{t('contactUs.sayHello.form.nameLabel')}</label>
                        <input
                          type="text"
                          name="user-name"
                          id="user-name"
                          placeholder={t('contactUs.sayHello.form.namePlaceholder')}
                          required
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="email-address">{t('contactUs.sayHello.form.emailLabel')}</label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          placeholder={t('contactUs.sayHello.form.emailPlaceholder')}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="phone-number">{t('contactUs.sayHello.form.phoneLabel')}</label>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          placeholder={t('contactUs.sayHello.form.phonePlaceholder')}
                        />
                      </div>

                    </div>
                    <div className="form-input mb-30">
                      <label htmlFor="message">{t('contactUs.sayHello.form.messageLabel')}</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder={t('contactUs.sayHello.form.messagePlaceholder')}
                        required
                      ></textarea>
                    </div>
                    <div className="item-button">
                      <input
                        type="submit"
                        className="template-btn primary-bg"
                        value={t('contactUs.sayHello.form.submitButton')}
                      />
                    </div>
                  </form>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </SayHelloStyle>
  );
};

export default SayHello;
