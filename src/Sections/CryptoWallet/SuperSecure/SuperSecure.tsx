import SuperSecureStyle from "./SuperSecure.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { superSecureData } from "../../../assets/data/CryptoWallet/SuperSecure";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SuperSecure = () => {
  return (
    <SuperSecureStyle className="super-secure-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          subtitle="Super secure"
          title="Easy Access to tokens"
          alignment="center"
          parentClass="crypto mb-0"
        />
        </ScrollAnimate>
        <ScrollAnimate delay={200}>
        <p className="super-secure-text">
          We use as filler text for layouts, non-readability is of great
          importance but because those who do not know how to pursue pleasure.
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain
        </p>
        </ScrollAnimate>
        <div className="super-secure-content">
          <div className="row">
            {superSecureData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <ScrollAnimate delay={item.delay}>
                <div className="super-secure-card">
                  <h5>{item.title}</h5>
                  <div className="super-secure-card-img">
                    <div className="super-secure-card-img-inner">
                      <img src={item.imgSrc} alt="icon" />
                    </div>
                    <img src={item.gradSrc} alt="icon" className="grad" />
                  </div>
                  <p>{item.description}</p>
                </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SuperSecureStyle>
  );
};

export default SuperSecure;
