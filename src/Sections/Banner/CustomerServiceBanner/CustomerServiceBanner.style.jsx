import styled from "styled-components";

import HoggleImg from "../../../assets/images/icons/hoogle-icon.svg";

const CustomerServiceBannerStyle = styled.section`
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
        content: url(${HoggleImg});
        position: absolute;
        right: -20px;
        top: -14px;
        animation: badgeAnimate 2s infinite linear;
      }
    }
  }
  .hero-content2-text {
    .banner-title {
      margin-bottom: 21px;
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
      z-index: 1;
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
      z-index: 1;
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
      z-index: 1;
      top: -50px;
      left: 60%;
      animation: jumpingDown 4.5s infinite;
    }
    .hero2-image4 {
      position: absolute;
      z-index: 1;
      bottom: 100px;
      left: 100px;
      animation: jumpingUp 5s infinite;
    }
  }
  /*-- hero-section end --*/

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
    .hero-content2-text {
      .banner-title {
        font-size: 54px;
      }
    }
    .hero2-img {
      .hero2-image1 {
        padding: 12px;
        height: 120px;
        width: 120px;
      }

      .hero2-image2 {
        left: 0px;
      }

      .hero2-image4 {
        left: 0px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 180px;
    &.newslater {
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
    .hero-content {
      text-align: center;

      .new-hoogle {
        justify-content: center;
      }
    }
    .hero2-img {
      max-width: 500px;
      margin: auto;
      margin-top: 60px;
      .hero2-image2 {
        left: 0px;
      }
      .hero2-image4 {
        left: 0px;
      }

      .hero2-image1 {
        left: 25%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 130px;
    &.newslater {
      padding-top: 150px;
    }
    .hero-content2-text {
      ul {
        margin-bottom: 40px;
        margin-top: 25px;
      }
      h2 {
        font-size: 40px;
        line-height: 60px;
        margin-bottom: 0px;
      }
    }
    .hero2-img {
      .hero2-image1 {
        left: 0%;
      }

      .hero2-image2 {
        left: 0%;
      }

      .hero2-image4 {
        left: 0%;
      }
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
    .hero-content2-text {
      & h2 {
        font-size: 32px;
      }

      & ul li {
        font-size: 13px;
      }
    }
    .hero2-img {
      .hero2-image1 {
        height: 80px;
        width: 80px;
      }

      .hero2-image2 {
        height: 50px;
        width: 50px;
      }

      .hero2-image4 {
        height: 30px;
        width: 30px;
        bottom: 20px;
      }
    }
    .hero-badge {
      &::before {
        right: 0px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .new-hoogle p {
      font-size: 16px;
    }
  }
`;

export default CustomerServiceBannerStyle;
