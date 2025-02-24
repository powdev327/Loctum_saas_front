import { useTypingHeadlines } from "use-typing-headlines";
import NewsletterBannerStyle from "./NewsletterBanner.style";
import BannerImg from "../../../assets/images/newslater/newslater-banner-img.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const NewsletterBanner = () => {
  const [newsletterHeadline] = useTypingHeadlines([
    "Automation",
    "Newslater",
    "Marketing",
  ],
  { speed: 20 }
);

  return (
    <NewsletterBannerStyle className="hero-section2 newslater">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
            <div className="hero-content hero-content2">
              <div className="hero-content2-text">
                <div className="new-hoogle">
                  <span>New</span>
                  <p className="mb-0">Hoogle integration added</p>
                </div>
                <h1 className="banner-title cd-headline clip is-full-width">
                  Powerful email <br />
                  <span className="cd-words-wrapper animation-text">
                    <b>{newsletterHeadline}</b>
                  </span>
                </h1>
                <p>
                  Staco is the dedicated platform for human management that
                  helps to grow your startup business quickly
                </p>
              </div>
              <div className="hero-content-button newslater">
                <NavLink to={"/sign-up"} className="bg-blue-btn">
                  <span className="btn-inner">
                    <span className="btn-normal-text">Start for Free</span>
                    <span className="btn-hover-text">Start for Free</span>
                  </span>
                </NavLink>
                <NavLink to={"/contact-us"} className="bg-white-btn">
                  <span className="btn-inner">
                    <span className="btn-normal-text">Let’s talk</span>
                    <span className="btn-hover-text">Let’s talk</span>
                  </span>
                </NavLink>
              </div>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
            <div className="hero2-img">
              <img src={BannerImg} alt="img" />
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </NewsletterBannerStyle>
  );
};

export default NewsletterBanner;
