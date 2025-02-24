import CorporateValuesStyle from "./CorporateValues.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import colorSwatchIcon from "../../../assets/images/corporate/color-swatch.svg";
import bookmarkIcon from "../../../assets/images/corporate/bookmark-2.svg";
import documentSketchIcon from "../../../assets/images/corporate/document-sketch.svg";
import codeIcon from "../../../assets/images/corporate/code.svg";
import rotateCircleImage from "../../../assets/images/corporate/our-value-rotate-circle.png";
import mainImage from "../../../assets/images/corporate/our-value-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateValues = () => {
  return (
    <CorporateValuesStyle className="our-values-section">
      <div className="container">
        <div className="our-values-top">
          <ScrollAnimate delay={200}>
          <SectionTitle
            subtitle="Our Values"
            title="Awesome Features"
            alignment="center"
            parentClass="corporate md-mb-0"
          />
          </ScrollAnimate>
         <ScrollAnimate delay={250}>
         <p>
            We use as filler text for layouts, non-readability is of great
            importance but because those who do not know how to pursue pleasure.
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain
          </p>
         </ScrollAnimate>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={200}>
            <div className="our-value-text text-right">
              <div className="our-value-icon our-value-icon1">
                <img src={colorSwatchIcon} alt="icon" />
              </div>
              <h5>Easy to use</h5>
              <p>
                When our power of choice is untrammelled and when nothing
                prevents our being able to
              </p>
            </div>
            </ScrollAnimate>
            <div className="our-value-text text-right">
              <div className="our-value-icon our-value-icon2">
                <img src={bookmarkIcon} alt="icon" />
              </div>
              <ScrollAnimate delay={220}>
              <h5>Fast Delivery</h5>
              <p>
                I must explain to you how all this mistaken. Idea of main
                denouncing pleasure to do best
              </p>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <ScrollAnimate delay={250}>
            <div className="our-values-img-section">
              <div className="our-values-img-border">
                <img
                  src={rotateCircleImage}
                  alt="loader"
                  className="loader-img"
                />
                <div className="our-values-img">
                  <img src={mainImage} alt="img" />
                </div>
              </div>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={270}>
            <div className="our-value-text text-left">
              <div className="our-value-icon our-value-icon3">
                <img src={documentSketchIcon} alt="icon" />
              </div>
              <h5>Well Documented</h5>
              <p>
                We like best, every pleasure is to be welcomed and every pain
                avoided. But in certain
              </p>
            </div>
            </ScrollAnimate>
            <ScrollAnimate delay={300}>
            <div className="our-value-text text-left">
              <div className="our-value-icon our-value-icon4">
                <img src={codeIcon} alt="icon" />
              </div>
              <h5>No Code Required</h5>
              <p>
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents must explain
              </p>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </CorporateValuesStyle>
  );
};

export default CorporateValues;
