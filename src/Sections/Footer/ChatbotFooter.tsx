import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinks";

import FooterLogo from "../../assets/images/logo/logo.svg";
import Copyright1Img from "../../assets/images/chatbot/gdpr.svg";
import Copyright2Img from "../../assets/images/chatbot/iso.svg";
import Copyright3Img from "../../assets/images/chatbot/soc.svg";
import ScrollAnimate from "../../Components/ScrollAnimate";

const ChatbotFooter = () => {
  const footerMenuCategories = [
    {
      title: "Resources 📈",
      items: [
        { label: "Customer Insights", link: "#" },
        { label: "Analytics", link: "#" },
        { label: "Business Consulting", link: "#" },
        { label: "Code Optimization", link: "#" },
        { label: "SEO Support", link: "#" },
      ],
    },
    {
      title: "Information ❇️",
      items: [
        { label: "About Our Team", link: "#" },
        { label: "Contact Us", link: "#" },
        { label: "Privacy policy", link: "/privacy-policy" },
        { label: "Term & Conditions", link: "#" },
      ],
    },
    {
      title: "Company 🌀",
      items: [
        { label: "About", link: "#" },
        { label: "What we do", link: "#" },
        { label: "Contact us", link: "#" },
        { label: "Careers Hiring", link: "#" },
      ],
    },
  ];
  return (
    <FooterStyleWrapper className="chatbot-footer-section z-index-3">
      <div className="container">
        <div className="chatbot-newslater">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimate delay={200}>
                <div className="chatbot-newslater-left">
                  <h2>Ready to start the Next level AI Chatbot ⏩</h2>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={250}>
                <div className="chatbot-newslater-right">
                  <a href="#" className="chatbot-newslater-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Get Start for Free</span>
                      <span className="btn-hover-text">Get Start for Free</span>
                    </span>
                  </a>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container">
        <div className="chatbot-footer-card">
          <div className="row">
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
              <div className="chatbot-footer-right">
                <div className="row">
                  {footerMenuCategories.map((category, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                      <div className="footer-menu-list">
                        <h5>{category.title}</h5>
                        <ul>
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href={item.link}>{item.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
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
                © 2023, <a href="#">Staco Inc.</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default ChatbotFooter;
