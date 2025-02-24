import styled from "styled-components";

const CryptoAssetStyle = styled.section`
  margin-top: -84px;
  padding-bottom: 94px;
  .crypto-assets-box {
    background: #101722;
    border-radius: 30px;
    padding: 100px;
    position: relative;
    height: 440px;
    overflow: hidden;
    .blur-img {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 0;
      height: 100%;
    }
    .dots-bg {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 90%;
      z-index: 1;
    }
    .coin-bg {
      position: absolute;
      left: 100px;
      top: 21px;
      height: 90%;
      width: 80%;
      z-index: 2;
    }
    h3 {
      color: ${({ theme }) => theme.colors.whiteColor};
      position: relative;
      z-index: 3;
      padding-left: 68px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      line-height: 36px;
      font-weight: 700 !important;
      font-size: 30px !important;
      line-height: 36px !important;
      &.cd-headline.slide {
        .cd-words-wrapper {
          width: auto !important;
          padding: 0px !important;
        }
      }
      b {
        font-weight: 700 !important;
      }
      &::before {
        content: "";
        height: 40px;
        width: 40px;
        margin-right: 28px;
        background: #9fe870;
        border-radius: 50%;
        position: absolute;
        left: 0px;
        top: 0px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    margin-top: 0px;
    .crypto-assets-box {
      padding: 50px;
      height: 255px;
    }
  }
  @media screen and (max-width: 767px) {
    .crypto-assets-box h3 {
      font-size: 24px !important;
    }
    padding-bottom: 80px;
    margin-top: -100px;
  }
  @media screen and (max-width: 480px) {
    .crypto-assets-box h3::before {
      height: 20px;
      width: 20px;
    }

    .crypto-assets-box {
      h3 {
        padding-left: 30px;
        font-size: 18px !important;

        &::before {
          top: 8px;
        }
      }
      .coin-bg {
        left: 50px;
      }
    }
    .crypto-assets-box {
      padding: 25px;
      height: 200px;
    }
  }
`;

export default CryptoAssetStyle;
