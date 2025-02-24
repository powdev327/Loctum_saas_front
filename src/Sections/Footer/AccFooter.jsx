import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/logo-8.svg";

const AccFooter = () => {
  const sections = [
    {
      title: "We Provide Best customer Service",
      links: [
        { text: "We’re hiring", icon: "akar-icons:arrow-right", href: "#" },
      ],
      logoSrc: FooterLogo,
    },
    {
      title: "Resources 📈",
      titleClass: 'mt-1',
      links: [
        { text: "Customer Insights", href: "#" },
        { text: "Analytics", href: "#" },
        { text: "Business Consulting", href: "#" },
        { text: "Code Optimization", href: "#" },
        { text: "SEO Support", href: "#" },
      ],
    },
    {
      title: "Information ❇️",
      titleClass: 'mt-1',
      links: [
        { text: "About Our Team", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Privacy policy", href: "/privacy-policy" },
        { text: "Term & Conditions", href: "#" },
      ],
    },
    {
      title: "Newslatter 💌",
      titleClass: 'mt-1',
      description: "Subscribe our newsletter to get all updates & offers",
      formPlaceholder: "Email address",
      subscribeBtnText: "Subscribe",
    },
  ];

  return (
    <FooterStyleWrapper className="footer6-section">
      <div className="footer-contact-section">
        <div className="footer-contact-line" />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="footer-contact">
                <div className="footer-contact-text">
                  <p>Mail Us</p>
                  <a href="mailto:support@yourmail.com">
                    <h5>support@yourmail.com</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="footer-contact-text">
                <p>Call Us</p>
                <a href="tel:+1 850-263-0000">
                  <h5>+1 850-263-0000</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer top start */}
      <div className="footer-top6">
        <div className="container">
          <div className="row">
            {sections.map((section, index) => (
              <div key={index} className="col-lg-3 col-6 mb-4">
                <div className="footer-col v8">
                  {section.logoSrc && (
                    <a href="#" className="footer6-logo">
                      <img src={section.logoSrc} alt="logo" />
                    </a>
                  )}
                  {section.title && <h6 className={`${section.titleClass}`}>{section.title}</h6>}
                  {section.links && (
                    <ul className="check-list">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href}>{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.description && <p>{section.description}</p>}
                  {section.formPlaceholder && (
                    <form>
                      <input
                        type="email"
                        placeholder={section.formPlaceholder}
                      />
                      <button type="button" className="footer-subscribe-btn">
                        {section.subscribeBtnText}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ))}
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
                  2025 <a href="#">Staco</a>. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <ul className="social-link social-link-right">
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
          </div>
        </div>
      </div>
      {/* Footer bottom end */}
    </FooterStyleWrapper>
  );
};

export default AccFooter;
