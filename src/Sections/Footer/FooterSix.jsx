import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import MeshGradImg from "../../assets/images/portfolio/mesh-grad.png";
import GrainTextureImg from "../../assets/images/portfolio/grain-texture.png";

const FooterSix = () => {
  return (
    <FooterStyleWrapper className="v7-footer-area">
      <div className="footer-section-v7">
        <img src={MeshGradImg} alt="img" className="footer-section-mash-gard" />
        <div className="footer-section-grain-texture">
          <img src={GrainTextureImg} alt="img" />
        </div>
        <div className="container">
          <div className="footer-v7-content">
            <div className="footer-v7-text pb-3">
              <h2>
                Subscribe newsletter
                <br />
                Get free updates
              </h2>
              <form className="start-free-form mx-auto">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className="bg-blue-btn"
                  type="submit"
                  defaultValue="Start for free"
                />
              </form>
            </div>
            <div className="v7footer-contact-card">
              <div className="v7footer-card-text text-left">
                <p>Mail Us</p>
                <h6>
                  <a href="mailto:support@mail.com">support@yourmail.com</a>
                </h6>
              </div>
              <div className="v7footer-card-text text-center">
                <p>Call Us</p>
                <h6>
                  <a href="#">+1 850-263-0000</a>
                </h6>
              </div>
              <div className="v7footer-card-text text-right">
                <p>Follow Us</p>
                <ul className="social-link dark">
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
            <div className="v7-main-footer">
              <p className="copyright-text mb-0">
                Copyright <a href="#">Staco</a> 2025, All right reserved
              </p>
              <a href="#" className="back-to-top-btn">
                <div className="icon">
                  <span
                    className="iconify"
                    data-icon="akar-icons:chevron-right"
                  ></span>
                </div>
              </a>
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
    </FooterStyleWrapper>
  );
};

export default FooterSix;
