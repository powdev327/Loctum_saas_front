import { useEffect, useRef } from "react";
import HomeMarketingStyleWrapper from "./HomeMarketing.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TitleWithBadge from "../../../Components/Title/TitleWithBadge";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import CustomPieProgress from "../../../Components/CustomPieProgress";

import ChartImage from "../../../assets/images/shape/chart-1.svg";
import EmojiIconsImage from "../../../assets/images/shape/emoji.svg";
import Star1Image from "../../../assets/images/shape/star1.svg";
import Star2Image from "../../../assets/images/shape/star2.svg";
import Star3Image from "../../../assets/images/shape/star3.svg";
import M1Image from "../../../assets/images/main-demo/m1.png";
import Ellipse1Image from "../../../assets/images/main-demo/ellipse1.png";
import Ellipse2Image from "../../../assets/images/main-demo/ellipse2.png";
import Ellipse3Image from "../../../assets/images/main-demo/ellipse3.png";
import Ellipse4Image from "../../../assets/images/main-demo/ellipse4.png";
import ManImage from "../../../assets/images/main-demo/man.png";
import M2Image from "../../../assets/images/main-demo/m2.png";
import Star4Image from "../../../assets/images/shape/star-4.svg";
import ItemShapeImage from "../../../assets/images/shape/item-shape.svg";
import WaveShapeImage from "../../../assets/images/shape/wave-shape.svg";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const HomeOneMarketingSection = () => {
  // counter up
  const sectionRef = useRef(null);

  useEffect(() => {
    let isAnimated = 0;
    function counterUp() {
      if (isAnimated == 0) {
        const counterItem = document.querySelectorAll(".counter");
        counterItem.forEach((item) => {
          var counterText = item.innerText;
          item.innerText = "0";
          const updateCounter = () => {
            let dataTarget = +item.getAttribute("datatarget");
            if (dataTarget > 999) {
              dataTarget = dataTarget / 1000;
            }
            counterText = +item.innerText;
            let increment = dataTarget / 1000;
            if (counterText < dataTarget) {
              item.innerText = `${Math.ceil(counterText + increment)}`;
              setTimeout(updateCounter, 1);
            }
          };
          updateCounter();
        });
      }
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const x = sectionRef.current.offsetTop - 400;
      if (y > x && y < x + window.innerHeight) {
        counterUp();
        isAnimated++;
      } else {
        isAnimated = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeMarketingStyleWrapper>
      {/* Locum Hiring & Workforce Automation Section */}
      <div className="marketing-section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <ScrollAnimate delay={200}>
                <div className="marketing-img">
                  <div className="overlay">
                    <div className="overlay-item chart">
                      <img src={ChartImage} alt="chart-img" />
                    </div>
                    <div className="overlay-item emoji-icons">
                      <img src={EmojiIconsImage} alt="emoji-icons" />
                    </div>
                    <div className="overlay-item star-1">
                      <img src={Star1Image} alt="star" />
                    </div>
                    <div className="overlay-item star-2">
                      <img src={Star2Image} alt="star" />
                    </div>
                    <div className="overlay-item star-3">
                      <img src={Star3Image} alt="star" />
                    </div>
                  </div>
                  <img src={M1Image} alt="marketing-img" />
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="marketing-content">
                <div className="marketing-content-title">
                  <TitleStyleWrapper>
                    <ScrollAnimate delay={250}>
                      <div className="section-title">
                        <span className="sub-title">Efficient Locum Staffing</span>
                        <h2 className="title">
                          Seamless Hiring,
                          <br /> Reliable <span className="marketing-badge">Healthcare Staffing</span>
                        </h2>
                      </div>
                    </ScrollAnimate>
                  </TitleStyleWrapper>
                </div>
                <div className="marketing-content-body">
                  <ScrollAnimate delay={300}>
                    <p>
                      QuickLocum connects pharmacies, clinics, and hospitals with qualified locum professionals in real-time.
                      By streamlining the hiring process, healthcare providers can reduce administrative overhead, minimize staffing
                      gaps, and ensure consistent patient care.
                    </p>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <ul className="list">
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">Instant locum booking with verified professionals</p>
                        </div>
                      </li>
                      <li>
                        <div className="list-item">
                          <FaCheck />
                          <p className="w-700">Automated scheduling and workforce optimization</p>
                        </div>
                      </li>
                    </ul>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Management & Shift Scheduling Section */}
      <div className="marketing-section marketing-section2 md-pt-60" ref={sectionRef}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div className="marketing-content">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    subtitle="Workforce Management & Payroll"
                    title="Simplify Shift Planning and Payment Processing"
                    parentClass="md-mb-0"
                  />
                </ScrollAnimate>

                <div className="marketing-content-body">
                  <ScrollAnimate delay={250}>
                    <div className="mb-30">
                      <p>
                        QuickLocum enables healthcare providers to manage shifts, track locum availability, and automate payroll
                        processing. By reducing the complexities of temporary staffing, QuickLocum allows pharmacies, hospitals,
                        and clinics to focus on delivering high-quality patient care without the stress of last-minute scheduling challenges.
                      </p>
                    </div>
                  </ScrollAnimate>
                  <ScrollAnimate delay={300}>
                    <a href="#" className="text-link">
                      <span>Learn More</span>
                      <GoArrowRight />
                    </a>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
              <div className="marketing-img v2">
                <img src={M2Image} alt="marketing-img" />
                <div className="overlay">
                  <div className="overlay-item reduction-time">
                    <div className="reduction-time-top">
                      <h2>
                        <span className="counter" datatarget="80">
                          80
                        </span>
                        %
                      </h2>
                      <img src={Star4Image} alt="star" />
                    </div>
                    <p>Reduction in hiring time</p>
                  </div>
                  <div className="overlay-item success-rate">
                    <img className="rotate-icon" src={ItemShapeImage} alt="icon" />
                    <div className="success-rate-content">
                      <div className="progress pie_progress">
                        <CustomPieProgress
                          Text="Success Rate"
                          TextColor="#444444"
                          Percentage={95}
                          ValueColor="#000000"
                          PathColor="#00CEC9"
                          TrailColor="rgba(0, 206, 201, 0.2)"
                        />
                        <p>Staffing success rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="overlay-item wave-shape">
                    <img src={WaveShapeImage} alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeMarketingStyleWrapper>
  );
};

export default HomeOneMarketingSection;
