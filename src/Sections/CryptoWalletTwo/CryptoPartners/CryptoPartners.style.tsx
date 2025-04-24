import styled from "styled-components";

const CryptoPartnersStyle = styled.section`
  .partners-logos {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
  .our-partners-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
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
    .our-partners-list {
      .item {
        height: 70px;
        width: 180px;
      }
    }
  }
`;

export default CryptoPartnersStyle;
