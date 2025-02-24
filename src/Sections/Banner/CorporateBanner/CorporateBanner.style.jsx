import styled from "styled-components";

import BgImg from "../../../assets/images/corporate/corporate-banner-bg.jpg";

const CorporateBannerStyle = styled.section`
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 11;
  background-attachment: fixed;
  overflow: hidden;
  
  .overlay {
    background: rgba(16, 23, 34, 0.7);
    padding: 198px 0px;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .corporate-banner-text {
    max-width: 613px;
    width: 100%;
    margin: auto;
    padding: 0px 20px;
    h4 {
      margin-bottom: 19px;
    }
    h1 {
      font-size: 80px;
      line-height: 125%;
      margin-bottom: 32px;
    }
    p {
      font-size: 18px;
      line-height: 36px;
      margin-bottom: 48px;
    }
  }

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .overlay {
      padding: 140px 0px;
    }
  }
  @media screen and (max-width: 991px) {
    .overlay {
      padding: 120px 0px;
    }
    .corporate-banner-text {
      h1{
        font-size: 55px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .overlay {
      padding: 120px 0px 80px 0px;
    }
    .corporate-banner-text h1 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 575px) {
    .corporate-banner-text {
      h2 {
        font-size: 32px;
      }
    }
  }
`;

export default CorporateBannerStyle;
