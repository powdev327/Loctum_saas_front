import styled from "styled-components";

const CrossNetworkStyle = styled.section`
  h3 {
    margin-bottom: 21px;
  }
  p {
    margin-bottom: 32px;
    max-width: 600px;
    width: 100%;
  }
  .cross-network-logos {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      height: 100%;
      width: 20%;
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 11;
    }
    &::after {
      content: "";
      height: 100%;
      width: 20%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 100%
      );
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 11;
    }
  }
  .cross-network-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: smoothSlider 15s infinite linear;
    .item {
      margin-right: 30px;
      height: 90px;
      min-width: 226px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
        90deg,
        #f1f1f1 0%,
        #ffffff 49.48%,
        #f1f1f1 100%
      );
      border-radius: 20px;
      img {
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .cross-network-list {
      .item {
        height: 70px;
        width: 180px;
      }
    }
  }
`;

export default CrossNetworkStyle;
