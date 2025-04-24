import styled from "styled-components";

const FinanceBannerStyle = styled.section`
  .v6-body-bg {
    // background: ${({ theme }) => theme.colors.v6BG};
    background: transparent;
    padding-bottom: 302px;
  }
  background: ${({ theme }) => theme.colors.hero6Bg};
  margin-bottom: 140px;
  position: relative;
  overflow: hidden;
  .container {
    position: relative;
    padding-top: 247px;
    padding-bottom: 212px;
    .banner-vector-line1 {
      position: absolute;
      height: 40%;
      top: -32px;
      right: 22.2%;
      z-index: 3;

      img {
        height: 100%;
      }
    }

    .banner-vector-line2 {
      position: absolute;
      height: 70%;
      bottom: 3px;
      right: 31%;
      z-index: 0;

      img {
        height: 100%;
      }
    }
  }
  .banner-vector {
    position: absolute;
    overflow-x: 0;
    &1 {
      right: 30%;
      top: 20%;
    }
    &2 {
      left: 44%;
      top: 35%;
    }
    &3 {
      left: 45%;
      bottom: 18%;
    }
    &4 {
      right: 40%;
      top: 56%;
    }
    &5 {
      left: 25%;
      bottom: 13%;
    }
    &6 {
      left: 25%;
      top: 18%;
    }
  }
  .uig-animate-style {
    .banner-title {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 21px;
      text-align: left;
      font-weight: 700;
      span {
        color: ${({ theme }) => theme.colors.primary6};
        margin-top: -11px;
        margin-left: 10px;
        b {
          font-weight: 700;
        }
      }

      &.cd-headline.loading-bar .cd-words-wrapper::after {
        background: ${({ theme }) => theme.colors.primary6} !important;
        bottom: 12px;
        height: 8px;
      }
    }
  }
  .v6-banner-text {
    position: relative;
    z-index: 1;

    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 48px;
    }

    .v6-banner-btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
      flex-wrap: wrap;
    }
  }

  .v6-banner-img-section {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 470px;
    width: 100%;
    margin-left: auto;
    height: 100%;
  }

  .v6-banner-img {
    height: 340px;
    max-height: auto;
    position: relative;
    overflow: hidden;
    border-radius: 30px;
    &::after {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        117.62deg,
        rgba(0, 0, 0, 0) 51.24%,
        #000000 100%
      );
      z-index: 1;
    }
  }

  #staco-h6-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #staco-h6-video-control {
    position: absolute;
    height: 50px;
    width: 50px;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.whiteColor};
    z-index: 2;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primary6Deep};
    .play {
      display: none;
    }
    .pause {
      display: block;
    }
    &.active {
      .play {
        display: block;
      }
      .pause {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    margin-bottom: 80px;

    .container {
      padding-top: 180px;
      padding-bottom: 120px;

      .banner-vector-line1 {
        height: 38%;
        right: 28%;
      }

      .banner-vector-line2 {
        height: 73.5%;
        right: 35.4%;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .container {
      padding-top: 160px;
      padding-bottom: 105px;

      .banner-vector-line1 {
        height: 44%;
        right: 23%;
      }

      .banner-vector-line2 {
        position: absolute;
        height: 69%;
        right: 35.4%;
      }
    }
    .v6-banner-text {
      .banner-title {
        font-size: 38px;
        line-height: 54px;
      }
    }
    .v6-banner-text h2.cd-headline.loading-bar .cd-words-wrapper::after {
      bottom: 0px;
    }
  }

  @media screen and (max-width: 767px) {
    .container {
      .banner-vector-line1,
      .banner-vector-line2 {
        display: none;
      }
    }
    &.banner-vector-line {
      display: none;
    }
    .v6-banner-img-section {
      max-width: 100%;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 480px) {
    .v6-body-bg {
      padding-bottom: 360px;
    }
  }
  @media screen and (max-width: 420px) {
    .v6-banner-text{
      .banner-title{
        font-size: 34px !important;
      }
    }
  }

  @media screen and (max-width: 374px) {
    .v6-body-bg {
      padding-bottom: 400px;
    }
  }

  @media screen and (min-width: 768px) {
    .why-choose-container {
      max-width: 100%;
    }
  }
`;

export default FinanceBannerStyle;
