import Slider from "react-slick";
import AppTestimonialStyle from "./AppTestimonial.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import StarIcon from "../../../assets/images/icons/star.svg";
import AppStor from "../../../assets/images/os-store/app_store.svg";
import PlayStor from "../../../assets/images/os-store/play_store.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    loop: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AppTestimonialStyle className="app-testimonial-section testimonial-section-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Trusted by million of users"
                subtitle="Testimonials"
                titleMaxW="400px"
              />
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="testimonial-btns">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="https://play.google.com" target="_blank">
                      <img src={PlayStor} alt="playstore" />
                      <h4 className="dm-sans">
                        4.8
                        <span>Download on</span>
                      </h4>
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a href="https://www.apple.com/app-store" target="_blank">
                      <img src={AppStor} alt="playstore" />
                      <h4 className="dm-sans">
                        4.6
                        <span>Download on</span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="app-testimonial-section-slider">
        <ScrollAnimate delay={300}>
          <Slider {...settings} className="testimonial-slider">
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importancebut because those who do not know how to pursue
                  pleasure
                  <span className="bg-aero-blue">
                    rationally encounter consequences
                  </span>
                  that are pleasure rationally encounter ❤️ ❤️
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Corel Den</h4>
                    <h5>CO, Arterry</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />4
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  Making this the first true 😍 generator on the Internet. It uses
                  a dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate 👏👏
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Leo Quode</h4>
                    <h5>CEO, Expresso</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  The best <span className="color-template">@staco</span> is there
                  anyone who loves or pursues or desires to obtain pain of itself,
                  because it is pain but because
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Roe Smith</h4>
                    <h5>Director, Growth King</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  Very denounce with righteous indignation and dislike men who are
                  so
                  <span className="bg-aero-blue">beguiled and demoralized</span>
                  by the charms of pleasure of the moment, so blinded by desire
                  encounter 🥰 🤜 🤛
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Arong French</h4>
                    <h5>SEO Engineer</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />4
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importancebut because those who do not know how to pursue
                  pleasure
                  <span className="bg-aero-blue">
                    rationally encounter consequences
                  </span>
                  that are pleasure rationally encounter ❤️ ❤️
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Corel Den</h4>
                    <h5>CO, Arterry</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />3
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  Making this the first true 😍 generator on the Internet. It uses
                  a dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate 👏👏
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Leo Quode</h4>
                    <h5>CEO, Expresso</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />4
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="slider-item">
                <p>
                  The best <span className="color-template">@staco</span> is there
                  anyone who loves or pursues or desires to obtain pain of itself,
                  because it is pain but because
                </p>
                <div className="slider-info">
                  <div className="slider-info-text">
                    <h4>Roe Smith</h4>
                    <h5>Director, Growth King</h5>
                  </div>
                  <div className="slider-reating">
                    <img src={StarIcon} alt="icon" />5
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </ScrollAnimate>
      </div>
    </AppTestimonialStyle>
  );
};

export default AppTestimonial;
