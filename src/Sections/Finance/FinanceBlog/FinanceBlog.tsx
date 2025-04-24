import FinanceBlogStyle from "./FinanceBlog.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import userImg1 from "../../../assets/images/finance-index/user-img1.png";
import userImg2 from "../../../assets/images/finance-index/user-img2.png";
import userImg3 from "../../../assets/images/finance-index/user-img3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceBlog = () => {
  return (
    <FinanceBlogStyle className="blog-post-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Latest Articles"
          subtitle="Blog Post"
          subtitleClass="green-color"
        />
        </ScrollAnimate>
        <div className="blog-post-content">
          <ScrollAnimate delay={300}>
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-4">
              <div className="blog-post-card blog-post-card1">
                <div className="card-title">
                  <h6>Investments</h6>
                  <h4>
                    <a href="/blog-details">
                      We always try to discover success startup business
                    </a>
                  </h4>
                </div>
                <p>
                  Because those who do not know how to pursue pleasure
                  rationally encounter consequences that are extremely painful
                  nor again is there anyone.
                </p>
                <div className="card-footer">
                  <a href="#" className="user">
                    <div className="user-img">
                      <img src={userImg1} alt="img" />
                    </div>
                    <span>Adon Neo</span>
                  </a>
                  <span className="blog-date">22 Mar, 2023</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <div className="blog-post-card blog-post-card2">
                <div className="card-title">
                  <h6 className="white-color">Integration</h6>
                  <h4 className="white-color">
                    <a href="/blog-details">
                      Seamless integration with Salesforce &amp; HubSpot
                    </a>
                  </h4>
                </div>
                <div className="card-footer">
                  <a href="#" className="user">
                    <div className="user-img">
                      <img src={userImg2} alt="img" />
                    </div>
                    <span>Henray Nion</span>
                  </a>
                  <span className="white-color">30 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-4">
              <div className="blog-post-card blog-post-card3">
                <div className="card-title">
                  <h6>Integration</h6>
                  <h3>
                    <a href="/blog-details">
                      Convenient way to find financial advisors in your business
                      area
                    </a>
                  </h3>
                </div>
                <div className="card-footer">
                  <a href="#" className="user">
                    <div className="user-img">
                      <img src={userImg3} alt="img" />
                    </div>
                    <span>Mordana Loreo</span>
                  </a>
                  <span className="blog-date">8 Aug, 2023</span>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimate>
        </div>
      </div>
    </FinanceBlogStyle>
  );
};

export default FinanceBlog;
