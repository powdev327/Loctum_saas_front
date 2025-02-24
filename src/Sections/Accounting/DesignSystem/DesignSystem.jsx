import DesignSystemStyle from "./DesignSystem.style";
import DesignStickySection from "./DesignStickySection";

const DesignSystem = () => {
  return (
    <DesignSystemStyle
      className="v8-seroll-section main-content"
      data-spy="scroll"
      data-target="#myScrollspy"
      data-offset="20"
    >
      <DesignStickySection />
    </DesignSystemStyle>
  );
};

export default DesignSystem;
