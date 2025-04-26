import styled from "styled-components";

import BgImg from "../../../assets/images/defi/defi-safe-platform-bg.png";

const DefiSafePlatformStyle = styled.section`
  margin-top: 102px;
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .overlay {
    background: linear-gradient(
      180deg,
      #0d1014 3.12%,
      rgba(13, 16, 20, 0.6) 48.96%,
      #0d1014 95.83%
    );
    padding-bottom: 55px;
    position: relative;
  }

  .defi-statistic-section {
    padding-top: 38px;
    padding-bottom: 133px;
  }

  .defi-statistic-card {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.10) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    //    border-image: linear-gradient(to right, #37EA8E, rgba(55, 234, 142, 0)) 30;
    border-color: #141f1e;
    border-width: 1px;
    border-style: solid;
    border-radius: 90px;
    overflow: hidden;
    padding: 40px 44px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
    }
    p {
      font-size: 18px;
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  .number-diy {
    display: flex;
    gap: 5px;
    .counter-text{
      margin-top: 5px;
    }
  }

  .CountUp-module_mainContainer__515y8 {
    &::before {
      background: transparent;
    }
  }

  .defi-safe-platform-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 60px;
  }
  .defi-safe-platform-img {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(13, 16, 20, 0) 100%
    );
    border-radius: 50px;
    margin-right: 19px;
    max-width: 100px;
    width: 100%;
    height: 217px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 20px;
  }
  .defi-safe-platform-text {
    h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 26px;
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor}cc;
      margin-bottom: 0px;
    }
  }
  .defi-safe-platform-shape {
    .galaxy1 {
      position: absolute;
      right: 15%;
      top: 30%;
    }
    .galaxy2 {
      position: absolute;
      bottom: -424px;
      left: 0px;
    }
    .rocket {
      position: absolute;
      bottom: 20%;
      left: 40%;
    }
  }

  @media screen and (max-width: 991px) {
    .defi-safe-platform-img {
      max-width: 80px;
    }
    .overlay {
      padding-bottom: 0px;
    }
    .defi-safe-platform-content {
      margin-bottom: 30px;
    }
    .defi-statistic-section {
      padding-bottom: 70px;
      padding-top: 0px;
    }
    .defi-statistic-card {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 80px;
    .defi-safe-platform-shape {
      .galaxy2 {
        bottom: -200px;
        max-width: 300px;
      }
      .rocket {
        max-width: 150px;
      }
    }

    .defi-statistic-card {
      padding: 30px;
      h2 {
        font-size: 32px;
      }
    }
    .defi-statistic-section {
      padding-bottom: 40px;
    }
  }
`;

export default DefiSafePlatformStyle;
