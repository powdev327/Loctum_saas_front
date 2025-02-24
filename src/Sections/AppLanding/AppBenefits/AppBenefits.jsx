import { useEffect, useRef } from "react";
import AppBenefitsStyle from "./AppBenefits.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { benefitsData } from "../../../assets/data/app-data/AppBenefitsData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppBenefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;

      const cards = document.querySelectorAll(".app-benefits-card-img img");

      cards.forEach((cardImage) => {
        const y = window.scrollY;
        let x = sectionTop + cardImage.offsetTop;

        let newAnimationValue = (y - x) / 2;

        const animationStop = 100;

        if (newAnimationValue < 0) {
          newAnimationValue = 0;
        }

        if (newAnimationValue > animationStop) {
          newAnimationValue = animationStop;
        }

        cardImage.style.transform = `translateY(${newAnimationValue}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBenefitsStyle className="app-benefits-section" ref={sectionRef}>
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Enjoy a fast and stable connection"
            subtitle="Benefits"
            alignment="center"
            titleMaxW="520px"
            titleMargin="auto"
          />
        </ScrollAnimate>
        <div className="row app-benefits-row">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <ScrollAnimate delay={benefit.delay}>
                <div className="app-benefits-card">
                  <div className={`app-benefits-card-img ${benefit.imgClass}`}>
                    <img src={benefit.imgSrc} alt="img" />
                  </div>
                  <div className="app-benefits-card-text">
                    <h5 className="wt-700">{benefit.title}</h5>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </AppBenefitsStyle>
  );
};

export default AppBenefits;
