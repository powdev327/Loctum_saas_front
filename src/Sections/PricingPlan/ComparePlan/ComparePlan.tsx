import { useEffect, useRef, useState } from "react";
import { ComparePlanData } from "../../../assets/data/PricingPlanData/ComparePlanData";
import ComparePlanStyle from "./ComparePlan.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ComparePlan = () => {
  const TableHeaderRef = useRef(null);
  const TableBodyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = TableBodyRef.current.getBoundingClientRect();
      const x = rect.top;
      const htx = TableHeaderRef.current.offsetHeight;
      const ht = TableBodyRef.current.offsetHeight;

      if (x <= htx && x + ht > htx) {
        TableHeaderRef.current.classList.add("sticky");
      } else {
        TableHeaderRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ComparePlanStyle>
      <ScrollAnimate delay={200}>
        <div className="container">
          <h3 className="compare-plans-title">Compare all plans</h3>
        </div>
      </ScrollAnimate>

      <div className="compare-plans-content">
        <div className="compare-plans-table-section">
          <div className="compare-plans-table">
            <div ref={TableHeaderRef} className="table-header-sticky">
              <div className="container">
                <div className="table-header thead-first">
                  <ol>
                    <li>
                      <h6>Basic features</h6>
                    </li>
                    <li className="pricingPlanTablinks">
                      <h6>Free</h6>
                      <button onClick={() => console.log("Start Free clicked")}>
                        Start Free
                      </button>
                    </li>
                    <li className="pricingPlanTablinks">
                      <h6>
                        Growth <span>$99 /mo</span>
                      </h6>
                      <button
                        onClick={() =>
                          console.log("Get Started - Growth clicked")
                        }
                      >
                        Get Started
                      </button>
                    </li>
                    <li className="pricingPlanTablinks">
                      <h6>
                        Business <span>$250 /mo</span>
                      </h6>
                      <button
                        onClick={() =>
                          console.log("Get Started - Business clicked")
                        }
                      >
                        Get Started
                      </button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="container">
              <div ref={TableBodyRef} className="table-body">
                <div className="pricing-table-row">
                  {ComparePlanData.map((item, index) => (
                    <ul key={index}>
                      <li>{item.feature}</li>
                      <li>{item.basic}</li>
                      <li>{item.advances}</li>
                      <li>{item.unlimited}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComparePlanStyle>
  );
};

export default ComparePlan;
