import CorporateBrandSliderStyle from "./CorporateBrandSlider.style";
import { brandImages } from "../../../assets/data/CorporateData/CorporateBrandSlider";

const CorporateBrandSlider = () => {
  return (
    <CorporateBrandSliderStyle className="brands-section corporate-brands-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="brands-slider">
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
    </CorporateBrandSliderStyle>
  );
};

export default CorporateBrandSlider;
