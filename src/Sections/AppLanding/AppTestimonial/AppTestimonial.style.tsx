import styled from "styled-components";

const AppTestimonialStyle = styled.section`
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
    background-image: url("../images/business/bg-shape.svg");
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

    .slider-container {
      width: calc(295px * 12);
      display: flex;
      align-items: center;
      gap: 20px;
      // animation: testimonial4Slider 35s infinite linear;
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
  &.app-testimonial-section {
    padding: 112px 0px 65px 0px;
    &::before {
      display: none;
    }
    .testimonial-btns {
      max-width: 530px;
      min-height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      a {
        padding: 16px 50px;
        background: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        h4 {
          margin-left: 18px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          margin-bottom: 0px;
          span {
            font-weight: 500;
            font-size: 15px;
            color: ${({ theme }) => theme.colors.textColor};
          }
        }
      }
    }
  }

  .app-testimonial-section-slider {
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
    position: relative;
    cursor: grab;

    &::before {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      left: 0;
      width: 20%;
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
      width: 20%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 234, 239, 0) 0%,
        #ffeaef 100%
      );
    }

    .slider-item {
      flex: 0 0 auto;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 30px;
      padding: 20px 30px;
      h4 {
        font-size: 15px;
        line-height: 24px;
        font-family: ${({ theme }) => theme.fonts.dmSans};
      }
      h5 {
        font-size: 13px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.textColor};
        font-family: ${({ theme }) => theme.fonts.dmSans};
      }
      p {
        font-size: 15px;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.textColor};
      }

      .slider-info {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .slider-reating {
          cursor: pointer;
          background: ${({ theme }) => theme.colors.blackColor}14;
          border-radius: 18px;
          padding: 2.5px 13.5px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            padding-right: 9px;
          }
        }
      }
    }

    .slick-dots {
      position: relative;
      bottom: 0px;
      max-width: 135px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      margin-top: 60px;
      gap: 6px;
      li {
        height: 8px;
        width: 8px;
        padding: 0px;
        button {
          background: ${({ theme }) => theme.colors.blackColor}33;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          opacity: 1;
          color: transparent;
          &:before {
            display: none;
          }
        }
        &.slick-active {
          width: 15px;
          button {
            width: 15px;
            border-radius: 20px;
            background: ${({ theme }) => theme.colors.title};
          }
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    &.app-testimonial-section {
      .testimonial-btns {
        a {
          padding: 12px 34px;
        }
      }
    }
    .testimonial-section-4-slider {
      &::before,
      &::after {
        width: 200px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
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
    &.app-testimonial-section {
      padding-top: 70px;
    }
  }
  @media screen and (max-width: 575px) {
    &.app-testimonial-section {
      .testimonial-btns {
        max-width: 225px;
        a {
          margin-bottom: 20px;
        }
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
`;

export default AppTestimonialStyle;
