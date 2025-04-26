import AccBrandSliderStyle from "./AccBrandSlider.style";

import BrandImg1 from "../../../assets/images/brands/1.png";
import BrandImg2 from "../../../assets/images/brands/2.png";
import BrandImg3 from "../../../assets/images/brands/3.png";
import BrandImg4 from "../../../assets/images/brands/4.png";
import BrandImg5 from "../../../assets/images/brands/5.png";
import BrandImg6 from "../../../assets/images/brands/6.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const brandImages = [
  BrandImg1,
  BrandImg2,
  BrandImg3,
  BrandImg4,
  BrandImg5,
  BrandImg6,
  BrandImg1,
  BrandImg2,
  BrandImg3,
  BrandImg4,
  BrandImg5,
  BrandImg6,
];

const AccBrandSlider = () => {
  return (
    <AccBrandSliderStyle className="brands-section v8">
      <ScrollAnimate delay={250}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="brands-section-title brands-section-title-index8">
                <h2>Trusted by</h2>
              </div>
              <div className="brands-slider v8">
                <div className="brands-slider-container">
                  {brandImages.map((src, index) => (
                    <div key={index} className="slider-item">
                      <img src={src} alt={`slider-img-${index}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </AccBrandSliderStyle>
  );
};

export default AccBrandSlider;
