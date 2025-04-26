import styled from "styled-components";

const CryptoOneBannerStyle = styled.section`
  padding-top: 181px;
  .crypto-hero-section-text {
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 70px;
      line-height: 90px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 750px;
      margin: 0 auto;
      margin-bottom: 27px;
      span {
        color: #01ffb0;
      }
    }
    .banner-text {
      max-width: 545px;
      font-size: 18px;
      line-height: 35px;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 38px;
    }
  }
  .banner-animetion {
    background: ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 19px;
    padding: 3px 7px;
    padding-right: 15px;
    max-width: 364px;
    width: 100%;
    margin: auto;
    margin-bottom: 19px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    .new {
      font-weight: 700;
      line-height: 14px;
      color: ${({ theme }) => theme.colors.title};
      padding: 5px 9px;
      background: #fce344;
      border-radius: 15px;
      margin-right: 9px;
    }
    p {
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.whiteColor};
      white-space: nowrap;
      //        width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      margin-left: 12px;
    }
  }
  .crypto-hero-img {
    width: 100%;
    margin-top: 60px;
    position: relative;
    margin-bottom: 140px;
    position: relative;
    z-index: 111;
    .dhashboard-img {
      max-width: 950px;
      margin: auto;
      padding-right: 30px;
      background: rgba(57, 63, 87, 0.7);
      backdrop-filter: blur(25px);
      border-radius: 30px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .mobile-img {
      padding: 10px;
      background: rgba(128, 132, 149, 0.3);
      backdrop-filter: blur(5px);
      border-radius: 25px;
      position: absolute;
      right: 0px;
      bottom: 48px;
      max-width: 190px;
      img {
        height: 100%;
        width: 100%;
      }
      .slick-initialized .slick-slide {
        width: auto !important;
      }
    }
  }
  .container {
    position: relative;
    z-index: 2;
  }
  .hero-overlay {
    position: relative;
    z-index: 0;
    background: radial-gradient(
      54.8% 82.2% at 50.8% 4.8%,
      rgba(0, 0, 96, 0.5) 0%,
      rgba(16, 23, 34, 0.5) 100%
    );
    height: 100vh;
    position: absolute;
    top: 0px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .banner-vector {
      margin-top: 53%;
    }
    .banner-grad {
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 1600px) {
    .hero-overlay {
      .banner-vector {
        margin-top: 80%;
      }
    }
  }
  @media screen and (max-width: 1199px) {
    .hero-overlay {
      .banner-vector {
        margin-top: 110%;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .crypto-hero-section-text {
      h1 {
        font-size: 50px;
        max-width: 520px;
        line-height: 128%;
      }
    }
    .crypto-hero-img {
      .mobile-img {
        max-width: 150px;
        img{
          max-width: 130px;
        }
      }
    }
    .hero-overlay {
      .banner-vector {
        min-height: 384px;
        margin-top: 1100px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 150px;
    .hero-overlay {
      .banner-vector {
        margin-top: 1000px;
      }
    }
    .crypto-hero-img {
      .mobile-img {
        max-width: 110px;
        img{
          max-width: 90px;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .crypto-hero-section-text {
      h1 {
        font-size: 40px;
      }
      .banner-text {
        font-size: 14px;
        line-height: 30px;
        max-width: 405px;
      }
    }
    .crypto-hero-img {
      .dhashboard-img {
        border-radius: 12px;
      }
      .mobile-img {
        padding: 5px;
        border-radius: 12px;
        max-width: 100px;
      }
    }
    .hero-overlay {
      .banner-vector {
        margin-top: 900px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .crypto-hero-img {
      .mobile-img {
        max-width: 80px;
        img{
          max-width: 70px;
        }
      }
    }
  }
  @media screen and (max-width: 374px) {
    .crypto-hero-section-text {
      h1 {
        font-size: 33px;
      }
    }
  }
  @media screen and (min-width: 768px) {
  }
`;

export default CryptoOneBannerStyle;
