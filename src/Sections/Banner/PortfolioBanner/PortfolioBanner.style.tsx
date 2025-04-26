import styled from "styled-components";

const PortfolioBannerStyle = styled.section`
  padding-top: 283px;
  padding-bottom: 50px;
  text-align: center;
  .v6hero-img {
    position: relative;
    max-width: 1500px;
    padding: 0px 25px;
    margin: auto;
    margin-top: -12%;
    z-index: 0;
  }
  .v7hero-section-text {
    position: relative;
    z-index: 111;
    .banner-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 21px;
      margin-bottom: 36px;

      .slick-list {
        padding: 0 !important;
      }

      .slick-track {
        width: 100% !important;
        transform: translate3d(0px, 0px, 0px) !important;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        max-width: 910px;
        width: 100%;
      }

      .slick-slide {
        h2 {
          font-size: 70px;
          font-weight: 700;
          line-height: 80px;
          width: max-content !important;
        }

        &.slick-current {
          .one {
            background: linear-gradient(90deg, #f7578c 2.17%, #00aaff 100%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .two {
            background: linear-gradient(90deg, #00aaff 1.92%, #2bd9d9 100%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .three {
            background: linear-gradient(90deg, #2bd9d9 0%, #39d393 100%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
    p {
      max-width: 569px;
      margin: auto;
      text-align: center;
      font-size: 18px;
      line-height: 36px;
    }
  }
  .v6hero-section-btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 58px;
    position: relative;
    z-index: 2;
    .bg-blue-btn {
      height: 60px;
    }
  }

  @media screen and (max-width: 1699px) {
    .v6hero-img {
      margin-top: -18%;
    }
  }
  @media screen and (max-width: 1199px) {
    .v7hero-section-text .banner-text h2 {
      font-size: 55px;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 160px;
    .v7hero-section-text .banner-text h2 {
      font-size: 56px !important;
      line-height: 150% !important;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 120px;

    .v6hero-img {
      margin-top: 0px;
    }
    .v7hero-section-text .banner-text h2 {
      font-size: 40px !important;
      line-height: 56px;
      margin-bottom: 0px !important;
    }
    .v7hero-section-text .banner-text {
      margin-bottom: 0;
    }
    .v6hero-section-btns {
      margin-top: 35px;
    }
    .v7hero-section-text {
      p{
        font-size: 14px !important;
        line-height: 150% !important;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .v7hero-section-text .banner-text {
        max-width: 420px;
        margin-bottom: 0;
        margin: auto;
        gap: 10px;
        h2 {
          font-size: 32px !important;
        }
    }
    .v6hero-section-btns {
      margin-top: 30px;
    }
  }
  @media screen and (max-width: 480px) {
    .v7hero-section-text .banner-text .slick-track {
      display: block;
    }
    body .v7hero-section-text .banner-text h2 {
      float: none;
      width: 100%;
      margin: 0;
    }
    .v7hero-section-text .banner-text {
      margin-bottom: 16px;
      h2 {
        font-size: 28px !important;
      }
    }

    .v7hero-section-text .banner-text .slick-track {
      gap: 10px;
    }
  }
  @media screen and (max-width: 420px) {
    .v7hero-section-text .banner-text {
      h2 {
        font-size: 24px !important;
      }
    }
  }
`;

export default PortfolioBannerStyle;
