import styled from "styled-components";

import BgImg from "../../../assets/images/crypto/download-wallet-bg.png";

const DownloadWalletStyle = styled.section`
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .download-wallet-overlay {
    background: rgba(16, 23, 34, 0.5);
    padding-top: 131px;
    padding-bottom: 140px;
    height: 100%;
  }
  .download-wallet-btns {
    max-width: 410px;
    width: 100%;
    text-align: center;
    margin-right: auto;
    margin-top: 48px;
    position: relative;
    z-index: 3;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.whiteColor}1a;
      backdrop-filter: blur(5px);
      border-radius: 15px;
      padding: 7px 24px;
      max-width: 190px;
      width: 190px;
      margin: auto;
      h5 {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;
        font-weight: 700;
        margin-bottom: 0px;
        color: ${({ theme }) => theme.colors.whiteColor};
        span {
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
  .os-btns {
    max-width: 260px;
    max-height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .os-btn {
      border: 2px solid ${({ theme }) => theme.colors.whiteColor}0d;
      border-radius: 30px;
      padding: 10px;
      min-height: 129px;
      min-width: 129px;
      max-height: 129px;
      max-width: 129px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .os-btn-inner {
        background: ${({ theme }) => theme.colors.whiteColor}0d;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 85%;
        width: 85%;
        position: absolute;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .os-btns .os-btn {
      min-height: 125px;
      min-width: 125px;
      max-height: 125px;
      max-width: 125px;
      border-radius: 20px;
      .os-btn-inner {
        border-radius: 20px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .os-btns .os-btn {
      min-height: 103px;
      min-width: 103px;
      max-height: 103px;
      max-width: 103px;
      border-radius: 18px;
      .os-btn-inner {
        border-radius: 18px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .download-wallet-btns {
      a {
        padding: 7px 12px;
        max-width: 170px;
      }
    }
    .download-wallet-list ul li {
      width: 25%;
    }
    .os-btns .os-btn {
      min-height: 74px;
      min-width: 74px;
      max-height: 74px;
      max-width: 74px;
    }
  }
  @media screen and (max-width: 767px) {
    .download-wallet-overlay {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .download-wallet-list ul li {
      width: 33.33%;
    }
    .os-btns {
      margin-top: 50px;
    }
    .os-btns .os-btn {
      min-width: 106px;
      min-height: 106px;
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 575px) {
    .download-wallet-overlay {
      .section-title {
        text-align: center;
      }
    }
    .os-btns {
      margin: auto;
      margin-top: 50px;
    }
    .download-wallet-btns {
      margin: auto;
      margin-top: 40px;
      margin-bottom: -20px;
      a {
        margin-bottom: 20px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .download-wallet-list ul li {
      width: 50%;
    }
  }
`;

export default DownloadWalletStyle;
