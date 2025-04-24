import styled from "styled-components";

const CryptoTwoBannerStyle = styled.section`
  padding-top: 203px;
  position: relative;
  .bottom-overlay {
    content: "";
    height: 171px;
    position: absolute;
    bottom: 84px;
    left: 0px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
    z-index: 11;
  }
  .container {
    z-index: auto;
  }
  .crypto2-hero-left {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      background: linear-gradient(
        180deg,
        rgba(69, 65, 254, 0.15) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      height: 700px;
      width: 700px;
      border-radius: 50%;
      position: absolute;
      top: -100px;
      left: -212px;
    }
  }
  .crypto2-hero-img {
    position: relative;
    z-index: 1;
    .coin1 {
      position: absolute;
      top: -50px;
      left: 12%;
      animation: jumpingDown 4.5s infinite;
    }
    .coin2 {
      position: absolute;
      top: -30px;
      right: 33%;
      animation: jumpingUp 5s infinite;
    }
    .coin3 {
      position: absolute;
      top: 140px;
      left: 12%;
      animation: jumpingUp 5s infinite;
    }
  }
  .crypto2-hero-text {
    padding-top: 39px;
    position: relative;
    z-index: 99;
    h1 {
      line-height: 80px;
      margin-bottom: 17px;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 36px;
      max-width: 573px;
      margin-bottom: 48px;
    }
  }
  .crypto2-banner-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 391px;
    width: 100%;
    .os-link {
      filter: brightness(0);
      opacity: 0.4;
      transition: 0.3s;
      &:hover {
        filter: none;
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .crypto2-hero-text {
      h1 {
        font-size: 52px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 180px;
    .bottom-overlay {
      bottom: 0px;
    }
    .crypto2-hero-left::before {
      top: -90px;
      left: -50px;
      height: 400px;
      width: 400px;
    }
    .crypto2-hero-text {
      padding-top: 0px;
      margin-top: -30px;
      h1 {
        font-size: 40px;
        line-height: 150%;
      }
      p {
        margin-bottom: 30px;
        font-size: 16px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .crypto2-hero-img {
      top: 50px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 140px;
    .bottom-overlay {
      bottom: 100px;
    }
    .crypto2-hero-img {
      position: relative;
      z-index: 1;
      max-width: 500px;
      margin: auto;
      text-align: center;
      margin-top: 120px;
    }
    .crypto2-hero-text {
      text-align: center;
      max-width: 430px;
      margin: auto;
    }
  }
  @media screen and (max-width: 575px) {
    .crypto2-hero-left::before {
      width: 350px;
      height: 350px;
    }
    .crypto2-hero-text h1 {
      font-size: 32px;
    }
    .crypto2-banner-links {
      flex-wrap: wrap;
      justify-content: center;
      margin: auto;
      .crypto2-btn {
        width: 100%;
        margin-bottom: 20px;
        a {
          margin: auto;
        }
      }
      a {
        &.os-link {
          width: 30%;
          &:nth-last-child(2) {
            margin-left: auto;
          }
          &:nth-last-child(1) {
            margin-right: auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    .crypto2-hero-left::before {
      width: 300px;
      height: 300px;
    }
    .crypto2-hero-img .coin2 {
      right: 20%;
    }
  }
`;

export default CryptoTwoBannerStyle;
