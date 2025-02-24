import CrossNetworkStyle from "./CrossNetwork.style";
import brand1 from "../../../assets/images/brands/brand1.svg";
import brand2 from "../../../assets/images/brands/brand2.svg";
import brand3 from "../../../assets/images/brands/brand3.svg";
import brand4 from "../../../assets/images/brands/brand4.svg";
import brand5 from "../../../assets/images/brands/brand5.svg";
import brand6 from "../../../assets/images/brands/brand6.svg";
import brand7 from "../../../assets/images/brands/brand7.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CrossNetwork = () => {
  const logosData = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <CrossNetworkStyle className="cross-network-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <h3>Cross network</h3>
        <p>
          We use as filler text for layouts, non-readability is of great
          importance but because those who do not know how to pursue pleasure
          rationally encounter consequences that are extremely painful. Nor
          again is there anyone
        </p>
        </ScrollAnimate>
      </div>
      <ScrollAnimate delay={300}>
      <div className="cross-network-logos">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="cross-network-list" key={index}>
            {logosData.map((logo, logoIndex) => (
              <div className="item" key={logoIndex}>
                <img src={logo} alt={`logo${logoIndex + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
      </ScrollAnimate>
    </CrossNetworkStyle>
  );
};

export default CrossNetwork;
