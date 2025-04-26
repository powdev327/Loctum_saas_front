import { useEffect, useState } from "react";
import PricingTableStyleWrapper from "./PricingTable.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";

import comparePriceShape from "../../../assets/images/icons/compare-price-shape.svg";
import crownIcon from "../../../assets/images/icons/crown.svg";
import crown2Icon from "../../../assets/images/icons/crown-2.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleMonthlyClick = () => {
    setIsYearly(false);
  };

  const handleYearlyClick = () => {
    setIsYearly(true);
  };

  const handleToggleChange = (e) => {
    setIsYearly(e.target.checked);
  };

  useEffect(() => {
    const handleScroll = () => {
      var comparePriceSection = document.querySelector(
        ".compare-price-section"
      );
      var comparePriceIcon = document.querySelectorAll(
        ".compare-price-card-icon"
      );
      var y = window.scrollY;
      var x = comparePriceSection.offsetTop;
      x = x - 400;

      comparePriceIcon.forEach((item) => {
        var rotateIcon = item.querySelector(".rotate-icon");

        let animationValue = 0;
        animationValue = (y - x) / 3;

        let animationStop = 90;

        if (animationValue < 0) {
          animationValue = 0;
        }

        if (animationValue > animationStop) {
          animationValue = animationStop;
        }

        if (y > x) {
          rotateIcon.style.setProperty(
            "transform",
            `rotate(${animationValue}deg)`
          );
        } else {
          rotateIcon.style.setProperty(
            "transform",
            `rotate(${animationValue}deg)`
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PricingTableStyleWrapper className="compare-price-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <TitleStyleWrapper>
            <div className="section-title text-center">
              <span className="sub-title">Pricing Table</span>
              <h2 className="title">
                Giving you good value <br />
                with <span className="marketing-badge">best service</span>
              </h2>
            </div>
          </TitleStyleWrapper>
          <div className="best-pricing-selector">
            <form action="/" method="post">
              <button
                type="button"
                className={`best-pricing-monthly-btn ${
                  !isYearly ? "active" : ""
                }`}
                onClick={handleMonthlyClick}
              >
                Monthly
              </button>

              <input
                type="checkbox"
                name="best-pricing-selector"
                id="best-pricing-selector"
                checked={isYearly}
                onChange={handleToggleChange}
              />

              <button
                type="button"
                className={`best-pricing-yearly-btn ${
                  isYearly ? "active" : ""
                }`}
                onClick={handleYearlyClick}
              >
                Yearly <span>(20% Off)</span>
              </button>
            </form>
          </div>
        </ScrollAnimate>
        {isYearly ? (
          <div className="best-pricing-grid yearly">
            <div className="compare-price-content">
              <ScrollAnimate delay={200}>
                <div className="compare-price-card">
                  <div className="compare-price-card-icon">
                    <img
                      className="rotate-icon"
                      src={comparePriceShape}
                      alt="icon"
                    />
                    <div className="icon">
                      <img src={crownIcon} alt="shape-img" />
                    </div>
                  </div>
                  <h5>Basic</h5>
                  <h2>
                    <sup>$</sup>
                    <strong>220</strong>Per year
                  </h2>
                  <div className="compare-list">
                    <ul>
                      <li>Email marketing</li>
                      <li>Unlimited chat history</li>
                      <li>Unlimited landing pages</li>
                      <li>Unlimited automation templates</li>
                      <li>Great Customer Support</li>
                      <li>Unlimited lead funnels</li>
                    </ul>
                  </div>
                  <button className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Start for Free</span>
                      <span className="btn-hover-text">Start for Free</span>
                    </span>
                  </button>
                </div>
              </ScrollAnimate>
              <ScrollAnimate delay={300}>
                <div className="compare-price-card">
                  <div className="compare-price-card-icon">
                    <img
                      className="rotate-icon"
                      src={comparePriceShape}
                      alt="icon"
                    />
                    <div className="icon">
                      <img src={crown2Icon} alt="shape-img" />
                    </div>
                  </div>
                  <h5>Professional</h5>
                  <h2>
                    <sup>$</sup>
                    <strong>700</strong>Per year
                  </h2>
                  <div className="compare-list">
                    <ul>
                      <li>Email marketing</li>
                      <li>Unlimited chat history</li>
                      <li>Unlimited landing pages</li>
                      <li>Unlimited automation templates</li>
                      <li>Great Customer Support</li>
                      <li>Unlimited lead funnels</li>
                    </ul>
                  </div>
                  <button className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Start for Free</span>
                      <span className="btn-hover-text">Start for Free</span>
                    </span>
                  </button>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        ) : (
          <div className="best-pricing-grid monthly">
            <div className="compare-price-content">
              <ScrollAnimate delay={200}>
                <div className="compare-price-card">
                  <div className="compare-price-card-icon">
                    <img
                      className="rotate-icon"
                      src={comparePriceShape}
                      alt="icon"
                    />
                    <div className="icon">
                      <img src={crownIcon} alt="shape-img" />
                    </div>
                  </div>
                  <h5>Basic</h5>
                  <h2>
                    <sup>$</sup>
                    <strong>19</strong>Per month
                  </h2>
                  <div className="compare-list">
                    <ul>
                      <li>Email marketing</li>
                      <li>Unlimited chat history</li>
                      <li>Unlimited landing pages</li>
                      <li>Unlimited automation templates</li>
                      <li>Great Customer Support</li>
                      <li>Unlimited lead funnels</li>
                    </ul>
                  </div>
                  <button className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Start for Free</span>
                      <span className="btn-hover-text">Start for Free</span>
                    </span>
                  </button>
                </div>
              </ScrollAnimate>
              <ScrollAnimate delay={300}>
                <div className="compare-price-card">
                  <div className="compare-price-card-icon">
                    <img
                      className="rotate-icon"
                      src={comparePriceShape}
                      alt="icon"
                    />
                    <div className="icon">
                      <img src={crown2Icon} alt="shape-img" />
                    </div>
                  </div>
                  <h5>Professional</h5>
                  <h2>
                    <sup>$</sup>
                    <strong>59</strong>Per month
                  </h2>
                  <div className="compare-list">
                    <ul>
                      <li>Email marketing</li>
                      <li>Unlimited chat history</li>
                      <li>Unlimited landing pages</li>
                      <li>Unlimited automation templates</li>
                      <li>Great Customer Support</li>
                      <li>Unlimited lead funnels</li>
                    </ul>
                  </div>
                  <button className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Start for Free</span>
                      <span className="btn-hover-text">Start for Free</span>
                    </span>
                  </button>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        )}

        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <div className="best-pricing-info">
                <div className="best-pricing-info-left">
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No cards required</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>30 day free trial</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Get started in 2 minutes</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="best-pricing-info-right">
                  <p>Want to see full pricing?</p>
                  <a href="#" className="compare-plans-btn">
                    <span>Compare Planes</span>
                    <span className="icon">
                      <span
                        className="iconify"
                        data-icon="akar-icons:chevron-right"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </PricingTableStyleWrapper>
  );
};

export default PricingTable;
