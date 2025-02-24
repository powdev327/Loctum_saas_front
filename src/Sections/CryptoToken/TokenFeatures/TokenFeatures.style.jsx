import styled from "styled-components";

import CardBgImg1 from "../../../assets/images/crypto-token/card-bg1.png";
import CardBgImg2 from "../../../assets/images/crypto-token/card-bg2.png";
import CardBgImg3 from "../../../assets/images/crypto-token/card-bg3.png";
import CheckImg from "../../../assets/images/crypto-token/check-black.svg";

const TokenFeaturesStyle = styled.section`
  position: relative;

  .text-with-img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    flex-wrap: wrap;
    font-family: ${({ theme }) => theme.fonts.quantico};
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 913px;
    text-transform: uppercase;
    width: 100%;
    margin: auto;
    margin-bottom: 110px;

    .text {
      width: max-content;
      cursor: pointer;
      position: relative;
      z-index: 1;

      &.add-img {
        opacity: 50%;
        transition: 0.3s;

        &::after {
          content: "";
          padding: 2px 0px;
          transition: 0.3s;
          width: 0%;
          background: linear-gradient(90deg, #d02ebe 0%, #bfff0a 100%);
          border-radius: 20px;
          position: absolute;
          bottom: -8px;
          left: 0px;
        }

        img {
          display: none;
          margin-top: -10px;
        }
        &:hover {
          opacity: 100%;
          z-index: 2;

          &::after {
            width: 100%;
          }
        }
        span {
          &:hover {
            + img {
              display: block;
              position: absolute !important;
              top: -70%;
              left: auto;
              min-width: 256px;
              z-index: -1;
              opacity: 1;
              animation: moveImg 0.5s ease-in-out;
            }
          }
        }
      }
    }
  }

  .crypto-token-features-cards {
    .stack__card {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;
      position: sticky;
      top: 100px;
      box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1), 0 -1px 2px rgba(0, 0, 0, 0.25);
      margin-top: -20px;
      border-radius: 30px;
      overflow: hidden;

      .card-bg {
        height: 100%;
        width: 100%;
      }
      .title {
        h4 {
          text-transform: uppercase;
        }
      }
    }

    .stack__card:nth-child(1) {
      background: #bfff0a;
      .card-bg {
        background: url(${CardBgImg1});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        .overlay {
          background: linear-gradient(
            180deg,
            #bfff0a 0%,
            rgba(191, 255, 10, 0.8) 35.2%,
            rgba(191, 255, 10, 0) 100%
          );
          height: 100%;
          padding: 80px 70px;
          width: 100%;
        }
      }
    }

    .stack__card:nth-child(2) {
      background: #ff7bca;
      .card-bg {
        background: url(${CardBgImg2});
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        padding: 80px 70px;
      }
    }

    .stack__card:nth-child(3) {
      background: #adffeb;
      .card-bg {
        background: url(${CardBgImg3});
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        padding: 80px 70px;
      }
    }
  }

  .crypto-token-features-text {
    h2 {
      margin-bottom: 32px;
      font-family: ${({ theme }) => theme.fonts.quantico};
      font-size: 50px;
      line-height: 120%;
      text-transform: uppercase;
    }
    p {
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.title};
    }
    a {
      color: ${({ theme }) => theme.colors.title};
      transition: 0.3s;
      font-weight: 700;
      img {
        transition: 0.3s;
        margin-left: 14px;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
    ul {
      margin-top: 21px;
      list-style: url(${CheckImg});
      li {
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }

  .super-gainers-info-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px -15px;
    width: 100%;
    padding-top: 32px;
    .super-gainers-info {
      width: 50%;
      padding: 15px;
      p {
        text-transform: uppercase;
        min-width: max-content;
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }

  .crypto-token-features-img {
    position: absolute;
    bottom: 0px;
  }
  .features-img-inner {
    position: relative;
    .setting-icon {
      position: absolute;
      top: 25px;
      left: 25px;
      animation: rotate360 5s linear infinite;
      -webkit-animation: rotate360 5s linear infinite;
    }
  }

  @keyframes moveImg {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1199px) {
    .text-with-img {
      font-size: 45px;
    }
  }
  @media screen and (max-width: 991px) {
    .text-with-img {
      font-size: 35px;
    }
    .crypto-token-features-text {
      h2 {
        font-size: 30px;
      }
    }
    .crypto-token-features-img {
      left: 0px;
    }
    .crypto-token-features-cards {
      .stack__card {
        .title {
          h4 {
            font-size: 18px;
          }
        }
      }
    }
    .crypto-token-features-cards {
      .stack__card {
        height: 540px;
        &:nth-child(1) {
          .card-bg {
            .overlay {
              padding: 40px;
            }
          }
        }
        &:nth-child(2),
        &:nth-child(3) {
          .card-bg {
            padding: 40px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .text-with-img {
      margin-bottom: 90px;
    }
    .crypto-token-features-cards {
      .stack__card {
        height: 460px;
      }
    }
    .crypto-token-features-img {
      z-index: -1;
      opacity: 0.7;
    }
    .super-gainers-info-section{
      padding-top: 0;
    }
    .crypto-token-features-text {
      a{
        transform: translateY(-30px);
      }
    }
  }
  @media screen and (max-width: 575px) {
    .text-with-img {
      font-size: 28px;
    }
    .crypto-token-features-cards {
      .stack__card {
        height: 500px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .text-with-img {
      font-size: 20px;
    }
    .crypto-token-features-text {
      h4 {
        font-size: 14px;
      }
      h2 {
        font-size: 22px;
      }
    }
  }
`;

export default TokenFeaturesStyle;
