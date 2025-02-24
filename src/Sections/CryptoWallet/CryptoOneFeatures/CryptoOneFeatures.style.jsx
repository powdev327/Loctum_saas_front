import styled from "styled-components";

const CryptoOneFeaturesStyle = styled.section`
  .crypto-features-content {
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    backdrop-filter: blur(35px);
    border-radius: 30px;
    padding: 47px 40px 50px 40px;
  }

  .crypto-features-text {
    position: relative;
    min-height: 100%;
    h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 26px;
      margin-top: 31px;
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 295px;
      margin-bottom: 0px;
      opacity: 80%;
    }
    &1 {
      &::after {
        content: "";
        height: 70%;
        width: 2px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.2) 50.52%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
        right: 0px;
        top: 20%;
      }
    }
    &2 {
      &::after {
        content: "";
        height: 70%;
        width: 2px;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.2) 50.52%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
        right: 0px;
        top: 20%;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .crypto-features-text {
      padding-right: 20px;
    }
  }
  @media screen and (max-width: 991px) {
    .crypto-features-content {
      padding: 47px 20px 50px 20px;
    }
    .crypto-features-text {
      h4 {
        font-size: 19px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .crypto-features-text {
      text-align: center;
      margin-bottom: 30px;
      padding-right: 0px;
      &1,
      &2 {
        &::after {
          display: none;
        }
      }
      &3 {
        margin-bottom: 0px;
      }
      p {
        margin: auto;
      }
    }
  }
`;

export default CryptoOneFeaturesStyle;
