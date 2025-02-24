import DefiPartnersStyle from "./DefiPartners.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { partnerData } from "../../../assets/data/DefiData/DefiPartnersData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DefiPartners = () => {
  return (
    <DefiPartnersStyle className="defi-backed-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Investors and Partners"
          subtitle="Backed By Awesomes"
          alignment="center"
          parentClass="defi"
        />
        </ScrollAnimate>
        <div className="defi-backed-content">
          <ScrollAnimate delay={300}>
          <div className="defi-backed-list">
            <ul>
              {partnerData.map((partner) => (
                <li key={partner.id}>
                  <a href="#">
                    <img src={partner.src} alt={partner.alt} />
                    <img src={partner.src} alt={partner.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </ScrollAnimate>
        </div>
      </div>
    </DefiPartnersStyle>
  );
};

export default DefiPartners;
