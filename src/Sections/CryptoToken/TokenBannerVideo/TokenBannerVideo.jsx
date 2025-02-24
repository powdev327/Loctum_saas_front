import { useEffect, useState } from "react";
import TokenBannerVideoStyle from "./TokenBannerVideo.style";
import BannerVideo from "../../../assets/videos/meta_video.mp4";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TokenBannerVideo = () => {
  const headlines = ["Dimensions", "World", "Realms"];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleIndex]);

  return (
    <TokenBannerVideoStyle className="banner-video-section">
      <div className="container">
        <div className="banner-video-card">
          <video loop autoPlay playsInline muted>
            <source src={BannerVideo} type="video/mp4" />
          </video>
          <ScrollAnimate delay={200}>
            <div className="cd-intro m-0">
              <h2 className="cd-headline slide mb-0">
                <span className="wt-700 quantico">Escape to infinite</span>
                <br />

                <span className="cd-words-wrapper dm-sans quantico">
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
              </h2>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </TokenBannerVideoStyle>
  );
};

export default TokenBannerVideo;
