import styled from "styled-components";

const ConnectDappsStyle = styled.section`
  padding: 131px 0px 0px 0px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  top: 0px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.whiteColor};
  .container {
    position: relative;
    z-index: 2;
  }
  .connect-dapps-doted-img {
    position: absolute;
    top: 0px;
    z-index: 0;
  }
  .connect-dapps-text {
    max-width: 779px;
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 3;
    p {
      margin-bottom: 30px;
      font-size: 18px;
      line-height: 36px;
    }
    a {
      transition: 0.3s;
      font-weight: 700;
      font-size: 15px;
      line-height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 41px;
      color: #4541fe;
      img {
        transition: 0.3s;
        margin-left: 14px;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .connect-dapps-content{
    position: relative;
    z-index: 2;
  }
  .connect-dapps-img {
    max-width: 1004px;
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 0;
    .coin-img {
      position: relative;
      z-index: 2;
      top: -65px;
    }
    .mocup-img {
      margin-top: -420px;
      position: relative;
      z-index: 0;
      left: 80px;
    }
  }

  @media screen and (max-width: 991px) {
    .connect-dapps-img {
      .mocup-img {
        left: 0px;
      }
    }
    .connect-dapps-text {
      p {
        font-size: 16px;
      }
    }
    .connect-dapps-img {
      padding-top: 80px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 80px;
    .connect-dapps-img .mocup-img {
      margin-top: -300px;
    }
  }
  @media screen and (max-width: 480px) {
    .connect-dapps-img {
      padding-top: 120px;
    }
  }
  @media screen and (max-width: 425px) {
    .connect-dapps-img {
      padding-top: 140px;
    }
  }
`;

export default ConnectDappsStyle;
