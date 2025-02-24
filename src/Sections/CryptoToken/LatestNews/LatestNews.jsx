import LatestNewsStyle from "./LatestNews.style";
import { newsData } from "../../../assets/data/CryptoTokenData/LatestNewsData";

import arrowRightYellowIcon from "../../../assets/images/crypto-token/arrow-right-yellow.svg";
import arrowDownIcon from "../../../assets/images/crypto-token/arrow-down.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const LatestNews = () => {
  return (
    <LatestNewsStyle className="latest-news-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="latest-news-title">
          <h2 data-splitting>Latest News</h2>
          <a href="/blog">
            View All Post <img src={arrowRightYellowIcon} alt="icon" />
          </a>
        </div>
        </ScrollAnimate>
      </div>
      <ScrollAnimate delay={300}>
      <div className="news-content">
        {newsData.map((news, index) => (
          <div key={index} className="news-row-section">
            <div className="container">
              <div className="news-row">
                <div className="news-link">
                  <h5>{news.date}</h5>
                  <h3 data-splitting>{news.title}</h3>
                  <div className="link">
                    <a href={news.link} target="_blank" className="link-inner">
                      <span>
                        <img src={arrowDownIcon} alt="icon" />
                      </span>
                      <span>
                        <img src={arrowDownIcon} alt="icon" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className={`news-row-bg ${news.imageClass}`}>
                  <div className="overlay" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </ScrollAnimate>
    </LatestNewsStyle>
  );
};

export default LatestNews;
