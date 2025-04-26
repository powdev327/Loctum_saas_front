import NewsletterBrandStyle from "./NewsletterBrand.style";
import { brandImages } from "../../../assets/data/NewsletterData/NewsletterBrandsData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const NewsletterBrand = () => {
  return (
    <NewsletterBrandStyle className="brands-section newslater">
      <ScrollAnimate delay={200}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="brands-section-title">
              <h2>Trusted by leading companies 🎯</h2>
            </div>

            <div className="brands-slider newslater">
              <div className="brands-slider-container">
                {brandImages.map((image, index) => (
                  <div key={index} className="slider-item">
                    <img src={image} alt={`slider-img-${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimate>
    </NewsletterBrandStyle>
  );
};

export default NewsletterBrand;
