import { useEffect, useRef, useState } from "react";
import FinanceBannerStyle from "./FinanceBanner.style";

import vector1 from "../../../assets/images/finance-index/Vector-1.svg";
import vector2 from "../../../assets/images/finance-index/Vector-2.svg";
import vector3 from "../../../assets/images/finance-index/Vector-3.svg";
import vector4 from "../../../assets/images/finance-index/Vector-4.svg";
import vector5 from "../../../assets/images/finance-index/Vector-5.svg";
import vector6 from "../../../assets/images/finance-index/Vector-6.svg";
import vectorLine1 from "../../../assets/images/finance-index/banner-vector-line1.svg";
import vectorLine2 from "../../../assets/images/finance-index/banner-vector-line2.svg";

const vectorImages = [vector1, vector2, vector3, vector4, vector5, vector6];

import BannerVideo from "../../../assets/videos/h6-video.mp4";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceBanner = () => {
  const headlines = ["Easier", "Accountable", "Unbeatable"];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleIndex]);

  const VideoRef = useRef(null);
  const VideoControlRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoControl = () => {
    if (isPlaying) {
      VideoRef.current.pause();
      VideoControlRef.current.classList.add("active");
    } else {
      VideoRef.current.play();
      VideoControlRef.current.classList.remove("active");
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <FinanceBannerStyle className="hero-section6">
      {vectorImages.map((vector, index) => (
        <span key={index} className={`banner-vector banner-vector${index + 1}`}>
          <img src={vector} alt={`img${index + 1}`} />
        </span>
      ))}
      <span />
      <div className="container">
        <span className="banner-vector-line1">
          <img src={vectorLine1} alt="img" />
        </span>
        <span className="banner-vector-line2">
          <img src={vectorLine2} alt="img" />
        </span>
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <div className="v6-banner-text">
                <div className="v6-banner-text">
                  <div className="cd-intro m-0 uig-animate-style">
                    <h1 className="cd-headline loading-bar banner-title">
                      Financial Security Made
                      <span
                        className="cd-words-wrapper"
                      >
                        {headlines.map((headline, index) => (
                          <b
                            key={index}
                            className={
                              index === visibleIndex ? "is-visible" : "is-hidden"
                            }
                          >
                            {headline}
                          </b>
                        ))}
                      </span>
                    </h1>
                  </div>
                  <p>
                    Staco is the dedicated platform for human management that
                    helps to grow your startup business quickly
                  </p>
                  <div className="v6-banner-btns">
                    <NavLink to={"/sign-up"} className="btn-olive-deep">
                      <span className="btn-inner">
                        <span className="btn-normal-text">
                          Get Start for Free
                        </span>
                        <span className="btn-hover-text">Get Start for Free</span>
                      </span>
                    </NavLink>
                    <NavLink to={"/contact-us"} className="lets-talk-bttn">
                      Let’s talk
                      <span className="icon">
                        <span
                          className="iconify"
                          data-icon="akar-icons:chevron-right"
                        />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-md-6 text-right">
            <ScrollAnimate delay={300}>
              <div className="v6-banner-img-section">
                <div className="v6-banner-img">
                  <video
                    ref={VideoRef}
                    id="staco-h6-video"
                    loop
                    autoPlay
                    playsInline
                    muted
                  >
                    <source src={BannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <button
                    ref={VideoControlRef}
                    id="staco-h6-video-control"
                    onClick={handleVideoControl}
                  >
                    <span className="play">
                      <span
                        className="iconify"
                        data-icon="material-symbols:play-arrow"
                      />
                    </span>
                    <span className="pause">
                      <span className="iconify" data-icon="fe:pause" />
                    </span>
                  </button>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </FinanceBannerStyle>
  );
};

export default FinanceBanner;
