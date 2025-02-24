import styled from "styled-components";

import ArrowImg from "../../../assets/images/accounting/slider-arrow-right.svg";

const OfferingStyleWrapper = styled.section`
  background: #0d333f;
  padding-top: 112px;
  padding-bottom: 120px;
  .we-offering-text {
    max-width: 500px;
    padding-right: 30px;
  }

  .we-offering-slider-nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    &.slick-slider {
      width: 100%;
      .slick-list {
        width: 100%;
        padding: 0px !important;
      }
      .slick-track {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100% !important;
        transform: translate3d(0px, 0px, 0px) !important;
        .slick-slide {
          width: 100% !important;
          border-bottom: 1px solid ${({ theme }) => theme.colors.whiteColor}1a;
          padding: 30px 0px;
          &.slick-current {
            color: ${({ theme }) => theme.colors.whiteColor};
            padding-left: 37px;
            position: relative;

            &::before {
              content: url(${ArrowImg});
              position: absolute;
              left: 0px;
              top: 37%;
            }
            &::after {
              position: absolute;
              bottom: -2px;
              left: 0px;
              content: "";
              height: 2px;
              width: 30%;
              background: rgba(170, 239, 105, 0.2);
              animation: lineProgress 6.9s linear infinite;
              -webkit-animation: lineProgress 6.9s linear infinite;
            }
            .slick-btn{
              
            }
          }
        }
      }
    }

    .slick-btn {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.whiteColor}63;
      width: 100% !important;
      cursor: pointer;
    }
  }

  .we-offering-slider-content {
    max-width: 570px;
  }
  .we-offering-slide-bg-img {
    position: relative;
    z-index: 1;
  }
  .we-offering-slider {
    position: relative;
    margin-top: -250px;
    z-index: 2;
  }
  .we-offering-slide-img {
    height: 220px;
    width: 230px;
    margin-left: 30px;
    margin-bottom: 90px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .we-offering-slide-item-text {
    h4 {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 30px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 20px;
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor};
    }

    ul {
      li {
        line-height: 30px;
        color: ${({ theme }) => theme.colors.whiteColor};
        padding-left: 15px;
        position: relative;
        margin-top: 0;
        &::before {
          content: "";
          height: 6px;
          width: 6px;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.v8Title};
          position: absolute;
          left: 0px;
          top: 12px;
        }
      }
    }
  }
  .we-offering-slide-btns {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 16px;
    button {
      background: ${({ theme }) => theme.colors.whiteColor}1a;
      border-radius: 20px;
      padding: 8px 15px;
      color: ${({ theme }) => theme.colors.whiteColor};
      svg {
        color: ${({ theme }) => theme.colors.v8Title};
        margin-right: 9px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 100px;
    padding-bottom: 80px;
    .we-offering-slider-nav .slick-btn {
      font-size: 21px;
      padding: 22px 0px;
    }
    .we-offering-slider-nav .slick-btn {
      font-size: 21px;
      padding: 22px 0px;
    }
    .we-offering-slide-item-text h4 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .we-offering-slider-nav.slick-slider .slick-track .slick-slide {
      padding: 0px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .we-offering-slider {
      margin-top: -190px;
    }
    .we-offering-slide-img {
      height: 170px;
      width: 180px;
      margin-bottom: 60px;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 72px;
    .we-offering-text {
      padding-right: 0px;
      max-width: 100%;
    }
    .we-offering-slider-nav .slick-btn {
      font-size: 18px;
      padding: 16px 0px;
    }
    .we-offering-slider-content {
      margin-top: 50px;
      max-width: 100%;
    }
    .we-offering-slider-nav .slick-btn {
      font-size: 18px;
      padding: 16px 0px;
    }
    .we-offering-slider-content {
      margin-top: 50px;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    .we-offering-slider {
      margin-top: -185px;
    }
    .we-offering-slide-img {
      height: 170px;
      width: 180px;
      margin-bottom: 60px;
      margin-left: 15px;
    }
  }
`;

export default OfferingStyleWrapper;
