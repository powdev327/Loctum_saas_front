import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/corporate-logo.svg";

const FooterSeven = () => {
  return (
    <FooterStyleWrapper className="footer6-section corporate-footer-section">
      {/* Footer top start */}
      <div className="footer-top6">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6 mb-4">
              <div className="footer-col v8">
                <a href="#" className="footer6-logo">
                  <img src={FooterLogo} alt="logo" />
                </a>
                <h6 className="text-white">
                  We Provide <br />
                  Best customer Service
                </h6>
                <a href="#" className="text-link corpotate">
                  <span>We’re hiring</span>
                  <span
                    className="iconify"
                    data-icon="akar-icons:arrow-right"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <div className="footer-col corporate-footer-col v8">
                <h5 className="text-white">Resources 📈</h5>
                <ul className="check-list">
                  <li>
                    <a href="#">Customer Insights</a>
                  </li>
                  <li>
                    <a href="#">Analytics</a>
                  </li>
                  <li>
                    <a href="#">Business Consulting</a>
                  </li>
                  <li>
                    <a href="#">Code Optimization</a>
                  </li>
                  <li>
                    <a href="#">SEO Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <div className="footer-col corporate-footer-col v8">
                <h5 className="text-white">Information ❇️</h5>
                <ul className="check-list">
                  <li>
                    <a href="#">About Our Team</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Term &amp; Conditions </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <div className="footer-col corporate-footer-col">
                <h5 className="text-white">Newslatter 💌</h5>
                <p>Subscribe our newsletter to get all updates &amp; offers</p>
                <form>
                  <input type="email" placeholder="Email address" />
                  <button type="button" className="footer-subscribe-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer top end */}
      {/* Footer bottom start */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="footer-copyright footer-copyright-dark">
                <p>
                  Copyright <a href="#">Staco</a> 2025, All right reserved
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <ul className="social-link dark social-link-right corporate-footer-social-link">
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
      </div>
      {/* Footer bottom end */}
    </FooterStyleWrapper>
  );
};

export default FooterSeven;
