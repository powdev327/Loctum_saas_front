import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PortfolioGalleryStyle from "./PortfolioGallery.style";
import GalleryData from "../../assets/data/PortfolioGalleryData";
import { useEffect } from "react";
import Venobox from "venobox/dist/venobox";
import ScrollAnimate from "../../Components/ScrollAnimate";

const PortfolioGallery = () => {
  useEffect(() => {
    new Venobox({
      selector: ".portfolio-img",
      numeration: true,
      infinigall: true,
      share: true,
    });
  }, []);

  return (
    <PortfolioGalleryStyle className="portfolio-gallery-section">
      <div className="container">
        <div className="portfolio-gallery-content">
          <div className="row">
            <div className="masonary-grid">
              {GalleryData?.map((item, i) => (
                <div key={i} className="portfolio-gallery-card">
                  <ScrollAnimate delay={item.delay}>
                    <div className="parallax-window">
                      {/* Wrap the whole card in a link with class "portfolio-img" to trigger Venobox */}
                      <a
                        href={item.img}
                        className="portfolio-img"
                        data-gall="portfolio-img-gallery"
                      >
                        <img src={item.img} alt="img" />
                        <div className="portfolio-details">
                          <div className="portfolio-text-card">
                            <div className="portfolio-text">
                              <h5>
                                <a href="#">{item.title}</a>
                              </h5>
                              <h6>{item.category}</h6>
                            </div>
                            <a href="#" className="portfolio-text-link">
                              <div className="icon">
                                <span
                                  className="iconify"
                                  data-icon="akar-icons:chevron-right"
                                ></span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </a>
                    </div>
                  </ScrollAnimate>
                </div>
              ))}
            </div>
          </div>

          <button className="load-more-btn">
            <span className="btn-inner">
              <span className="btn-normal-text">Load More</span>
              <span className="btn-hover-text">Load More</span>
            </span>
          </button>
        </div>
      </div>
    </PortfolioGalleryStyle>
  );
};

export default PortfolioGallery;
