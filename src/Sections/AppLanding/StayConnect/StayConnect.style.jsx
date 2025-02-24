import styled from "styled-components";

const StayConnectStyle = styled.section`
  .stay-connect-section {
    background: #061121;
    text-align: center;
    .stay-connect-content {
      max-height: 793px;
      min-height: 793px;
      padding-top: 126px;
      padding-bottom: 147px;
      overflow: hidden;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .stay-connect-round-shape {
        position: absolute;
        animation: rotate360 5s linear infinite;
        -webkit-animation: rotate360 5s linear infinite;
        z-index: 0;
      }
      .stay-connect-mash-grade {
        position: absolute;
        z-index: 0;
      }
      .title {
        position: relative;
        z-index: 11;
        max-width: 450px;
        width: 100%;
        margin: auto;
        margin-bottom: 0px;
      }
      .subtitle {
        position: relative;
        z-index: 11;
        max-width: 450px;
        width: 100%;
        margin: auto;
      }
    }
  }

  .stay-connect-btns {
    max-width: 410px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin-top: 48px;
    position: relative;
    z-index: 11;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 30px;
      padding: 7px 24px;
      max-width: 190px;
      width: 190px;
      margin: auto;
      h5 {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;
        font-weight: 700;
        margin-bottom: 0px;
        font-size: 18px !important;
        span {
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
    .qr-code {
      margin-top: 52px;
      text-align: center;
      margin-bottom: 30px;
      margin-bottom: 40px;
      p {
        margin-top: 12px;
        margin-bottom: 0px;
      }
    }
  }

  .stay-connect-mobile-img {
    position: relative;
    z-index: 2;
    max-width: 600px;
    margin: auto;
    margin-top: -95px;
  }

  @-webkit-keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 1499px) {
    .stay-connect-content {
      max-height: auto;
      min-height: auto;
    }
  }
  @media screen and (max-width: 575px) {
    .stay-connect-section {
      padding-top: 65px;
      padding-bottom: 100px;
    }
  }
  @media screen and (max-width: 480px) {
    .stay-connect-btns {
      a {
        margin: auto;
      }
      .qr-code {
        text-align: center;
        margin-top: 40px;
      }
    }
    .stay-connect-mobile-img {
      margin-top: -80px;
    }
  }
`;

export default StayConnectStyle;
