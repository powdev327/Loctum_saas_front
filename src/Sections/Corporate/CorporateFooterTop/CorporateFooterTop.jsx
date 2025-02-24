import CorporateFooterTopStyle from "./CorporateFooterTop.style";
import { CorporateFooterTopData } from "../../../assets/data/CorporateData/CorporateFooterTopData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateFooterTop = () => {
  return (
    <CorporateFooterTopStyle className="corporate-footer-top-section">
      <div className="row">
        {CorporateFooterTopData.map((banner) => (
          <div key={banner.id} className="col-md-4 col-sm-6">
            <div className={`corporate-footer-top-banner ${banner.className}`}>
              <div className="overlay">
                <ScrollAnimate>
                  <div className="corporate-footer-top-text">
                    <h4 className="text-white">{banner.title}</h4>
                    <p className="uppercase text-white wt-700">
                      <a href={banner.link}>Explore More</a>
                    </p>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CorporateFooterTopStyle>
  );
};

export default CorporateFooterTop;
