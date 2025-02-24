import styled from "styled-components";

import MapImg from "../../../assets/images/bg/map-bg.svg";
import ShapeImg from "../../../assets/images/icons/shape-left.svg";

const BusinessBannerStyle = styled.section`
  background-color: #f8f0e6;
  padding: 200px 0 154px 0;
  position: relative;
  overflow: hidden;
  .marketing-badge {
    padding: 0px 10px 4px 10px;
  }
  .hero-content-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    gap: 18px;
    padding-left: 18px;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 5px;
        font-size: 20px;
      }
      p {
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 0px;
        font-weight: 600;
      }
    }
  }
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 36.5%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bgHero};
    background-image: url(${MapImg});
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 100%;
  }

  .hero-section-4-content {
    .hero-content-text {
      position: relative;
      .title {
        line-height: 1.17;
        margin-bottom: 27px;
      }
      h2,
      p {
        color: ${({ theme }) => theme.colors.title};
      }
      &::before {
        position: absolute;
        content:'';
        top: -15px;
        left: -30px;
        width: 42px;
        height: 40px;
        background-image: url(${ShapeImg});
        background-repeat: no-repeat;
        line-height: 0;
        animation: badgeAnimate 2s infinite ease-in-out;
      }
    }
    .hero-content-list {
      svg {
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }

  .hero-section-4-img {
    position: relative;

    .overlay-item {
      position: absolute;

      &.item-1 {
        top: -36px;
        left: 140px;
      }
      &.item-2 {
        top: 110px;
        left: -48px;
      }

      &.item-3 {
        bottom: -9px;
        right: -46px;
      }

      &.chart {
        top: 50%;
        right: -50px;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 0px 15px 0px 0px;
        padding: 11px 16px;
      }

      &.status {
        bottom: 45px;
        left: -25%;
        .pie_progress {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 130px;
          height: 130px;
          margin: auto 0;
          background-color: transparent;
        }

        .pie_progress__label {
          margin-top: 0px;
        }

        .pie_progress__label h4 {
          color: ${({ theme }) => theme.colors.blackColor};
        }

        .pie_progress__label p {
          margin: 0;
          font-size: 13px;
        }
      }
    }
  }
  /*-- hero-section-4 style end --*/

  @media screen and (max-width: 1199px) {
    .hero-section-4-content {
      .hero-content-text {
        .title {
          font-size: 50px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding: 150px 0px 80px 0px;
    &::before {
      display: none;
    }
    .hero-section-4-content {
      .hero-content-text {
        text-align: center;
        max-width: 480px;
        margin: auto;
        margin-bottom: 30px;
        &::before {
          left: 60px;
        }
      }
    }

    .hero-content-button.v4 {
      text-align: center;
    }
    .hero-content-list {
      &.v4 {
        justify-content: center;
      }
    }

    .hero-section-4-content {
      margin-bottom: 50px;
    }

    .hero-section-4-img {
      margin: auto;
      width: fit-content;
      .overlay-item {
        &.item-2 {
          left: 0px;
        }

        &.status {
          left: 0;

          > img {
            width: 140px;
            height: 140px;
          }

          .pie_progress {
            width: 100px;
            height: 100px;
          }

          .pie_progress__label h4 {
            @include textStyle(24px, 700, 30px);
          }

          .pie_progress__label p {
            @include textStyle(12px, 500, 20px);
          }
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    .hero-section-4-content {
      .hero-content-text {
        &::before {
          left: 24px;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .hero-section-4-content {
      .hero-content-text h2 {
        font-size: 40px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .hero-section-4-content .hero-content-text .title {
      line-height: 1.24;
    }
    .hero-section-4-content .hero-content-text::before {
      top: -22px;
    }
    .hero-section-4-content .hero-content-text::before {
      left: 36px;
    }
  }
`;

export default BusinessBannerStyle;
