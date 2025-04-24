import styled from "styled-components";

const SassOneBannerStyle = styled.section`
  min-height: 642px;
  background: ${({ theme }) => theme.colors.home5HeroBg};
  padding-bottom: 80px;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
  &::after {
    content: url(../images/sass1/banner-bg-vector.svg);
    position: absolute;
    z-index: -1;
    left: 0px;
    bottom: 40%;
    z-index: 1;
  }
  .index5-hero-content {
    padding-top: 210px;
    position: relative;
    z-index: 11;
    .v5welocme-section {
      height: 36px;
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-radius: 50px;
      background: ${({ theme }) => theme.colors.whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 0px;
      max-width: 210px;
      width: 100%;
      margin: auto;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.title};
      img {
        margin-right: 10px;
        position: relative;
        top: -2px;
      }
    }

    .v5banner-text {
      .banner-title {
        margin-bottom: 28px;
        gap: 18px;
        font-weight: 700;
        font-size: 60px;
        .brack-text {
          display: block;
        }
        .animation-text {
          padding: 0;
          margin: 0 auto !important;
          text-align: center;
          &:after {
            display: none;
          }
        }
        b {
          background: linear-gradient(
            90deg,
            #0095ff 2.79%,
            #0f57e8 57.47%,
            #f7578c 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-weight: 700;
        }
      }
      p {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 18px;
        font-weight: 500;
        line-height: 36px;
        color: ${({ theme }) => theme.colors.title};
        max-width: 569px;
        width: 100%;
        margin: auto;
        text-align: center;
        margin-top: 12px;
        margin-bottom: 38px;
      }
    }

    form {
      max-width: 570px;
      margin: auto;
      height: 60px;
      margin-bottom: 6px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 0px 5px 10px ${({ theme }) => theme.colors.blackColor}1a;
      border-radius: 30px;
      overflow: hidden;
      button {
        height: 50px;
        max-width: 170px;
        width: 100%;
        padding: 0px;
      }
      input {
        height: 100%;
        width: 100%;
        max-width: 350px;
        border: none;
        outline: none;
        padding: 8px 19px;
        background: transparent;
      }
    }
  }

  .index5-hero-img {
    position: relative;
    z-index: 10;
    max-width: 1170px;
    width: 100%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 10%;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      transform: rotateX(40deg);
      transition: 0.5s;
    }
  }
  .index5-scroll-carousel-section {
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      height: 100%;
      width: 20%;
      position: absolute;
      left: 0px;
      bottom: 0px;
      background: linear-gradient(
        90deg,
        #f0f5ff 0%,
        rgba(240, 245, 255, 0) 100%
      );
      z-index: 11;
    }
    &::before {
      content: "";
      height: 100%;
      width: 20%;
      position: absolute;
      right: 0px;
      bottom: 0px;
      background: linear-gradient(
        90deg,
        rgba(240, 245, 255, 0) 0%,
        #f0f5ff 100%
      );
      z-index: 11;
    }
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 33px;
      margin-bottom: 30px;

      &.slide-left {
        justify-content: flex-start;
      }

      &.slide-right {
        justify-content: flex-end;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 28px;
        span {
          min-width: max-content;
        }
        strong {
          font-family: ${({ theme }) => theme.fonts.dmSans};
          font-size: 30px;
          font-weight: 500;
          line-height: 70px;
          color: ${({ theme }) => theme.colors.title};
          min-width: max-content;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    h1,
    .index5-hero-content .v5banner-text .banner-title {
      font-size: 54px;
    }
    .index5-hero-content .v5banner-text h2 {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 17px;
    }
  }

  @media screen and (max-width: 991px) {
    .index5-hero-img {
      min-height: 350px;
    }
  }

  @media screen and (max-width: 767px) {
    .index5-hero-content {
      padding-top: 150px;
    }
    .index5-hero-content .v5banner-text .banner-title {
      font-size: 38px;
    }
    .index5-hero-img {
      min-height: 270px;
    }
    padding-bottom: 60px;
    .index5-hero-content .v5banner-text h2 {
      font-size: 36px;
      line-height: 40px;
    }

    .index5-hero-content .v5banner-text p {
      font-size: 16px;
      max-width: 460px;
    }
    .index5-scroll-carousel-section {
      ul {
        gap: 15px;
        margin-bottom: 0px;
        li {
          gap: 5px;
          strong {
            font-size: 20px;
          }
          span {
            img {
              max-width: 60%;
              margin: auto;
              display: flex;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .index5-hero-content .v5banner-text h2 {
      font-size: 32px;
      line-height: 40px;
      gap: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    .index5-hero-content .v5banner-text span,
    .index5-hero-content .v5banner-text h2 {
      display: block;
      min-height: 40px;
    }
    .index5-hero-img {
      min-height: 150px;
    }
  }
  @media screen and (max-width: 374px) {
    .index5-hero-content .v5banner-text .banner-title .animation-text {
      width: 100%;
    }
    .index5-hero-content .v5banner-text .banner-title {
      font-size: 35px;
    }
  }
`;

export default SassOneBannerStyle;
