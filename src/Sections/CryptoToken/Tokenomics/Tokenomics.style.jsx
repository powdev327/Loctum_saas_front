import styled from "styled-components";

import BgImg from "../../../assets/images/crypto-token/grain-texture.png";

const TokenomicsStyle = styled.section`
  padding-top: 140px;
  .tokenomics-card {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    border-radius: 30px;
    .overlay {
      background: url(${BgImg});
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 121px 100px 136px 100px;
      .shape {
        position: absolute;
        top: 0px;
        left: 15%;
        z-index: 0;
      }
    }
  }
  .tokenomics-content {
    position: relative;
    z-index: 2;
    h2 {
      font-family: ${({ theme }) => theme.fonts.quantico};
      font-weight: 700;
      font-size: 60px;
      line-height: 80px;
      text-align: center;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 51px;
    }
  }

  .tokenomics-progress-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 5px;

    .tokenomics-progress {
      .tokenomics-progress-bg {
        height: 60px;
        overflow: hidden;
        margin-bottom: 26px;
      }
      .tokenomics-progress-text {
        h3 {
          font-family: ${({ theme }) => theme.fonts.quantico};
          line-height: 100%;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.whiteColor};
          margin-bottom: 0px;
        }
        p {
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.whiteColor};
          margin-bottom: 0px;
        }
      }
      &.community {
        width: 46%;
        .tokenomics-progress-bg {
          background: #bfff0a;
          opacity: 0.8;
          border-radius: 30px 0px 0px 30px;
        }
      }
      &.team {
        width: 34%;
        .tokenomics-progress-bg {
          background: #ff7bca;
          opacity: 0.8;
          border-radius: 0px;
        }
      }
      &.investor {
        width: 12%;
        .tokenomics-progress-bg {
          background: #adffeb;
          opacity: 0.8;
          border-radius: 0px;
        }
      }
      &.advisors {
        width: 8%;
        .tokenomics-progress-bg {
          background: #ade5ff;
          opacity: 0.8;
          border-radius: 0px 30px 30px 0px;
        }
      }
    }
  }

  /*-- tokenomics-list section start --*/
  .tokenomics-list {
    ul {
      padding: 0px;
      margin: 0px;
      list-style: none;
      li {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${({ theme }) => theme.colors.whiteColor}1f;
        span {
          font-weight: 700;
          line-height: 167%;
          color: ${({ theme }) => theme.colors.whiteColor}cc;
          text-transform: uppercase;
        }
        h5 {
          font-family: ${({ theme }) => theme.fonts.quantico};
          font-weight: 700;
          text-transform: uppercase;
          line-height: 167%;
          color: ${({ theme }) => theme.colors.whiteColor};
          margin-bottom: 0px;
          span {
            color: #bffe0b;
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 100px;
    .tokenomics-content {
      h2 {
        font-size: 45px;
        margin-bottom: 30px;
      }
    }
    .tokenomics-card {
      .overlay {
        padding: 50px 40px;
      }
    }

    .tokenomics-progress-section {
      .tokenomics-progress {
        &.community {
          width: 35%;
        }
        &.team {
          width: 28%;
        }
        &.investor {
          width: 22%;
        }
        &.advisors {
          width: 15%;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 575px) {
    .tokenomics-content {
      h2 {
        font-size: 32px;
      }
    }
    .tokenomics-progress-section {
      flex-wrap: wrap;
      .tokenomics-progress {
        width: 100% !important;
        margin-bottom: 20px;
        .tokenomics-progress-bg {
          height: 30px;
          border-radius: 8px !important;
          margin-bottom: 10px;
        }
        &.community {
          .tokenomics-progress-bg {
            width: 46%;
          }
        }
        &.team {
          .tokenomics-progress-bg {
            width: 34%;
          }
        }
        &.investor {
          .tokenomics-progress-bg {
            width: 12%;
          }
        }
        &.advisors {
          .tokenomics-progress-bg {
            width: 8%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    .tokenomics-card {
      .overlay {
        padding: 30px;
      }
    }
    .tokenomics-list {
      ul {
        li {
          height: 70px;
          span {
            font-size: 14px;
          }
          h5 {
            font-size: 15px;
          }
        }
      }
    }
  }
`;

export default TokenomicsStyle;
