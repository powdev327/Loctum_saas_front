import styled from "styled-components";

const HappyCustomersStyle = styled.section`
  padding-top: 128px;
  padding-bottom: 130px;
  position: relative;
  z-index: 0;

  .happy-customers-bg {
    position: absolute;
    z-index: -1;
    width: 100%;
    bottom: 0px;
    left: 0px;
    .happy-customers-bg-img {
      width: 100%;
      object-fit: cover;
      height: 1100px;
    }
    .happy-customers-bg-inner {
      position: relative;
      .happy-customers-bg-ball {
        position: absolute;
        &1 {
          top: 2%;
          left: 4%;
        }
        &2 {
          top: -5%;
          right: 8%;
        }
        &3 {
          top: -3.2%;
          right: 3.5%;
        }
      }
    }
  }

  .happy-customers-title {
    h2 {
      font-family: ${({ theme }) => theme.fonts.jost};
    }

    h5 {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.textColor};
      margin-top: 12px;
    }
  }

  .happy-customer-left {
    .happy-customer-rating {
      margin: 43px 0 45px 0;
    }
  }

  .happy-customer-rating {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    li {
      padding: 12px 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 0px 2px 3px ${({ theme }) => theme.colors.blackColor}0d;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  .happy-customer-right {
    position: relative;
    .bg-img {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
  }

  .happy-customer-slider-for {
    .slick-arrow {
      z-index: 1;
      top: unset;
      bottom: 0;
      cursor: pointer;
      &.slick-prev {
        left: unset;
        right: 70px;
      }
      &.slick-next {
        right: 0;
      }
    }

    .slider-counter {
      position: absolute;
      bottom: 7px;
      right: 28px;
      font-size: 15px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.title};
      letter-spacing: 3px;
    }

    .slider-item {
      transition: none !important;
      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 45px;
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 27px;
      }
      .customers-name {
        h5 {
          font-family: ${({ theme }) => theme.fonts.dmSans};
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
        }

        h6 {
          font-family: ${({ theme }) => theme.fonts.dmSans};
          font-size: 15px;
          font-weight: 400;
          line-height: 30px;
          color: ${({ theme }) => theme.colors.textColor};
        }
      }
    }
  }

  .happy-customer-slider-nav {
    .slick-list {
      padding: 0 !important;
    }

    .slick-track {
      width: 100% !important;
      height: 100%;
      transform: translate3d(0px, 0px, 0px) !important;
      display: grid;
      align-items: center;
      grid-template-areas:
        "item1 item1"
        "item2 item3"
        "item4 item4";
      gap: 20px;

      .slick-slide {
        &:nth-child(1) {
          grid-area: item1;
          margin: 0 auto;
        }
        &:nth-child(2) {
          grid-area: item2;
          margin: 0 auto;
        }
        &:nth-child(3) {
          grid-area: item3;
          margin: 0 auto;
        }
        &:nth-child(4) {
          grid-area: item4;
          margin: 0 auto;
        }
      }
    }

    .slider-item {
      cursor: pointer;

      .slider-img {
        width: 102px;
        height: 102px;
        border-radius: 50%;
        // background: conic-gradient(#111111 -20deg, #0000001A 3.6deg);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 0;
        overflow: hidden;
        &::before {
          position: absolute;
          z-index: -1;
          content: "";
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.bodyBG2};
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          &.img1 {
            background: ${({ theme }) => theme.colors.litepink};
          }
          &.img2 {
            background: ${({ theme }) => theme.colors.offwhite};
          }
          &.img3 {
            background: ${({ theme }) => theme.colors.liteblue};
          }
          &.img4 {
            background: ${({ theme }) => theme.colors.liteviolet};
          }
        }

        .circle-progress {
          position: absolute;
          z-index: -2;
          width: 102px;
          height: 102px;
        }

        .halfclip {
          width: 50%;
          height: 100%;
          right: 0px;
          position: absolute;
          overflow: hidden;
          transform-origin: left center;
        }

        .halfcircle {
          box-sizing: border-box;
          height: 100%;
          right: 0px;
          position: absolute;
          border: solid 25px transparent;
          border-radius: 50%;
        }

        .clipped {
          width: 200%;
        }

        .fixed {
          width: 100%;
          transform: rotate(135deg);
        }
      }
    }

    .slick-current .slider-item {
      .halfclip {
        animation: cliprotate 6.5s steps(2) infinite;
        -webkit-animation: cliprotate 6.5s steps(2) infinite;
      }

      .halfcircle {
        border-top-color: ${({ theme }) => theme.colors.title};
        border-left-color: ${({ theme }) => theme.colors.title};
      }
      .clipped {
        animation: rotate 3.25s linear infinite;
        -webkit-animation: rotate 3.25s linear infinite;
      }
      .fixed {
        animation: showfixed 6.5s steps(2) infinite;
        -webkit-animation: showfixed 6.5s linear infinite;
      }
    }
  }

  @keyframes cliprotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(135deg);
    }
  }

  @keyframes showfixed {
    0% {
      opacity: 0;
    }
    49.9% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1699px) {
    .happy-customers-content {
      .happy-customers-slide-text {
        p {
          min-width: auto;
        }
      }
      .happy-customers-slide-img {
        max-width: 235px;
        height: 235px;
        margin: auto;
        margin-top: 60px;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .happy-customers-content {
      .happy-customers-slide-text {
        ul {
          margin-bottom: 20px;
        }

        p {
          font-size: 19px;
          line-height: 35px;
          margin-bottom: 10px;
        }
      }
    }

    .happy-customers-bg .happy-customers-bg-img {
      height: 1500px;
    }
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 120px;
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0px 120px 0px;

    .happy-customers-title {
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    .happy-customer-slider-for .slider-item p {
      font-size: 18px;
      line-height: 36px;
    }

    .happy-customers-content .happy-customers-slide-text p {
      font-size: 16px;
      line-height: 28px;
    }

    .happy-customers-content .happy-customers-title h5 {
      font-size: 15px;
      line-height: 23px;
    }

    .happy-customers-content .happy-customers-title h2 {
      font-size: 30px;
      line-height: 37px;
    }
    .happy-customers-bg .happy-customers-bg-img {
      height: 1700px;
    }
  }
  @media screen and (max-width: 575px) {
  }
  @media screen and (max-width: 480px) {
    .happy-customers-content {
      .happy-customers-slide-img {
        max-width: 160px;
        height: 160px;
        margin: auto;
        margin-top: 60px;

        ul {
          li {
            height: 70px;
            width: 70px;
            padding: 7px;
          }
        }
      }
    }

    .happy-customers-bg .happy-customers-bg-img {
      height: 2000px;
    }
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 50px;

    .happy-customer-left {
      padding-bottom: 25px;
    }

    .happy-customers-bg .happy-customers-bg-img {
      height: 2200px;
    }
  }
`;

export default HappyCustomersStyle;
