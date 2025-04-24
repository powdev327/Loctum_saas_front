import DefiBlogStyle from "./DefiBlog.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { articleData } from "../../../assets/data/DefiData/DefiBlogData";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

import arrowRightYellow from "../../../assets/images/crypto-token/arrow-right-yellow.svg";
import { useEffect } from "react";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DefiBlog = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <DefiBlogStyle className="latest-articles-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="From Blog Post"
          subtitle="Latest Articles"
          alignment="center"
          parentClass="defi"
        />
        </ScrollAnimate>
        <div className="latest-articles-content">
          <div className="row">
            {articleData.map((article) => (
              <div key={article.id} className="col-md-4 col-sm-6">
                <ScrollAnimate delay={article.delay}>
                <div className="latest-articles-card">
                  <div className="articles-img">
                    <img src={article.imgSrc} alt="img" />
                  </div>
                  <div className="latest-articles-text">
                    <p>{article.category}</p>
                    <a href={article.mediumLink}>
                      <h4 data-splitting="">{article.title}</h4>
                    </a>
                    <div className="articles-footer">
                      <p>{article.date}</p>
                      <a href={article.mediumLink}>
                        <img src="../images/crypto/medium.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
       <ScrollAnimate delay={300}>
       <a href="#" className="defi-explore-article-btn btn-hov-effect">
          Explore all Articles
          <img src={arrowRightYellow} alt="icon" />
          <span className="round-shape" />
        </a>
       </ScrollAnimate>
      </div>
    </DefiBlogStyle>
  );
};

export default DefiBlog;
