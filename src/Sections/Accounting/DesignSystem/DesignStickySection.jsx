import { useEffect } from "react";
import AccountingContent from "../AccountingSection/AccountingContent";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AccStartFree from "./../AccStartFree/AccStartFree";
import AccFooter from "../../Footer/AccFooter";
import DashboardImg from "../../../assets/images/accounting/dashboard.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DesignStickySection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elementSection = document.querySelector(".design-system-sticky");
      const x = elementSection.offsetTop;
      const y = window.scrollY;

      if (y >= x) {
        elementSection.classList.add("active");
      } else {
        elementSection.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="design-system-sticky">
        <div className="design-system-section">
          <div className="container">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Clean Dashboard"
                subtitle="Design System"
                alignment="center"
                subtitleClass="green-color"
              />
            </ScrollAnimate>
            <ScrollAnimate delay={300}>
              <div className="design-system-img">
                <img src={DashboardImg} alt="img" />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>

      <div className="v8-seroll-content">
        <AccountingContent />
        <AccStartFree />
        <AccFooter />
      </div>
    </>
  );
};

export default DesignStickySection;
