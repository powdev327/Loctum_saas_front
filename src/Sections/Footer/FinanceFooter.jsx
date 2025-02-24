import FooterStyleWrapper from "./Footer.style";
import Data from "../../assets/data/footer/footer";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/finance-logo.svg";

const FinanceFooter = () => {
  // Data for each section of the footer
  const footerSectionsData = [
    {
      title: "Products 🔥",
      items: [
        "HR Management",
        "Invoice System",
        "Email Marketing",
        "Web Services",
        "Digital Marketing",
      ],
    },
    {
      title: "Why choose 🌟",
      items: ["Customers", "Why Staco ?", "Book a demo"],
    },
    {
      title: "Resources ❇️",
      items: ["Latest Blog", "Supports", "Knowledgebase", "FAQs"],
    },
    {
      title: "Company 💎",
      items: ["About", "What we do", "Contact us", "Careers"],
    },
  ];

  return (
    <FooterStyleWrapper className="finance-footer-container">
      <section className="finance-footer-section">
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
                    <p>
                      Staco is the dedicated platform for performance management
                      that helps to grow your startup quickly
                    </p>
                  </div>
                  <div className="footer-follow">
                    <ul className="social-link dark footer-one-social-link">
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
              <div className="col-lg-8">
                <div className="row">
                  {footerSectionsData.map((section, index) => (
                    <div key={index} className="col-md-3 col-6">
                      <aside className="footer-widget">
                        <div className="widget-title">
                          <h6>{section.title}</h6>
                        </div>
                        <div className="widget-body">
                          <ul className="widget-list">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a href="#">{item}</a>
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
            <div className="row">
              <div className="col-md-5 order-md-1 order-2">
                <div className="footer-copyright">
                  <p>2023 <a href="#">Staco</a>. All rights reserved.</p>
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
      </section>
    </FooterStyleWrapper>
  );
};

export default FinanceFooter;
