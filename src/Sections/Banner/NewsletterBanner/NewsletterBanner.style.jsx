import styled from "styled-components";

import HoogleImg from "../../../assets/images/icons/hoogle-icon.svg";

const NewsletterBannerStyle = styled.section`
  /*-- Hero-Section2 --*/
  min-height: 681px;
  padding-top: 245px;
  .new-hoogle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 9px;
    margin-bottom: 27px;
    span {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-weight: 700;
      line-height: 14px;
      background: ${({ theme }) => theme.colors.badgeColor};
      border-radius: 15px;
      color: ${({ theme }) => theme.colors.whiteColor};
      padding: 8px 12px;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.title};
      margin-top: 0px;
      position: relative;

      &:after {
        content: url(${HoogleImg});
        position: absolute;
        right: -20px;
        top: -14px;
        animation: badgeAnimate 2s infinite linear;
      }
    }
  }
  .hero-content2-text {
    .banner-title {
      margin-bottom: 16px;
      line-height: 1.3;
      & .hero-badge {
        background: ${({ theme }) => theme.colors.badgeColor2};
        border-radius: 0px 20px 0px 0px;
        margin-left: 7px;
      }
    }
    & ul {
      padding: 0;
      list-style: none;
      margin-bottom: 49px;
      & li {
        font-weight: 900;
        line-height: 36px;
        color: ${({ theme }) => theme.colors.title};
        svg {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
  }
  .hero2-img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    .hero2-image1 {
      position: absolute;
      left: 20px;
      top: -56px;
      background: ${({ theme }) => theme.colors.heroimg1Bg};
      border-radius: 85px 85px 0px 85px;
      padding: 17px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }
    .hero2-image2 {
      position: absolute;
      left: 50px;
      top: 35%;
      background: ${({ theme }) => theme.colors.badgeColor};
      border-radius: 85px 85px 0px 85px;
      transform: rotate(-75deg);
      padding: 8px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        transform: rotate(75deg);
      }
    }
    .hero2-image3 {
      position: absolute;
      top: -50px;
      left: 60%;
      animation: jumpingDown 4.5s infinite;
    }
    .hero2-image4 {
      position: absolute;
      bottom: 100px;
      left: 100px;
      animation: jumpingUp 5s infinite;
    }
  }

  /*-- hero-section end --*/
  &.newslater {
    padding-top: 230px;
    margin-bottom: 110px;

    .new-hoogle {
      max-width: 285px;
    }
    .banner-title {
      margin-bottom: 14px;
      font-weight: 700;
      font-size: 60px;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.title};
      .cd-words-wrapper {
        padding: 0px;
        &::after {
          display: none;
        }
      }
      .animation-text b {
        font-family: ${({ theme }) => theme.fonts.caveat};
        background: linear-gradient(180deg, #000000 0%, #0095ff 84.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-size: 100px;
        line-height: 105%;
        padding-right: 15px;
      }
    }
    p {
      font-size: 18px;
      line-height: 36px;
      margin-bottom: 48px;
      color: ${({ theme }) => theme.colors.title};
      max-width: 532px;
      width: 100%;
    }
  }
  .hero-content-button {
    &.newslater {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      max-width: 420px;
      .bg-blue-btn {
        width: 220px;
        height: 60px;
        padding: 15px 46px;
      }
      .bg-white-btn {
        width: 170px;
        height: 60px;
        border: 2px solid ${({ theme }) => theme.colors.blackColor}1a;
      }
    }
  }

  .get-demo-btn {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.badgeColor2};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 120px !important;
      height: 120px !important;
      animation: rotateImg 15s infinite linear;
    }
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        transition: 0.3s;
      }
    }
    &:hover {
      .icon img {
        transform: rotate(45deg);
      }
    }
  }

  @keyframes rotateImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 1199px) {
    &.newslater {
      min-height: auto;
      padding-top: 170px;
      margin-bottom: 30px;
      .new-hoogle {
        margin-bottom: 10px;
      }
      .banner-title {
        font-size: 46px;
        .animation-text {
          b {
            font-size: 70px;
          }
        }
      }
      p {
        font-size: 16px;
        margin-bottom: 30px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 180px;
    &.newslater {
      .banner-title {
        text-align: center;
      }
      .new-hoogle {
        margin: auto;
        margin-bottom: 10px;
      }
      p {
        margin: auto;
        margin-bottom: 30px;
        max-width: 460px;
      }
    }
    .hero-content-button {
      &.newslater {
        margin: auto;
      }
    }
    .hero2-img {
      justify-content: center;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 130px;
    .hero-section {
      .shape-img {
        &.img-2 {
          bottom: 0;
          left: -15px;
          max-width: 190px;
        }

        &.img-3 {
          bottom: 0px;
          right: -30px;
          max-width: 200px;
        }
      }
    }
    &.newslater {
      padding-top: 150px;
    }
  }
  @media screen and (max-width: 575px) {
    &.newslater {
      .banner-title {
        font-size: 34px;
        .animation-text b {
          font-size: 50px;
        }
      }
    }
  }
`;

export default NewsletterBannerStyle;
