import React from 'react'
import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";
import FooterLogo from "../../assets/images/logo/q-logo.svg";
import FooterOneMenuList from "./FooterOneMenuList";
import FooterContractCard from "../../Components/FooterContractCard/FooterContractCard";
import FooterNewsletter from '../../Components/FooterNewsletter/FooterNewsletter';

const FooterOne = () => {
  return (
    <FooterStyleWrapper className="footer-section home-footer">
      <div className="footer-inner">
        {/* Footer top start */}
        <div className="footer-top footer-one-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-8">
                <div className="footer-card">
                  <div className="footer-info">
                    <a href="/" className="footer-logo">
                      <img src={FooterLogo} alt="footer-logo" />
                    </a>
                    <p>
                      Staco is the dedicated platform for performance management
                      that helps to grow your startup quickly
                    </p>
                  </div>

                  <FooterContractCard/>
                  <FooterNewsletter/>

                  <div className="footer-follow">
                    <ul className="social-link dark footer-one-social-link">
                      {FooterSocialLinks?.map((item, i) => (
                        <li key={i}>
                          <a href={item.url} target="_blank">
                            <span className='social-icon'>
                              <img src={item.img} alt={item.title} />
                              <img src={item.img} alt={item.title} />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <FooterOneMenuList/>
              </div>
            </div>
          </div>
        </div>
        {/* Footer top end */}

        {/* Footer bottom start */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-5 order-md-1 order-2">
                <div className="footer-copyright">
                  <p className="mb-0">2025 <a href="#">Staco</a>. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-7 order-md-2 order-1">
                <ul className="privacy-menu">
                  <li>
                    <a href="/terms">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer bottom end */}
      </div>
    </FooterStyleWrapper>
  );
};

export default FooterOne;
