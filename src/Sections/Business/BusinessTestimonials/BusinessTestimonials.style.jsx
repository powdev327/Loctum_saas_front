import styled from "styled-components";

import BgImg from "../../../assets/images/business/bg-shape.svg";

const BusinessTestimonialsStyle = styled.section`
  padding: 112px 0;
  background: linear-gradient(90deg, #d3e1ff 0%, #ecf1f8 45.31%, #ffeaef 98.8%);
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .section-title.testimonial-title4 {
    margin-bottom: 105px;
    svg {
      color: ${({ theme }) => theme.colors.badgeColor};
    }
  }

  .testimonial-section-4-slider {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
    position: relative;

    &::before {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      left: 0;
      width: 375px;
      height: 100%;
      background: linear-gradient(
        90deg,
        #d3e1ff 0%,
        rgba(211, 225, 255, 0) 100%
      );
    }

    &::after {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      right: 0;
      width: 375px;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 234, 239, 0) 0%,
        #ffeaef 100%
      );
    }
    .scroller {
      display: flex;
      align-items: center;
    }

    .slider-container {
      width: calc(295px * 12);
      display: flex;
      align-items: center;
      gap: 20px;
      animation: testimonial4Slider 35s infinite linear;
    }

    .slider-item {
      flex: 0 0 auto;
      width: 295px;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 30px;
      padding: 20px 30px;

      &:nth-child(4n + 1) {
        transform: rotate(5deg);
      }

      &:nth-child(4n + 3) {
        transform: rotate(-5deg);
      }

      p {
        color: ${({ theme }) => theme.colors.textColor};
      }
      h4 {
        font-size: 15px;
        line-height: 24px;
      }
      h5 {
        font-size: 13px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.textColor};
      }

      .slider-info {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  @keyframes testimonial4Slider {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-295px * 6));
    }
  }

  @media screen and (max-width: 1199px) {
    .testimonial-section-4-slider {
      &::before,
      &::after {
        width: 200px;
      }
    }
    &.app-testimonial-section {
      .testimonial-btns {
        a {
          padding: 12px 34px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    &.app-testimonial-section {
      .testimonial-btns {
        a {
          padding: 12px 17px;
          h4 {
            font-size: 18px;
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 70px 0 60px;
    .faq-section-4-title h2,
    .testimonial-section-4-title h2 {
      font-size: 32px;
      line-height: 45px;
    }
    .testimonial-section-4-slider {
      &::before,
      &::after {
        width: 100px;
      }
    }
    .testimonial-section-4-title {
      margin-bottom: 40px;
    }
    .testimonial-section-4.app-testimonial-section {
      padding-top: 70px;
    }
  }
  @media screen and (max-width: 575px) {
    &.app-testimonial-section {
      .testimonial-btns {
        a {
          margin-bottom: 20px;
        }
      }
    }
    &.app-testimonial-section {
      .testimonial-btns {
        max-width: 225px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .testimonial-section-4-title {
      h3 {
        margin-bottom: 10px;
      }

      h2 {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;

export default BusinessTestimonialsStyle;
