import { useEffect, useState } from "react";
import NewsletterTemplateStyle from "./NewsletterTemplate.style";
import { imagePaths } from "../../../assets/data/NewsletterData/NewsletterTamplateData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const NewsletterTemplate = () => {
  const [scrollTransform, setScrollTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".portfolio-gallery");
      const y = window.scrollY;
      const x = container.offsetTop - 400;
      const val = (-1 * y) / 2;

      if (y > x) {
        setScrollTransform(val);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NewsletterTemplateStyle className="portfolio-section newsletter p-0">
      <ScrollAnimate delay={200}>
      <div className="portfolio-title">
        <div className="portfolio-subtitle align-items-end">
          <div>
            <p className="text-right">Newsletters</p>
            <h2>
              Enjoy our Pre-made <br />
              Templates
            </h2>
          </div>
          <h3 className="mb-0">
            1000+ <br />
            <span>Email Template ✔️</span>
          </h3>
        </div>
      </div>
      </ScrollAnimate>
      <ScrollAnimate delay={300}>
      <div className="portfolio-gallery-section">
        <div
          className="portfolio-gallery"
          style={{ transform: `translateX(${scrollTransform}px)` }}
        >
          {imagePaths.map((path, index) => (
            <div key={index} className="portfolio-img">
              <img src={path} alt={`img-${index + 1}`} />
            </div>
          ))}
        </div>
        <a href="#" className="free-demo-btn">
          <span className="btn-inner">
            <span className="btn-normal-text">Try a free demo</span>
            <span className="btn-hover-text">Try a free demo</span>
          </span>
          <span className="iconify" data-icon="akar-icons:arrow-right" />
        </a>
      </div>
      </ScrollAnimate>
    </NewsletterTemplateStyle>
  );
};

export default NewsletterTemplate;
