import Slider from "react-slick";
import CorporateTestiminialsStyle from "./CorporateTestiminials.style";
import { testimonialsData } from "../../../assets/data/CorporateData/CorporateTestimonialsData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateTestimonials = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
            }
        }
    ]
};

  return (
    <CorporateTestiminialsStyle className="corporate-testiminials-section">
      <div className="overlay">
        <ScrollAnimate delay={200}>
          <div className="container">
            <Slider {...sliderSettings}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="corporate-testiminials-content">
                  <div className="clint-img">
                    <div className="clint-img-inner">
                      <img
                        src={testimonial.imgSrc}
                        alt={`testimonial-img-${index}`}
                      />
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                  <h5>
                    {testimonial.author}
                    <span>{testimonial.position}</span>
                  </h5>
                </div>
              ))}
            </Slider>
          </div>
        </ScrollAnimate>
      </div>
    </CorporateTestiminialsStyle>
  );
};

export default CorporateTestimonials;
