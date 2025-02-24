import ChatbotBannerStyle from "./ChatbotBanner.style";

import HoggleIcon from "../../../assets/images/chatbot/hoggle-icon.svg";
import WebmVideo from "../../../assets/videos/animation.webm";
import BannerVideo from "../../../assets/videos/chatbot-banner-video.mp4";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ChatbotBanner = () => {
  return (
    <ChatbotBannerStyle className="v8banner-section chatbot-banner">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="v8banner-text chatbot-banner-text">
            <div className="cd-intro m-0">
              <h1 className="title">
                Grow customer with advanced <br />
                <span>
                  AI chatbot
                  <img src={HoggleIcon} alt="icon" />
                </span>
              </h1>
            </div>
            <p>
              Staco is the dedicated platform for human management that helps to
              grow your startup business quickly
            </p>
            <form className="start-free-form">
              <input
                className="form-input"
                type="email"
                placeholder="Email address"
              />
              <input
                className="bg-blue-btn"
                type="submit"
                defaultValue="Start for free"
              />
            </form>
            <ul className="hero-content-list">
              <li>
                <div className="list-item">
                  <span className="iconify" data-icon="bi:check-lg" />
                  <p>Free 14-day trial</p>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <span className="iconify" data-icon="bi:check-lg" />
                  <p>No credit card required</p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollAnimate>
      </div>
      <div className="v8banner-video chatbot-banner-video">
        <div className="chatbot-banner-video-overlay">
          <ScrollAnimate delay={300}>
            <div className="banner-chat-section">
              <video loop autoPlay playsInline muted>
                <source src={WebmVideo} type="video/webm" />
              </video>
            </div>
          </ScrollAnimate>
        </div>
        <video loop autoPlay playsInline muted>
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>
    </ChatbotBannerStyle>
  );
};

export default ChatbotBanner;
