import CrossPlatformStyle from "./CrossPlatform.style";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import crossPlatformMeshGrad from "../../../assets/images/crypto/cross-platform-mesh-grad.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CrossPlatform = () => {
  return (
    <CrossPlatformStyle className="cross-platform-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="cross-platform-card">
            <SectionTitle
              title="Multi blockchain &amp; 1000+ tokens"
              subtitle="Cross Platform"
              alignment="center"
              titleMaxW="390px"
              titleMargin="auto"
              parentClass="crypto md-mb-0"
            />
            <img
              src={crossPlatformMeshGrad}
              alt="img"
              className="cross-platform-mesh-grad"
            />
          </div>
        </ScrollAnimate>
      </div>
    </CrossPlatformStyle>
  );
};

export default CrossPlatform;
