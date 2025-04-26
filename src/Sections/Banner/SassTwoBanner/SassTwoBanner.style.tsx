import styled from "styled-components";

const SassTwoBannerStyle = styled.section`
  padding-bottom: 192px;
  position: relative;
  .sass-landing-hero-bg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: clip;
    .bg-inner {
      position: relative;
      img {
        width: 100%;
        min-height: 932px;
      }
    }
    .banner-shape-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 148px;
      left: 0px;
      width: 104%;
      z-index: 0;
      transform: rotate(-11deg);
    }
    .banner-shape {
      background: linear-gradient(
        219.71deg,
        rgba(0, 149, 255, 0.15) -0.06%,
        rgba(255, 255, 255, 0.03) 77.32%
      );
      height: 226px;
      width: 16.66666%;
    }
  }
  .hero-content-list {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .hero-content-list .list-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .hero-content-list .list-item svg {
    font-size: 26px;
    color: ${({ theme }) => theme.colors.whiteColor};
    position: relative;
    top: 0px;
  }
  .hero-content-list .list-item p {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.whiteColor};
  }

  .sass-banner-text {
    position: relative;
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 32px;
      line-height: 120%;
    }
    p {
      font-size: 18px;
      line-height: 36px;
      margin-bottom: 53px;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 534px;
      width: 100%;
    }
  }

  .sass-landing-hero-content {
    padding-top: 281px;
  }
  .sass-banner-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 39px;
    margin-bottom: 41px;
    .view-demo-btn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: 0.3s;
      font-weight: 700;
      font-size: 15px;
      line-height: 26px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      img {
        margin-left: 14px;
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .sass-banner-img {
    position: relative;
    .banner-img {
      position: relative;
      z-index: 1;
      transition: 0.3s;
    }
    .shape2 {
      position: absolute;
      z-index: 0;
      top: 13px;
      left: -56px;
      transition: 0.3s;
    }
    .shape1 {
      position: absolute;
      z-index: 2;
      right: -55px;
      top: 66px;
      transition: 0.3s;
    }
  }

  .sass-landing-banner-shapes {
    width: 100%;
    position: relative;
    .shape1 {
      position: absolute;
      left: 0px;
      bottom: -163px;
      z-index: 3;
      transition: 0.3s;
    }
    .shape2 {
      position: absolute;
      left: 25%;
      bottom: -177px;
      z-index: 3;
    }
    .shape3 {
      position: absolute;
      left: 50%;
      bottom: -190px;
      z-index: 3;
    }
    .shape4 {
      position: absolute;
      right: 25%;
      bottom: -60px;
      z-index: 3;
    }
    .shape5 {
      position: absolute;
      right: -95px;
      bottom: -108px;
      z-index: 3;
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 1199px) {
    .sass-landing-hero-bg {
      .banner-shape-list {
        transform: rotate(-20deg);
        bottom: 148px;
        left: -11px;
        width: 114%;
      }
    }
    .sass-landing-banner-shapes {
      .shape5 {
        right: 0px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .sass-landing-hero-content {
      padding-top: 180px;
    }
    .sass-landing-hero-bg .banner-shape-list {
      transform: rotate(-23deg);
      bottom: 114px;
      left: -42px;
      width: 114%;
    }
    .sass-banner-text {
      margin-bottom: 60px;
      text-align: center;
    }
    .sass-banner-text p {
      margin: auto;
      margin-bottom: 40px;
    }
    .hero-content-list {
      justify-content: center;
    }
    .hero-content-list.v4 {
      justify-content: center;
      margin-bottom: 30px;
    }
    .sass-banner-btn {
      justify-content: center;
    }
  }
  @media screen and (max-width: 767px) {
    .sass-landing-hero-content {
      padding-top: 140px;
    }
    .sass-banner-text {
      margin-bottom: 60px;
      text-align: center;
      p {
        margin: auto;
        margin-bottom: 40px;
      }
    }
    .sass-banner-btn {
      justify-content: center;
    }
    .sass-banner-img {
      text-align: center;
    }
    .sass-banner-img {
      .shape1 {
        right: -20px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    padding-top: 0px;
    .sass-landing-hero-bg {
      .bg-inner {
        img {
          min-height: 110vh;
        }
      }
    }
    .sass-banner-text {
      p {
        font-size: 16px;
      }
    }
    .sass-landing-hero-bg {
      .banner-shape-list {
        bottom: 80px;
        left: -53px;
        width: 127%;
      }
    }
    .sass-banner-img {
      .shape1 {
        right: -20px;
        width: 75px;
      }
    }
    .sass-banner-btn {
      flex-direction: column;
      margin-bottom: 20px;
    }
    .sass-banner-text {
      margin-bottom: -20px;
      h1 {
        font-size: 35px !important;
        margin-bottom: 10px;
      }
    }
  }
`;

export default SassTwoBannerStyle;
