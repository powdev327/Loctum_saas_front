import { useEffect } from "react";
import SectionTitleStyleWrapper from "./SectionTitle.style";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

const SectionTitle = ({
  title,
  subtitle,
  alignment,
  titleMaxW,
  parentClass,
  titleMargin,
  subtitleClass,
  titleClass,
}) => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <SectionTitleStyleWrapper
      style={{ textAlign: alignment, maxWidth: titleMaxW, margin: titleMargin }}
      className={parentClass}
      {...(parentClass === "defi" && { "data-splitting": true })}
    >
      {subtitle && (
        <span className={`sub-title ${subtitleClass}`}>{subtitle}</span>
      )}
      {title && <h2 className={`title ${titleClass}`}>{title}</h2>}
    </SectionTitleStyleWrapper>
  );
};

export default SectionTitle;
