import BusinessTestimonialsStyle from "./BusinessTestimonials.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { testimonialData } from "../../../assets/data/BusinessData/TestimonialsData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessTestimonials = () => {
  return (
    <BusinessTestimonialsStyle className="testimonial-section-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="We❤️Feedback"
                subtitle="Testimonials"
                alignment="center"
                parentClass="testimonial-title4"
              />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <ScrollAnimate delay={250}>
        <div className="testimonial-section-4-slider scrollerWrapper">
          <div className="scroller">
            <div className="slider-container slid-content">
              {testimonialData.map((item, index) => (
                <div key={index} className="slider-item slid-inner">
                  <p>
                    {item.text1}
                    &nbsp;
                    <span className={item.highlightClass}>
                      {item.highlightText}
                    </span>
                    &nbsp;
                    {item.text2}
                  </p>
                  <div className="slider-info">
                    <div className="slider-info-text">
                      <h4>{item.author}</h4>
                      <h5>{item.position}</h5>
                    </div>
                    <div className="slider-info-icon">
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-container slid-content">
              {testimonialData.map((item, index) => (
                <div key={index} className="slider-item slid-inner">
                  <p>
                    {item.text1}
                    &nbsp;
                    <span className={item.highlightClass}>
                      {item.highlightText}
                    </span>
                    &nbsp;
                    {item.text2}
                  </p>
                  <div className="slider-info">
                    <div className="slider-info-text">
                      <h4>{item.author}</h4>
                      <h5>{item.position}</h5>
                    </div>
                    <div className="slider-info-icon">
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </BusinessTestimonialsStyle>
  );
};

export default BusinessTestimonials;
