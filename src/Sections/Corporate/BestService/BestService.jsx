import Slider from "react-slick";
import BestServiceStyleWrapper from "./BestService.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { serviceData } from "../../../assets/data/CorporateData/ServiceData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BestService = () => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BestServiceStyleWrapper className="best-services-section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pr-0">
              <div className="best-services-left">
                <ScrollAnimate delay={200}>
                <SectionTitle
                  title="We Provide"
                  subtitle="Best Services"
                  parentClass="corporate mb-2 md-mb-0"
                  titleClass="mb-0"
                />
                </ScrollAnimate>
                <ScrollAnimate delay={250}>
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importance but because those who do not know how to pursue
                  pleasure
                </p>
                </ScrollAnimate>
              </div>
            </div>
            <div className="col-lg-9">
              <ScrollAnimate delay={300}>
              <div className="row corporate-services-slider">
                <Slider {...sliderSettings}>
                  {serviceData.map((service) => (
                    <div key={service.id} className="col-md-12">
                      <div className="best-services-card">
                        <div className="best-services-img">
                          <img
                            src={service.imgSrc}
                            alt={`service-img-${service.id}`}
                          />
                        </div>
                        <div className="best-services-text">
                          <h5 className="wt-700">{service.title}</h5>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </BestServiceStyleWrapper>
  );
};

export default BestService;
