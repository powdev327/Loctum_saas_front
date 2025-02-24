import styled from "styled-components";

const SeamlessStyle = styled.section`
  padding-bottom: 138px;
  .container {
    position: relative;
    .seamless-shape {
      position: absolute;
      right: 0px;
      top: -30px;
      transition: 0.3s;
    }
  }
  .seamless-card {
    padding: 60px 40px;
    background: #d9d9d9;
    border-radius: 30px;
    max-width: 560px;
    width: 100%;
    overflow: hidden;
    position: relative;
    .card-bg {
      position: absolute;
      height: 150%;
      width: 100%;
      top: -23%;
      left: 0px;
      z-index: 0;
    }
    &1 {
      //        background: url(../images/sass2/seamless-card-bg1.png);
      //        background-position: center center;
      //        background-size: cover;
      //        background-repeat: no-repeat;
    }
    &2 {
      //        background: url(../images/sass2/seamless-card-bg2.png);
      //        background-position: center center;
      //        background-size: cover;
      //        background-repeat: no-repeat;
      //        margin-left: auto;
      margin-top: 100px;
    }
    span {
      position: relative;
      z-index: 1;
    }
    h3 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 20px;
      margin-top: 37px;
      position: relative;
      z-index: 1;
      max-width: 360px;
    }
    p {
      margin-bottom: 41px;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 473px;
      width: 100%;
      position: relative;
      z-index: 1;
    }
    a {
      background: ${({ theme }) => theme.colors.whiteColor}33;
      backdrop-filter: blur(5px);
      border-radius: 50px;
      padding: 17px 34px;
      font-weight: 700;
      font-size: 15px;
      line-height: 26px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      position: relative;
      z-index: 1;
      img {
        margin-left: 15px;
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    .seamless-card2 {
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 575px) {
    .container {
      .seamless-shape {
        width: 140px;
      }
    }
    .seamless-card {
      .card-bg {
        height: 158%;
      }
    }
    .sass-demo-shapes {
      max-width: 205px;
    }
    .seamless-card {
      padding: 40px 20px 60px 20px;
    }
  }
`;

export default SeamlessStyle;
