import FooterStyleWrapper from "./Footer.style";

import FooterBlurImg from "../../assets/images/defi/footer-blur_bg.png";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";

const footerData = [
  {
    title: "About Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Ecosystem", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Latest Articles", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Swap", href: "#" },
      { title: "Liquidity", href: "#" },
      { title: "Bridge", href: "#" },
      { title: "Governance", href: "#" },
      { title: "Farming Pools", href: "#" },
    ],
  },
  {
    title: "Documents",
    links: [
      { title: "Whitepaper", href: "#" },
      { title: "Litepaper", href: "#" },
      { title: "Docs", href: "#" },
      { title: "FAQs", href: "#" },
    ],
  },
  {
    title: "Applications",
    links: [
      { label: "Google Play", icon: <FaGooglePlay />, href: "#" },
      { label: "Apple Store", icon: <FaApple />, href: "#" },
      { label: "Windows Store", icon: <FaWindows />, href: "#" },
    ],
  },
];

const DefiFooter = () => {
  return (
    <FooterStyleWrapper className="defi-footer-section">
      {footerData.map((section, index) => (
        <div key={index} className="footer-row">
          <div className="container">
            <div className="footer-row-inner">
              <div className="left">
                <h5 className="dm-sans">{section.title}</h5>
              </div>
              <div className="right">
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>
                        {link.title && <>{link.title}</>}
                        {link.icon && <>{link.icon}</>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="defi-footer-bottom">
        <div className="container">
          <div className="footer-row-inner">
            <div className="left">
              <a href="#">&copy; 2025 Staco</a>
            </div>
            <div className="right links">
              <ul>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={FooterBlurImg} alt="img" className="defi-footer-blur" />
    </FooterStyleWrapper>
  );
};

export default DefiFooter;
