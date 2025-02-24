import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/sass-logo-dark.svg";
import BgImg from "../../assets/images/sass2/footer-bg.svg";
import Shape1Img from "../../assets/images/sass2/footer-shape1.svg";
import Shape2Img from "../../assets/images/sass2/footer-shape2.svg";
import DemoShape1Img from "../../assets/images/sass2/demo-shape1.svg";
import DemoShape2Img from "../../assets/images/sass2/demo-shape2.svg";
import DemoShape3Img from "../../assets/images/sass2/demo-shape3.svg";
import DemoShape4Img from "../../assets/images/sass2/demo-shape4.svg";
import Copyright1Img from "../../assets/images/chatbot/gdpr.svg";
import Copyright2Img from "../../assets/images/chatbot/iso.svg";
import Copyright3Img from "../../assets/images/chatbot/soc.svg";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { useEffect, useRef } from "react";

const SassTwoFooter = () => {
  // data for footer menus
  const menuData = [
    {
      category: "Resources 📈",
      items: [
        "Customer Insights",
        "Analytics",
        "Business Consulting",
        "Code Optimization",
        "SEO Support",
      ],
    },
    {
      category: "Information ❇️",
      items: [
        "About Our Team",
        "Contact Us",
        "Privacy policy",
        "Term & Conditions",
      ],
    },
    {
      category: "Company 🌀",
      items: ["About", "What we do", "Contact us", "Careers Hiring"],
    },
  ];

  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let x = sectionRef.current.offsetTop;
      x = x - 400;

      let animationValue = 10;
      animationValue = (y - x) / 2;

      let animationStop = 100;

      if (animationValue < 0) {
        animationValue = 0;
      }

      if (animationValue > animationStop) {
        animationValue = animationStop;
      }

      imgRef.current.style.transform = `translateY(${animationValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterStyleWrapper
      className="chatbot-footer-section newsletter-footer sass-footer z-index-3"
      ref={sectionRef}
    >
      <img src={BgImg} alt="img" className="footer-bg" />
      <img src={Shape1Img} alt="img" className="shape-img1" />
      <img src={Shape2Img} alt="img" className="shape-img2" />
      <div className="container pos-relt">
        <div className="newsletter-get-demo-section sass">
          <div className="newsletter-get-demo-section-inner sass">
            <div className="row">
              <div className="col-md-7">
                <div className="newsletter-get-demo-left pb-0">
                  <h2>Unlock the Full Potential of Your Business</h2>
                  <a href="#">
                    Get a Free Demo
                    <span
                      className="iconify"
                      data-icon="akar-icons:arrow-right"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="sass-demo-shapes">
                  <img src={DemoShape1Img} alt="shape" className="shape1" />
                  <img src={DemoShape2Img} alt="shape" className="shape2" />
                  <img src={DemoShape3Img} alt="shape" className="shape3" />
                  <img
                    src={DemoShape4Img}
                    alt="shape"
                    className="shape4"
                    ref={imgRef}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-footer-card newsletter sass">
          <div className="row flex-row-reverse">
            <div className="col-lg-5">
              <div className="chatbot-footer-left sass">
                <h4>Subscribe newsletter to get updates</h4>
                <p>
                  By submitting my email, I agree to receive newsletters from
                  Stacobot agency
                </p>
                <form className="subscribe-form sass">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email address"
                  />
                  <input
                    type="submit"
                    className="bg-blue-btn"
                    defaultValue="Subscribe"
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="chatbot-footer-right newslatter p-0">
                <div className="row">
                  {menuData.map((category, index) => (
                    <div className="col-md-4 col-6" key={index}>
                      <div className="footer-menu-list sass">
                        <h5>{category.category}</h5>
                        <ul>
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href="#">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pos-relt">
        <div className="chatbot-footer-bottom">
          <a className="chatbot-footer-logo" href="/">
            <img src={FooterLogo} alt="footer-logo" />
          </a>
          <div className="row pt-5">
            <div className="col-lg-8 col-md-6">
              <div className="chatbot-footer-bottom-left sass">
                <ul>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="/terms">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy policy</a>
                  </li>
                </ul>
                <p>
                  <span>* Disclaimer : </span>There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If
                  you are going to use a passage of Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="chatbot-footer-bottom-right sass">
                <p>
                  Say hello to :
                  <a href="mailto:support@mail.com">support@mail.com</a>
                </p>
                <div className="chatbot-social footer-social">
                  <ul className="social-link">
                    {FooterSocialLinks?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url} target="_blank">
                          <span className="social-icon">
                            <img src={item.imgV2} alt={item.title} />
                            <img src={item.imgV2} alt={item.title} />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-lg-4 col-md-6">
              <ul className="copyright-list">
                <li>
                  <img src={Copyright1Img} alt="img" />
                </li>
                <li>
                  <img src={Copyright2Img} alt="img" />
                </li>
                <li>
                  <img src={Copyright3Img} alt="img" />
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="footer-copyright sass">
                &copy; 2025, <a href="#">Staco Inc.</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default SassTwoFooter;
