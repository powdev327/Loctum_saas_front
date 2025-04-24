import CustomerFeaturesStyleWrapper from "./CustomerFeatures.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { home2FeaturesData } from "../../../assets/data/CustomerService/FeaturesData";

import smsIcon from "../../../assets/images/customer-service/features-sms-icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CustomerFeatures = () => {
  return (
    <CustomerFeaturesStyleWrapper className="index2-features-section">
      <div className="container">
        <div className="index2-features-card">
          <div className="row">
            <div className="col-lg-5">
              <ScrollAnimate delay={200}>
                <div className="index2-features-left">
                  <SectionTitle
                    title="Features"
                    subtitle="Get Benefits"
                    parentClass="section-title-left"
                  />

                  <div className="features-sms-icon">
                    <img src={smsIcon} alt="img" />
                  </div>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-lg-7">
              <div className="features2-contents">
                <div className="row row-gap50 row-gap50-custom">
                  {home2FeaturesData.map((info) => (
                    <div className="col-md-6" key={info.title}>
                      <ScrollAnimate delay={info.delay}>
                        <div className={info.class}>
                          <h4>
                            <span>
                              <img src={info.icon} alt="icon" />
                            </span>
                            {info.title}
                          </h4>
                          <p>{info.description}</p>
                        </div>
                      </ScrollAnimate>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerFeaturesStyleWrapper>
  );
};

export default CustomerFeatures;
