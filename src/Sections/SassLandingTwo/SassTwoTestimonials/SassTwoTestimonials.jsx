import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SassTwoTestimonialsStyle from "./SassTestimonials.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { testimonialsData } from "../../../assets/data/SassTwoData/Testimonials";

import testimonialsShape1 from "../../../assets/images/sass2/testimonials-shape1.svg";
import testimonialsShape2 from "../../../assets/images/sass2/testimonials-shape2.svg";
import testimonialsShape3 from "../../../assets/images/sass2/testimonials-shape3.svg";
import testimonialsShape4 from "../../../assets/images/sass2/testimonials-shape4.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SassTwoTestimonials = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderForRef = useRef(null);
  let sliderNavRef = useRef(null);

  useEffect(() => {
    setNav1(sliderForRef);
    setNav2(sliderNavRef);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Slick slider settings
  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  const settingsNav = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  };

  const handleSliderLeft = () => {
    sliderForRef.slickPrev();
  };

  const handleSliderRight = () => {
    sliderForRef.slickNext();
  };

  const CustomSliderInfo = () => {
    return (
      <div className="slider-info">
        <button className="slider-arrow left" onClick={handleSliderLeft}>
          <FaArrowLeftLong />
        </button>

        <div className="slider-counter">
          <p>{currentSlide + 1}/5</p>
        </div>

        <button className="slider-arrow right" onClick={handleSliderRight}>
          <FaArrowRightLong />
        </button>
      </div>
    );
  };

  return (
    <SassTwoTestimonialsStyle className="testimonial-seciton sass-testimonial-seciton md-pb-80 md-pt-70">
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-card">
              {/* Testimonial card left */}
              <div className="testimonial-card-left">
                <div className="sass-testimonials-shapes">
                  {/* Shapes */}
                  <img
                    src={testimonialsShape1}
                    alt="shape"
                    className="shape1"
                  />
                  <img
                    src={testimonialsShape2}
                    alt="shape"
                    className="shape2"
                  />
                  <img
                    src={testimonialsShape3}
                    alt="shape"
                    className="shape3"
                  />
                  <img
                    src={testimonialsShape4}
                    alt="shape"
                    className="shape4"
                  />
                </div>
                {/* Testimonial slider navigation */}
                <Slider
                  {...settingsNav}
                  className="testimonial-slider-nav"
                  asNavFor={nav1}
                  ref={(slider) => (sliderNavRef = slider)}
                >
                  {testimonialsData.map((testimonial, index) => (
                    <div className="slider-item" key={index}>
                      <img src={testimonial.imgSrc} alt="slider-img" />
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Testimonial card right */}
              <div className="testimonial-card-right">
                <SectionTitle
                  title="We ❤️ Feedback"
                  subtitle="Testimonials"
                  titleClass="text-white white-color love-icon"
                  parentClass="sass"
                />

                {/* Testimonial slider for */}
                <Slider
                  {...settingsFor}
                  className="testimonial-slider-for"
                  asNavFor={nav2}
                  ref={(slider) => (sliderForRef = slider)}
                >
                  {testimonialsData.map((testimonial, index) => (
                    <div className="slider-item" key={index}>
                      <p>{testimonial.content}</p>
                      {/* Testimonial user */}
                      <div className="slider-item-user">
                        <div className="author-info">
                          <span className="name">{testimonial.author},</span>
                          <span className="duration">
                            {testimonial.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

                {<CustomSliderInfo />}
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </SassTwoTestimonialsStyle>
  );
};

export default SassTwoTestimonials;
