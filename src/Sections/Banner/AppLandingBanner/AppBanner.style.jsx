import styled from "styled-components";

import HoogleImg from "../../../assets/images/icons/hoogle-icon.svg";

const AppBannerStyleWrapper = styled.section`
  padding-top: 190px;
  position: relative;
  overflow: hidden;
  .app-hero-content {
    position: relative;
    z-index: 1;
    p {
      font-size: 18px;
      line-height: 36px;
    }
    .hero-content-button {
      .bg-blue-btn {
        height: 60px;
        width: 220px;
        padding: 14px 30px;
      }
    }
  }
  .app-landing-banner-img {
    position: relative;
    z-index: 2;
    transition: 0.3s;
    img {
      transition: 0.3s;
    }
  }

  .app-banner-text-effect {
    margin-bottom: 31px;
    p {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .badge {
        line-height: 14px;
        color: ${({ theme }) => theme.colors.whiteColor};
        padding: 8px 11.5px;
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        background: ${({ theme }) => theme.colors.badgeColor};
        border-radius: 15px;
      }
      .cd-words-wrapper {
        width: 100% !important;
        margin-left: 10px;
      }
      b {
        color: ${({ theme }) => theme.colors.title};
        font-weight: 500;
        font-size: 18px;
        line-height: 36px;
        img {
          margin-left: 10px;
        }
      }
    }
  }

  .app-banner-shape1 {
    position: absolute;
    top: 0px;
    right: 12%;
    z-index: 0;
  }

  .app-banner-shape2 {
    position: absolute;
    bottom: -84px;
    left: 10%;
    z-index: 0;
  }

  &.hero-section2 {
    min-height: 681px;
    padding-top: 245px;
  }
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

  @media screen and (max-width: 1199px) {
    .hero-content2-text {
      & h2 {
        font-size: 40px;
        line-height: 40px;
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
  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .hero-content {
      text-align: center;

      .new-hoogle {
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .app-hero-content {
      margin-top: -40px;
    }
    .app-landing-banner-img {
      margin-top: 40px;
    }
    .app-banner-text-effect {
      p {
        justify-content: center;
        .cd-words-wrapper {
          width: auto !important;
          min-width: max-content;
        }
      }
    }
    &.hero-section2 {
      padding-top: 180px;
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
    .app-hero-content {
      margin-top: 0px;
    }
    &.hero-section2 {
      padding-top: 130px;
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
    .app-hero-content {
      p {
        font-size: 14px;
        line-height: 30px;
        max-width: 350px;
        margin: auto;
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
  }
  @media screen and (max-width: 425px) {
    .app-banner-text-effect {
      p {
        b {
          font-size: 13px;
        }
      }
    }
    .new-hoogle p {
      font-size: 16px;
    }
  }
`;

export default AppBannerStyleWrapper;
