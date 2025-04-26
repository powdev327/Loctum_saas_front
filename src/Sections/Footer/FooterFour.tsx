import FooterStyleWrapper from "./Footer.style";

const FooterFour = () => {
  return (
    <FooterStyleWrapper>
      {/* Footer section start */}
      <footer className="footer-section">
        {/* Footer top start */}
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-6">
                <div className="footer-card">
                  <div className="footer-info">
                    <a href="/" className="footer-logo">
                      <img src="../images/logo/logo.svg" alt="footer-logo" />
                    </a>
                    <p>
                      Staco is the dedicated platform for performance management
                      that helps to grow your startup quickly
                    </p>
                  </div>
                  <div className="footer-follow">
                    <p>Follow:</p>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <img
                            src="../images/icons/facebook.svg"
                            alt="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../images/icons/twitter.svg"
                            alt="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../images/icons/pinterest.svg"
                            alt="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../images/icons/instagram.svg"
                            alt="social-icon"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../images/icons/dribbble.svg"
                            alt="social-icon"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-3 col-6">
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>Products</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
                          <li>
                            <a href="#">HR Management</a>
                          </li>
                          <li>
                            <a href="#">Invoive System</a>
                          </li>
                          <li>
                            <a href="#">Email Marketing</a>
                          </li>
                          <li>
                            <a href="#">Web Services</a>
                          </li>
                          <li>
                            <a href="#">Digital Marketing</a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="col-md-3 col-6">
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>Why choose</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
                          <li>
                            <a href="#">Customers</a>
                          </li>
                          <li>
                            <a href="#">Why Staco ?</a>
                          </li>
                          <li>
                            <a href="#">Book a demo</a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="col-md-3 col-6">
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>Resources</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
                          <li>
                            <a href="#">Latest Blog</a>
                          </li>
                          <li>
                            <a href="#">Supports</a>
                          </li>
                          <li>
                            <a href="#">Knowledgebase</a>
                          </li>
                          <li>
                            <a href="#">FAQs</a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div className="col-md-3 col-6">
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>Company</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
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
                              Careers{" "}
                              <span className="template-badge">Hiring</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
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
                  <p>2023 Staco. All rights reserved.</p>
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
      </footer>
      {/* Footer section end */}
    </FooterStyleWrapper>
  );
};

export default FooterFour;
