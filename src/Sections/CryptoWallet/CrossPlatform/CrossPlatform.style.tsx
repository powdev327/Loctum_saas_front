import styled from "styled-components";

import BgImg from "../../../assets/images/crypto/cross-platform-bg.svg";

const CrossPlatformStyle = styled.section`
  background: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 174px 0px;
  .cross-platform-card {
    max-width: 525px;
    width: 100%;
    margin: auto;
    background: #1c232d;
    border-radius: 20px;
    padding: 96px 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .section-title {
      position: relative;
      z-index: 2;
      margin-bottom: 0px;
    }
    .cross-platform-mesh-grad {
      position: absolute;
      z-index: 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px;
    .cross-platform-card {
      max-width: 410px;
      padding: 60px 0px;
    }
  }
`;

export default CrossPlatformStyle;
