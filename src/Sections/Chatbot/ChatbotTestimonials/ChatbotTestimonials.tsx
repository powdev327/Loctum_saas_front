import Slider from "react-slick";
import ChatbotTestimonialsStyle from "./ChatbotTestimonials.style";
import Badge from "../../../Components/Badge/Badge";
import { testimonialsData } from "../../../assets/data/ChatbotData/ChatbotTestimonialsData";

import quoteIcon from "../../../assets/images/chatbot/quote-icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ChatbotTestimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <ChatbotTestimonialsStyle className="chatbot-testmonial-section z-index-3">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="chatbot-testmonial-content">
            <p className="testmonial-title">Testimonials</p>
            <Slider {...settings} className="chatbot-testmonial-slider">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="col-md-12">
                  <div className="testmonial-quote-icon">
                    <div className="circle-progress">
                      <div className="halfclip">
                        <div className="halfcircle clipped" />
                      </div>
                      <div className="halfcircle fixed" />
                    </div>
                    <img src={quoteIcon} alt="icon" />
                  </div>
                  <p className="testmonial-quote-text">{testimonial.quote}</p>
                  <div className="clint-content">
                    <div className="clint-img">
                      <img src={testimonial.client.image} alt="img" />
                    </div>
                    <div className="clint-info">
                      <span>{testimonial.client.name}</span>
                      <p>{testimonial.client.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </ScrollAnimate>
      </div>
      <Badge parentClass="chatbot-testmonial-badge" />
    </ChatbotTestimonialsStyle>
  );
};

export default ChatbotTestimonials;
