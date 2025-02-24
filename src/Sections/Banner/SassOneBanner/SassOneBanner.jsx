import { useEffect } from "react";
import { useTypingHeadlines } from "use-typing-headlines";
import SassOneBannerStyle from "./SassOneBanner.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

import teamManagementImg from "../../../assets/images/sass1/team-managemnet.svg";
import invoiceImg from "../../../assets/images/sass1/invoice.svg";
import meetingImg from "../../../assets/images/sass1/meeting.svg";
import chatbotImg from "../../../assets/images/sass1/chatbot.svg";
import seoImg from "../../../assets/images/sass1/seo.svg";
import telehealthImg from "../../../assets/images/sass1/telehealth.svg";
import emailAutomotionImg from "../../../assets/images/sass1/email-automotion.svg";
import helpDeskImg from "../../../assets/images/sass1/help-desk.svg";
import campaignImg from "../../../assets/images/sass1/campaign.svg";
import saasImg from "../../../assets/images/sass1/saas.svg";
import chatInventoryImg from "../../../assets/images/sass1/chat-inventory.svg";
import inventoryImg from "../../../assets/images/sass1/inventory.svg";
import index5BannerImg from "../../../assets/images/sass1/index5-banner-img.png";
import handsIcon from "../../../assets/images/icons/hands.png";

const SassOneBanner = () => {
  const [sassOneHeadline] = useTypingHeadlines(["Email", "Meeting", "Invoice"], {
    speed: 200, // adjust this to make typing faster; lower values mean faster typing
    delay: 200, // adjust delay between words
  });

  useEffect(() => {
    const handleScroll = () => {
      const hero5 = document.querySelector(".hero-section-index5");
      if (hero5) {
        const indexVImg = document.querySelector(".hero-section-index5");
        const y = window.scrollY;
        let x;
        let heroVImg;
        x = indexVImg.offsetTop;
        heroVImg = indexVImg.querySelector(".index5-hero-img img");
        x = x + 400;

        let animationValue = 40;
        animationValue = (animationValue - (y - x)) / 5;

        const animationStop = 0;

        if (animationValue > 40) {
          animationValue = 40;
        }

        if (animationValue < animationStop) {
          animationValue = animationStop;
        }

        if (y > x) {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        } else {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        }

        const scrollSlider = document.querySelector(
          ".index5-scroll-carousel-section"
        );
        let z = scrollSlider.offsetTop;
        z = z - 500;
        let val = (-1 * y) / 4;
        let val2 = y / 4;
        if (y > z) {
          document.querySelector(
            ".slide-left"
          ).style.transform = `translateX(${val}px)`;
          document.querySelector(
            ".slide-right"
          ).style.transform = `translateX(${val2}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SassOneBannerStyle className="hero-section-index5">
      <div className="container">
        <div className="index5-hero-content">
          <ScrollAnimate delay={200}>
          <div className="v5welocme-section">
            <img src={handsIcon} alt="icons" /> Welcome to Staco
          </div>
          <div className="v5banner-text">
            <h1 className="cd-headline clip is-full-width banner-title text-center">
              <span className="brack-text">Galaxy of startup</span>
              simple&nbsp;
              <span className="cd-words-wrapper animation-text">
                <b>{sassOneHeadline}</b>
              </span>
              &nbsp;solution
            </h1>
            <p>
              I must explain to you how all this mistaken. Tdea of denouncing
              pleasure and praising pain was born
            </p>
          </div>
          <form>
            <input type="email" placeholder="Email Address" />
            <button className="bg-blue-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Get Started</span>
                <span className="btn-hover-text">Get Started</span>
              </span>
            </button>
          </form>
          </ScrollAnimate>
        </div>
        <div className="index5-hero-img">
          <img src={index5BannerImg} alt="img" />
        </div>
      </div>
      <div className="index5-scroll-carousel-section">
        <ScrollAnimate delay={200}>
        <ul className="slide-left">
          <li>
            <span>
              <img src={teamManagementImg} alt="img" />
            </span>
            <strong>Team Management</strong>
          </li>
          <li>
            <span>
              <img src={invoiceImg} alt="img" />
            </span>
            <strong>Invoice System</strong>
          </li>
          <li>
            <span>
              <img src={meetingImg} alt="img" />
            </span>
            <strong>Digital Marketing</strong>
          </li>
          <li>
            <span>
              <img src={chatbotImg} alt="img" />
            </span>
            <strong>Chatbot</strong>
          </li>
          <li>
            <span>
              <img src={seoImg} alt="img" />
            </span>
            <strong>SEO</strong>
          </li>
          <li>
            <span>
              <img src={telehealthImg} alt="img" />
            </span>
            <strong>HR Management</strong>
          </li>
          <li>
            <span>
              <img src={invoiceImg} alt="img" />
            </span>
            <strong>Invoice System</strong>
          </li>
        </ul>
        </ScrollAnimate>
        <ScrollAnimate delay={220}>
        <ul className="slide-right">
          <li>
            <span>
              <img src={teamManagementImg} alt="img" />
            </span>
            <strong>Newsletter</strong>
          </li>
          <li>
            <span>
              <img src={chatInventoryImg} alt="img" />
            </span>
            <strong>Chat Inventory</strong>
          </li>
          <li>
            <span>
              <img src={inventoryImg} alt="img" />
            </span>
            <strong>Inventory</strong>
          </li>
          <li>
            <span>
              <img src={emailAutomotionImg} alt="img" />
            </span>
            <strong>Email Automotion</strong>
          </li>
          <li>
            <span>
              <img src={helpDeskImg} alt="img" />
            </span>
            <strong>Help Desk</strong>
          </li>
          <li>
            <span>
              <img src={campaignImg} alt="img" />
            </span>
            <strong>Campaign</strong>
          </li>
          <li>
            <span>
              <img src={saasImg} alt="img" />
            </span>
            <strong>SaaS</strong>
          </li>
          <li>
            <span>
              <img src={chatInventoryImg} alt="img" />
            </span>
            <strong>Chat Inventory</strong>
          </li>
        </ul>
        </ScrollAnimate>
      </div>
    </SassOneBannerStyle>
  );
};

export default SassOneBanner;
