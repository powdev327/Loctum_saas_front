import styled from "styled-components";

const CryptoSupportStyle = styled.section`
  padding: 110px 0px 0px 0px;
  .support-card {
    background: #101722;
    border-radius: 30px;
    max-width: 1170px;
    width: 100%;
    margin: 0px auto;
    padding: 91px 70px 70px 70px;
    position: relative;
    overflow: hidden;
    .blur-img {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 0;
      height: 100%;
    }
    .dot-bg {
      position: absolute;
      height: 100%;
      width: 97%;
      left: 0px;
      top: 0px;
      z-index: 1;
    }
  }
  .support-list {
    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      li {
        margin-bottom: 20px;
        img {
          margin-right: 15px;
        }
        span {
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }
  }

  .support-card-left {
    position: relative;
    z-index: 2;
  }
  .support-card-right {
    max-width: 400px;
    margin-left: auto;
    position: relative;
    z-index: 2;
  }
  .support-inner-card {
    padding: 38px 30px 33px 30px;
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    border-radius: 15px;
    margin-bottom: 30px;
    h5 {
      margin-bottom: 18px;
      position: relative;
      padding-left: 50px;
      img {
        margin-right: 19px;
        position: absolute;
        left: -12px;
        top: -18px;
      }
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor}cc;
      margin-bottom: 7px;
    }
    a {
      font-weight: 700;
      transition: 0.3s;
      color: #9fe870;
      img {
        margin-left: 14px;
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .support-card {
      overflow: hidden;
      padding: 50px;
      .dot-bg {
        top: -100px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .support-card-right {
      max-width: 100%;
    }
    .support-card .dot-bg {
      top: -200px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 50px 0px 80px 0px;
    .support-card-right {
      max-width: 100%;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 575px) {
    .support-card {
      padding: 50px 30px;
      padding-bottom: 20px;
    }
  }
  @media screen and (max-width: 425px) {
    .support-inner-card {
      padding: 20px;
      h5 {
        font-size: 16px;
      }
    }
  }
`;

export default CryptoSupportStyle;
