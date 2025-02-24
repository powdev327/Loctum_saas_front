import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import OfferingStyleWrapper from "./Offering.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import CardImg1 from "../../../assets/images/accounting/card_img_1.png";
import CardImg2 from "../../../assets/images/accounting/card_img_2.png";
import CardImg3 from "../../../assets/images/accounting/card_img_3.png";
import CardImg4 from "../../../assets/images/accounting/card_img_4.png";
import WeOfferingSliderImg from "../../../assets/images/accounting/we-offering-slider-img.png";

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Offering = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));

    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <OfferingStyleWrapper className="we-offering-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="we-offering-text">
              <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Discover business Opportunities"
                  subtitle="We offering"
                  parentClass="v8 title2 md-mb-20"
                  subtitleClass="green-lite"
                />
              </ScrollAnimate>
              <ScrollAnimate delay={250}>
                <Slider
                  {...settingsNav}
                  ref={sliderNavRef}
                  className="we-offering-slider-nav"
                >
                  <div className="slick-btn">Invoicing</div>
                  <div className="slick-btn">Expenses</div>
                  <div className="slick-btn">Product management</div>
                  <div className="slick-btn">Inventory System</div>
                  <div className="slick-btn">Payment</div>
                </Slider>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
            <div className="we-offering-slider-content">
              <div className="we-offering-slide-bg-img">
                <img src={WeOfferingSliderImg} alt="img" />
              </div>
              <Slider
                {...settingsFor}
                ref={sliderForRef}
                className="we-offering-slider"
              >
                <div className="we-offering-slide-item">
                  <div className="we-offering-slide-img">
                    <img src={CardImg1} alt="img" />
                  </div>
                  <div className="we-offering-slide-item-text">
                    <h4>Invoicing</h4>
                    <p className="xl-mb-25">
                      It has roots in a piece of classical Latin literature from
                      45 BC, making it over 2000 years old. Richard McClintock,
                      a Latin professor at Hampden-Sydney College There are many
                      variations of passages
                    </p>
                    <div className="we-offering-slide-btns">
                      <button>
                        <span className="iconify" data-icon="bi:check-lg" />{" "}
                        Multi-currency support
                      </button>
                      <button>
                        <span className="iconify" data-icon="bi:check-lg" /> GST
                        &amp; VAT
                      </button>
                    </div>
                  </div>
                </div>
                <div className="we-offering-slide-item">
                  <div className="we-offering-slide-img">
                    <img src={CardImg2} alt="img" />
                  </div>
                  <div className="we-offering-slide-item-text">
                    <h4>Expenses</h4>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College There are many variations of passages
                    </p>
                  </div>
                </div>
                <div className="we-offering-slide-item">
                  <div className="we-offering-slide-img">
                    <img src={CardImg3} alt="img" />
                  </div>
                  <div className="we-offering-slide-item-text">
                    <h4>Product Management</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use as their default model text, and a search for uncover
                      many web sites still in their infancy
                    </p>
                    <ul className="check-list">
                      <li>Organize receipts</li>
                      <li>Stop chasing clients for money</li>
                    </ul>
                  </div>
                </div>
                <div className="we-offering-slide-item">
                  <div className="we-offering-slide-img">
                    <img src={CardImg4} alt="img" />
                  </div>
                  <div className="we-offering-slide-item-text">
                    <h4>Inventory System</h4>
                    <p className="xl-mb-25">
                      Many desktop publishing packages and web page editors now
                      use as their default model text, and a search for uncover
                      many web sites still in their infancy
                    </p>
                    <div className="we-offering-slide-btns">
                      <button>
                        <span className="iconify" data-icon="bi:check-lg" />{" "}
                        Never run out of stock
                      </button>
                    </div>
                  </div>
                </div>
                <div className="we-offering-slide-item">
                  <div className="we-offering-slide-img">
                    <img src={CardImg3} alt="img" />
                  </div>
                  <div className="we-offering-slide-item-text">
                    <h4>Payment</h4>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College There are many variations of passages
                    </p>
                  </div>
                </div>
                <div className="we-offering-slide-item">
                  <div className="we-offering-slide-img">
                    <img src={CardImg1} alt="img" />
                  </div>
                  <div className="we-offering-slide-item-text">
                    <h4>Invoicing</h4>
                    <p className="xl-mb-25">
                      It has roots in a piece of classical Latin literature from
                      45 BC, making it over 2000 years old. Richard McClintock,
                      a Latin professor at Hampden-Sydney College There are many
                      variations of passages
                    </p>
                    <div className="we-offering-slide-btns">
                      <button>
                        <span className="iconify" data-icon="bi:check-lg" />{" "}
                        Multi-currency support
                      </button>
                      <button>
                        <span className="iconify" data-icon="bi:check-lg" /> GST
                        &amp; VAT
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </OfferingStyleWrapper>
  );
};

export default Offering;
