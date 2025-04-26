import FooterStyleWrapper from "./Footer.style";
import Data from "../../assets/data/footer/footer";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/logo.svg";
import Rating1Img from "../../assets/images/icons/g2.svg";
import Rating2Img from "../../assets/images/icons/ct.svg";

const BusinessFooter = () => {
  const privacyLinks = [
    { label: "Terms and conditions", url: "/terms" },
    { label: "Cookies", url: "#" },
    { label: "Privacy policy", url: "/privacy-policy" },
  ];

  return (
    <FooterStyleWrapper className="footer-section v4">
      {/* Footer top start */}
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6">
              <div className="footer-card">
                <div className="footer-info">
                  <a href="/" className="footer-logo">
                    <img src={FooterLogo} alt="footer-logo" />
                  </a>
                  <div className="mb-30">
                    <h4>We Provide</h4>
                    <h4>Best customer Service</h4>
                  </div>
                  <h5>
                    Hello to :{" "}
                    <a href="mailto:mailto:support@mail.com">
                      support@mail.com
                    </a>
                  </h5>
                </div>
                <div className="footer-follow">
                  <ul className="social-link dark">
                    {FooterSocialLinks?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url} target="_blank">
                          <span className="social-icon small">
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
              <div className="row">
                {Data?.map((item, i) => (
                  <div key={i} className="col-md-3 col-6">
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>{item.title}</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
                          {item.menuList?.map((menuItem, mid) => (
                            <li key={mid}>
                              <a href={menuItem.url}>
                                {menuItem.title}
                                {menuItem.badgeTitle && (
                                  <span className="template-badge">Hiring</span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
                  </div>
                ))}
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
            <div className="col-lg-4 col-md-12 lg-center-text order-lg-1 order-3">
              <div className="footer-copyright">
                <p>2025 <a href="#">Staco</a>. All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 order-lg-2 order-1">
              <ul className="footer-rating">
                <li>
                  <div className="list-item">
                    <div className="icon">
                      <img src={Rating1Img} alt="icon" />
                    </div>
                    <div className="text">
                      <span
                        className="iconify"
                        data-icon="clarity:star-solid"
                      />
                      <p>4.8/5</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-item">
                    <div className="icon">
                      <img src={Rating2Img} alt="icon" />
                    </div>
                    <div className="text">
                      <span
                        className="iconify"
                        data-icon="clarity:star-solid"
                      />
                      <p>4.6/5</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-7 order-lg-3 order-2">
              <ul className="privacy-menu">
                {privacyLinks.map((privacyLink, index) => (
                  <li key={index}>
                    <a href={privacyLink.url}>{privacyLink.label}</a>
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

export default BusinessFooter;
