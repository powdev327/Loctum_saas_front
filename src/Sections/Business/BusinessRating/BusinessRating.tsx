import BusinessRatingStyle from "./BusinessRating.style";
import { ratingData } from "../../../assets/data/BusinessData/RatingData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessRating = () => {
  return (
    <BusinessRatingStyle className="rating-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <div className="rating-card">
                {ratingData.map((item, index) => (
                  <div key={index} className="rating-item">
                    <div className="rating-icon">
                      <img src={item.icon} alt="icon" />
                    </div>
                    <div className="rating-info">
                      <h2>{item.rating}</h2>
                      <ul className="rating-meta">
                        <li>{item.reviews}</li>
                        <li>{item.platform}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </BusinessRatingStyle>
  );
};

export default BusinessRating;
