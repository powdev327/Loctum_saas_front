import { useEffect, useRef } from "react";
import TeamCounterStyleWrapper from "./TeamCounter.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TeamCounter = () => {
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
    <TeamCounterStyleWrapper className="counter-section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="counter-card">
              <div className="counter-item md-mb-30">
                <ScrollAnimate delay={200}>
                  <h2>
                    <span className="counter" datatarget="200">
                      200
                    </span>
                  </h2>
                  <p>Countries Worldwide</p>
                </ScrollAnimate>
              </div>
              <div className="counter-item md-mb-30">
                <ScrollAnimate delay={225}>
                  <h2>
                    <span className="counter" datatarget="165">
                      165
                    </span>
                    K
                  </h2>
                  <p>Registered User</p>
                </ScrollAnimate>
              </div>
              <div className="counter-item">
                <ScrollAnimate delay={250}>
                  <h2>
                    <span className="counter" datatarget="23">
                      23
                    </span>
                    K
                  </h2>
                  <p>Small &amp; Big Companies</p>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeamCounterStyleWrapper>
  );
};

export default TeamCounter;
