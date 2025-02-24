import { useEffect } from "react";
import FooterStyleWrapper from "./Footer.style";
import Data from "../../assets/data/footer/footer";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";
import Venobox from "venobox/dist/venobox";

import FooterImg from "../../assets/images/footer/footer-2.png";
import FooterLogo from "../../assets/images/logo/logo-dark.svg";

const FooterTwo = () => {
  useEffect(() => {
    new Venobox({
      selector: ".my-video-links",
    });
  }, []);

  return (
    <FooterStyleWrapper className="footer-section v3">
      {/* Footer top start */}
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6">
              <div className="footer-img">
                <img src={FooterImg} alt="footer-img" />
                <a
                  className="my-video-links"
                  href="https://www.youtube.com/embed/_k8RsMr82zM?si=hvUQJcwkuRaEGC3n"
                  data-autoplay="true"
                  data-vbtype="video"
                >
                  <span className="iconify" data-icon="el:play" />
                </a>
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
            <div className="col-lg-4 col-md-3 col-sm-6">
              <a href="/" className="footer-logo">
                <img src={FooterLogo} alt="footer-logo" />
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <ul className="social-link">
                {FooterSocialLinks?.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank">
                      <span className='social-icon'>
                        <img src={item.imgV2} alt={item.title} />
                        <img src={item.imgV2} alt={item.title} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="footer-copyright">
                <p className="mb-0">2025 <a href="#">Staco</a>. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom end */}
    </FooterStyleWrapper>
  );
};

export default FooterTwo;
