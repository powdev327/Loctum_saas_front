import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/logo.svg";
import LetterBoxImg from "../../assets/images/newslater/letter-box.svg";
import Copyright1Img from "../../assets/images/chatbot/gdpr.svg";
import Copyright2Img from "../../assets/images/chatbot/iso.svg";
import Copyright3Img from "../../assets/images/chatbot/soc.svg";

const NewsletterFooter = () => {
  return (
    <FooterStyleWrapper className="chatbot-footer-section newsletter-footer z-index-3">
      <div className="container">
        <div className="newsletter-get-demo-section">
          <div className="newsletter-get-demo-section-inner">
            <div className="row">
              <div className="col-md-6">
                <div className="newsletter-get-demo-left">
                  <h2>Get more value from your favorite tools</h2>
                  <a href="#">
                    Get a Free Demo
                    <span
                      className="iconify"
                      data-icon="akar-icons:arrow-right"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="newsletter-box">
                  <img src={LetterBoxImg} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="chatbot-footer-card newsletter">
          <div className="row flex-row-reverse">
            <div className="col-lg-5">
              <div className="chatbot-footer-left">
                <h4>Subscribe newsletter to get updates</h4>
                <p>
                  By submitting my email, I agree to receive newsletters from
                  Stacobot agency
                </p>
                <form className="subscribe-form">
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
                  <div className="col-md-4 col-6">
                    <div className="footer-menu-list">
                      <h5>Resources 📈</h5>
                      <ul>
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
                  <div className="col-md-4 col-6">
                    <div className="footer-menu-list">
                      <h5>Information ❇️</h5>
                      <ul>
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
                          <a href="#">Term &amp; Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="footer-menu-list">
                      <h5>Company 🌀</h5>
                      <ul>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">What we do</a>
                        </li>
                        <li>
                          <a href="#">Contact us</a>
                        </li>
                        <li>
                          <a href="#">
                            Careers <span>Hiring</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="chatbot-footer-bottom">
          <a className="chatbot-footer-logo" href="/">
            <img src={FooterLogo} alt="footer-logo" />
          </a>
          <div className="row pt-5">
            <div className="col-lg-8 col-md-6">
              <div className="chatbot-footer-bottom-left">
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
              <div className="chatbot-footer-bottom-right">
                <p>
                  Say hello to :
                  <a href="mailto:support@mail.com">support@mail.com</a>
                </p>
                <div className="chatbot-social">
                  <ul className="social-link dark">
                    {FooterSocialLinks?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url} target="_blank">
                          <span className="social-icon">
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
              <div className="footer-copyright">
                &copy; 2025, <a href="#">Staco Inc.</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default NewsletterFooter;
