import { useEffect } from "react";
import FooterStyleWrapper from "./Footer.style";
import $ from "jquery";

import FooterLogo from "../../assets/images/logo/crypto-token-logo.svg";
import FooterShapeImg from "../../assets/images/crypto-token/footer-shape.png";

const menuData = [
  {
    columnClass: "footer-column footer-column2",
    columnTitle: "Products 🔥",
    items: [
      { label: "Wallet", link: "#" },
      { label: "Platform", link: "#" },
      { label: "Marketplace", link: "#" },
      { label: "DeFi App", link: "#" },
      { label: "Extension Wallet", link: "#" },
      { label: "Play to Earn", link: "#" },
    ],
  },
  {
    columnClass: "footer-column footer-column3",
    columnTitle: "Protocol ❇️",
    items: [
      { label: "Community", link: "#" },
      { label: "Governance", link: "#" },
      { label: "Developers", link: "#" },
      { label: "Help Center", link: "#" },
      { label: "Ecosystem", link: "#" },
    ],
  },
  {
    columnClass: "footer-column footer-column4",
    columnTitle: "Company 💎",
    items: [
      { label: "About Us", link: "#" },
      { label: "Latest News", link: "#" },
      { label: "Contact Us", link: "#" },
    ],
  },
];

const CryptoTokenFooter = () => {
  useEffect(() => {
    const handleScroll = () => {
      var cryptoBannerImg = $(".token-footer-bottom-text .text .top");
      var y = window.scrollY;
      var x;
      x = cryptoBannerImg.offset().top;
      x = x - 800;

      let animationValue = 1;
      animationValue = (y - x) / 2;

      let animationStop = 0;

      if (animationValue < 0) {
        animationValue > 0;
      }

      if (animationValue > animationStop) {
        animationValue = animationStop;
      }

      cryptoBannerImg.css("top", `${animationValue}px`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterStyleWrapper className="token-footer-section">
      <div className="overlay">
        <div className="overlay2">
          <div className="container">
            <div className="token-footer-menu-section">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="footer-column footer-column1">
                    <a href="/" className="footer-logo">
                      <img src={FooterLogo} alt="logo" />
                    </a>
                  </div>
                </div>
                {menuData.map((column, colIndex) => (
                  <div className="col-md-3 col-6" key={colIndex}>
                    <div className={column.columnClass}>
                      <h5>{column.columnTitle}</h5>
                      <ul>
                        {column.items.map((item, itemIndex) => (
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
            <div className="token-subscribe-section">
              <input type="email" placeholder="mail@domain.com" />
              <input type="submit" value="Subscribe to Get Updates" />
            </div>
            <div className="token-footer-bottom-text">
              <div className="text">
                <span>Dec</span>
                <span className="top">e</span>
                <span>n</span>
                <span className="top">t</span>
                <span>ra</span>
                <span className="top">l</span>
                <span>ize D</span>
                <span className="top">r</span>
                <span>ea</span>
                <span className="top">m</span>
                <span>s</span>
              </div>
            </div>
            <div className="footer-shape">
              <img src={FooterShapeImg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default CryptoTokenFooter;
