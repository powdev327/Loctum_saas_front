import styled from "styled-components";

import CryptoTokenBgImg from "../../../assets/images/crypto-token/crypto-token-bg.png";
import GrainTextureImg from "../../../assets/images//crypto-token/grain-texture.png";

const TokenBannerVideoStyle = styled.section`
  .crypto-token-banner {
    .crypto-token-banner-shape {
      position: absolute;
      top: 15px;
      left: 0px;
      width: 100%;
      z-index: 0;
      .ractangle {
        background: linear-gradient(
          90deg,
          rgba(208, 46, 190, 0.3) 0%,
          rgba(108, 211, 108, 0.3) 100%
        );
        width: 100%;
        height: 60px;
        margin-bottom: 20px;
      }
    }
  }
  .crypto-token-banner-inner {
    background: url(${CryptoTokenBgImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    overflow: hidden;

    .overlay {
      background: url(${GrainTextureImg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      padding-top: 251px;
      padding-bottom: 91px;
      height: 100%;
      .container {
        position: relative;
      }
      .masd-grad {
        position: absolute;
        right: -158px;
        top: -100px;
      }
    }
    .bottom-overlay {
      height: 50%;
      width: 100%;
      bottom: 0px;
      position: absolute;
      background: linear-gradient(
        180deg,
        rgba(13, 16, 20, 0) 0%,
        rgba(13, 16, 20, 0.762195) 65.1%,
        #0d1014 85.42%
      );
    }
  }

  .crypto-token-banner-text {
    margin-bottom: 120px;
    position: relative;
    z-index: 1;
    h1 {
      font-size: 100px;
      line-height: 120%;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 45px;
      text-transform: uppercase;
    }
    p {
      font-size: 18px;
      line-height: 200%;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 650px;
      margin-bottom: 58px;
    }
  }

  .crypto-token-banner-ball {
    position: relative;
    position: absolute;
    right: 0px;
    top: -91px;
    z-index: 0;
    img {
      animation: rotate360 8s linear infinite;
      -webkit-animation: rotate360 8s linear infinite;
    }
  }

  /*-- crypto banner card --*/
  .crypto-banner-card {
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 25px 40px;
    h2 {
      font-size: 40px;
      max-height: 70px;
      min-height: 70px;
      padding: 5px 0px;
      line-height: 140%;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 15px 0px;
    }
    p {
      font-size: 18px;
      line-height: 100px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
      position: relative;
      width: max-content;
      &::after {
        content: "";
        height: 11px;
        width: 11px;
        background: #bfff0a;
        border-radius: 50%;
        position: absolute;
        right: -20px;
        top: 45px;
      }
    }
  }

  .crypto-banner-card2 {
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 25px 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    h2 {
      font-size: 40px;
      line-height: 60px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
    }
    p {
      font-size: 18px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
      line-height: 60px;
      position: relative;
      width: max-content;
      padding-left: 25px;
      &::before {
        content: "";
        height: 11px;
        width: 11px;
        background: #bfff0a;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        top: 25px;
      }
    }
  }

  .number-diy {
    display: flex;
    .data {
      font-size: 40px !important;
      line-height: auto;
      color: ${({ theme }) => theme.colors.whiteColor} !important;
      margin-bottom: 0px;
      div {
        width: 30px !important;
        padding: 0px !important;
        span {
          width: 30px !important;
          padding: 0px !important;
          height: auto !important;
        }
      }
    }
  }
  /*-- banner-video-section start --*/

  padding-top: 50px;
  @-webkit-keyframes circle {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    to {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      opacity: 0;
    }
  }

  @keyframes circle {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    to {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      opacity: 0;
    }
  }
  .banner-video-card {
    height: 550px;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    video {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 30px;
    }
    h2 {
      position: relative;
      z-index: 2;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
      font-size: 70px;
      text-transform: uppercase;
      line-height: 117%;
      &.cd-headline {
        span {
          padding: 0px !important;
        }
      }
      .cd-words-wrapper {
        width: 577px !important;
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        margin: auto;
        b {
          font-weight: 700;
          width: 577px !important;
          text-align: center;
          justify-content: center;
          display: flex;
          align-items: center;
          margin: auto;
        }
      }
    }
  }
  /*-- banner-video-section End --*/

  @media screen and (max-width: 1499px) {
    .crypto-token-banner-inner {
      .overlay {
        padding-top: 200px;
      }
    }
    .crypto-token-banner-text {
      margin-bottom: 80px;
      h1 {
        font-size: 90px;
        margin-bottom: 30px;
      }
      p {
        margin-bottom: 40px;
      }
    }
    .crypto-token-banner-inner {
      .overlay {
        .masd-grad {
          right: 0px;
        }
      }
    }
    .crypto-banner-card {
      h2 {
        font-size: 40px;
        margin: 4px 0px;
      }
    }
    .crypto-banner-card2 {
      padding: 19.5px 38px;
    }
  }

  @media screen and (max-width: 1199px) {
    .crypto-token-banner-text {
      h1 {
        font-size: 80px;
      }
    }
    .crypto-banner-card {
      padding: 25px 30px;
      h2 {
        font-size: 30px;
      }
      &2 {
        padding: 15px 30px;
        h2 {
          font-size: 30px;
        }
      }
    }
    .number-diy {
      .data {
        font-size: 30px !important;
        div {
          width: 20px !important;
          span {
            width: 20px !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 0px;
    .crypto-token-banner-inner {
      .overlay {
        padding-top: 180px;
        padding-bottom: 70px;
      }
    }
    .crypto-token-banner-text {
      h1 {
        font-size: 60px;
      }
    }
    .crypto-token-banner-ball {
      max-width: 300px;
      top: 0px;
    }
    .crypto-banner-card {
      margin-bottom: 30px;
    }
    .banner-video-card {
      height: 320px;
      h2 {
        font-size: 45px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .crypto-token-banner-inner {
      .overlay {
        padding-top: 130px;
      }
    }
    .crypto-token-banner-text {
      h1 {
        font-size: 50px;
      }
    }
    .banner-video-card {
      h2 {
        .cd-words-wrapper {
          width: 380px !important;
          b {
            width: 380px !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .crypto-token-banner-text {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 16px;
      }
    }
    .banner-video-card {
      h2 {
        font-size: 32px;
        .cd-words-wrapper {
          width: 300px !important;
          b {
            width: 300px !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .crypto-token-banner-text {
      h1 {
        font-size: 30px;
      }
    }
    .crypto-banner-card {
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 14px;
      }
      &2 {
        h2 {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .banner-video-card {
      height: 250px;
      h2 {
        font-size: 26px;
        .cd-words-wrapper {
          width: 210px !important;
          b {
            width: 210px !important;
          }
        }
      }
    }
  }
`;

export default TokenBannerVideoStyle;
