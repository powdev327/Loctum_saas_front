import FooterStyleWrapper from "./Footer.style";
import FooterSocialLinks from "../../assets/data/footer/footerSocialLinksV2";

import FooterLogo from "../../assets/images/logo/crypto-logo.svg";

const CryptoWalletOneFooter = () => {
  const footerMenus = [
    {
      title: "Navigation ❇️",
      links: [
        { text: "Home", url: "#", badgeClass: "none" },
        { text: "Apps", url: "#", badgeClass: "none" },
        { text: "Support", url: "#", badgeClass: "none" },
        { text: "Submit a Request", url: "#", badgeClass: "none" },
        { text: "FAQ", url: "#", badgeClass: "none" },
      ],
    },
    {
      title: "Developers 📈",
      links: [
        { text: "Cloud", url: "#", badgeClass: "none" },
        { text: "Wallet SDK", url: "#", badgeClass: "none" },
        { text: "Testnet Funds", url: "#", badgeClass: "none" },
        { text: "Prime API", url: "#", badgeClass: "none" },
        { text: "Node", url: "#", badgeClass: "none" },
      ],
    },
    {
      title: "Company 💎",
      links: [
        { text: "About", url: "#", badgeClass: "none" },
        { text: "What we do", url: "#", badgeClass: "none" },
        { text: "Contact us", url: "#", badgeClass: "none" },
        {
          text: "Careers",
          url: "#",
          badgeClass: "crypto-badge",
          badgeText: "Hiring",
        },
      ],
    },
  ];

  return (
    <FooterStyleWrapper className="chatbot-footer-section newsletter-footer crypto-wallet-footer z-index-3">
      <div className="container">
        <div className="chatbot-footer-card crypto-wallet">
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
                    className="bg-blue-btn gradient-bg-btn"
                    defaultValue="Subscribe"
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="chatbot-footer-right newslatter p-0">
                <div className="row">
                  {footerMenus.map((menu, index) => (
                    <div className="col-md-4 col-6" key={index}>
                      <div className="footer-menu-list">
                        <h5>{menu.title}</h5>
                        <ul>
                          {menu.links.map((link, linkIndex) => (
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
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <a className="chatbot-footer-logo" href="/">
                <img src={FooterLogo} alt="footer-logo" />
              </a>
              <div className="chatbot-footer-bottom-left pt-5">
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
              <div className="chatbot-footer-bottom-right crypto">
                <p>
                  Say hello to :{" "}
                  <a href="mailto:support@mail.com">support@mail.com</a>
                </p>
                <div className="crypto-footer-social">
                  <p>Follow us :</p>
                  <div className="crypto-footer-social-list">
                    {FooterSocialLinks?.map((item, i) => (
                      <a key={i} href={item.url} target="_blank">
                        <span className='social-icon'>
                          <img src={item.img} alt={item.title} />
                          <img src={item.img} alt={item.title} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="footer-copyright crypto">
                © 2023, <a href="#">Staco Inc.</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default CryptoWalletOneFooter;
