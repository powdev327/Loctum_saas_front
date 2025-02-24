import { useState, useEffect, useRef } from "react";
import CryptoPartnersStyle from "./CryptoPartners.style";
import { partnerLogos } from "../../../assets/data/CryptoWalletTwo/CryptoPartners";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CryptoPartners = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const partnersImgRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const partnersImgNode = partnersImgRef.current;
    if (!partnersImgNode) return;

    const { top, height } = partnersImgNode.getBoundingClientRect();
    const centerY = top + height / 2;

    const yOffset = centerY - window.innerHeight / 2;

    setOffset({ x: 0, y: yOffset });
  }, [scrollPosition]);

  return (
    <CryptoPartnersStyle className="our-partners-section crypto2-our-partners-section">
      <div className="container">
       <ScrollAnimate delay={200}>
       <SectionTitle
          title="They made us Proud"
          subtitle="Our Partners"
          alignment="center"
          parentClass="crypto2"
        />
       </ScrollAnimate>
      </div>
      <div className="partners-logos">
        <ScrollAnimate delay={250}>
        <div
          className="our-partners-list our-partners-list-left"
          ref={partnersImgRef}
          style={{ transform: `translate(${-offset.y}px, ${offset.x}px)` }}
        >
          {partnerLogos.map((partner) => (
            <div key={partner.id} className="item">
              <img src={partner.path} alt="logo" />
            </div>
          ))}
        </div>
        </ScrollAnimate>
       <ScrollAnimate delay={300}>
       <div
          className="our-partners-list our-partners-list-right"
          ref={partnersImgRef}
          style={{ transform: `translate(${offset.y}px, ${-offset.x}px)` }}
        >
          {partnerLogos.map((partner) => (
            <div key={partner.id} className="item">
              <img src={partner.path} alt="logo" />
            </div>
          ))}
        </div>
       </ScrollAnimate>
      </div>
    </CryptoPartnersStyle>
  );
};

export default CryptoPartners;
