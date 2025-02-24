import { useState, useEffect, useRef } from "react";
import ScrollTextStyle from "./ScrollText.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const items = [
  "Interactive",
  "Simulation",
  "Blockchain",
  "Token",
  "Interactive",
  "Simulation",
  "Blockchain",
  "Token",
  "Interactive",
  "Simulation",
  "Blockchain",
  "Token",
  "Interactive",
  "Simulation",
  "Blockchain",
  "Token",
];

const ScrollText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTextRef = useRef(null);
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
    const scrollTextNode = scrollTextRef.current;
    if (!scrollTextNode) return;

    const { top, height } = scrollTextNode.getBoundingClientRect();
    const centerY = top + height / 4;

    const yOffset = centerY - window.innerHeight / 4;

    setOffset({ x: 0, y: yOffset });
  }, [scrollPosition]);

  return (
    <ScrollTextStyle className="scroll-text-section">
      <ScrollAnimate delay={200}>
      <div className="scroll-text-inner" ref={scrollTextRef}>
        <ul
          className="scroll-text-list"
          style={{ transform: `translate(${offset.y}px, ${offset.x}px)` }}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </ScrollAnimate>
    </ScrollTextStyle>
  );
};

export default ScrollText;
