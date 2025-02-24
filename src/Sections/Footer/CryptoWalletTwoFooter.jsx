import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/crypto2-logo.svg";

const CryptoWalletTwoFooter = () => {
  const footerWidgets = [
    {
      title: "Products 🔥",
      links: [
        { text: "HR Management", url: "#" },
        { text: "Invoice System", url: "#" },
        { text: "Email Marketing", url: "#" },
        { text: "Web Services", url: "#" },
        { text: "Digital Marketing", url: "#" },
      ],
    },
    {
      title: "Why choose 🌟",
      links: [
        { text: "Customers", url: "#" },
        { text: "Why Staco ?", url: "#" },
        { text: "Book a demo", url: "#" },
      ],
    },
    {
      title: "Resources ❇️",
      links: [
        { text: "Latest Blog", url: "#" },
        { text: "Supports", url: "#" },
        { text: "Knowledgebase", url: "#" },
        { text: "FAQs", url: "#" },
      ],
    },
    {
      title: "Company 💎",
      links: [
        { text: "About", url: "#" },
        { text: "What we do", url: "#" },
        { text: "Contact us", url: "#" },
        {
          text: "Careers",
          url: "#",
          badgeClass: "template-badge",
          badgeText: "Hiring",
        },
      ],
    },
  ];

  return (
    <FooterStyleWrapper className="footer-section crypto2">
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
                  <ul className="social-link">
                    {FooterSocialLinks?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url} target="_blank">
                          <span className="social-icon small">
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
            <div className="col-lg-8">
              <div className="row">
                {footerWidgets.map((widget, index) => (
                  <div className="col-md-3 col-6" key={index}>
                    <aside className="footer-widget">
                      <div className="widget-title">
                        <h6>{widget.title}</h6>
                      </div>
                      <div className="widget-body">
                        <ul className="widget-list">
                          {widget.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a href={link.url}>
                                {link.text}
                                <span className={link.badgeClass}>
                                  {link.badgeText}
                                </span>
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
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-1 order-2">
              <div className="footer-copyright crypto-wallet-two">
                <p className="mb-0">2023 <a href="#">Staco</a>. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-7 order-md-2 order-1">
              <ul className="privacy-menu crypto-wallet-two">
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

export default CryptoWalletTwoFooter;
