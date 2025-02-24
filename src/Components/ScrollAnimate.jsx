import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const AnimatedWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "animate" && prop !== "delay",
})`
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  transition-delay: ${({ delay }) => delay}ms;

  ${({ animate }) =>
    animate &&
    css`
      opacity: 1;
      transform: translateY(0);
      animation: bounceInUp 0.7s ease-out;
      animation-delay: ${({ delay }) => delay}ms;
    `}

  @keyframes bounceInUp {
    0% {
      transform: translateY(48px);
    }
    60% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const ScrollAnimate = ({ children, delay = 0 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <AnimatedWrapper ref={ref} animate={isInView} delay={delay}>
      {children}
    </AnimatedWrapper>
  );
};

export default ScrollAnimate;
