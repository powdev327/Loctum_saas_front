import SassWhyChoseUsStyle from "./SassWhyChoseUs.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import choseUsImg1 from "../../../assets/images/sass1/chose-us-img1.png";
import choseUsImg2 from "../../../assets/images/sass1/chose-us-img2.png";
import choseUsImg3 from "../../../assets/images/sass1/chose-us-img3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SassWhyChoseUs = () => {
  return (
    <SassWhyChoseUsStyle className="why-chose-us-section">
      <div className="container">
       <ScrollAnimate delay={200}>
       <SectionTitle
          title="Best features that you love"
          subtitle="Why Choose us"
          parentClass="md-mb-0 text-center"
        />
       </ScrollAnimate>
        <div className="why-chose-us-content">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <ScrollAnimate delay={200}>
              <div className="why-chose-us-card">
                <h5>Fast Performance</h5>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  pain, because it is pain, but because occasionally
                </p>
                <div className="why-chose-us-img">
                  <img src={choseUsImg1} alt="img" />
                </div>
              </div>
              </ScrollAnimate>
            </div>
            <div className="col-lg-4 col-md-6">
              <ScrollAnimate delay={250}>
              <div className="why-chose-us-card active">
                <h5>Easy to setup</h5>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  pain, because it is pain, but because occasionally
                </p>
                <div className="why-chose-us-img">
                  <img src={choseUsImg2} alt="img" />
                </div>
              </div>
              </ScrollAnimate>
            </div>
            <div className="col-lg-4 col-md-6">
              <ScrollAnimate delay={300}>
              <div className="why-chose-us-card">
                <h5>Simple and clean UI</h5>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  pain, because it is pain, but because occasionally
                </p>
                <div className="why-chose-us-img">
                  <img src={choseUsImg3} alt="img" />
                </div>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </SassWhyChoseUsStyle>
  );
};

export default SassWhyChoseUs;
