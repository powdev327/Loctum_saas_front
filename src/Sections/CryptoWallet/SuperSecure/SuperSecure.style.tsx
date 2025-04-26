import styled from "styled-components";

const SuperSecureStyle = styled.section`
  padding: 130px 0px 100px 0px;
  .super-secure-text {
    font-size: 18px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: auto;
    margin-bottom: 40px;
    margin-top: 28px;
    text-align: center;
    max-width: 779px;
    width: 100%;
  }

  .super-secure-card {
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    border-radius: 20px;
    padding: 42px 20px 50px 20px;
    h5 {
      font-weight: 700;
      margin-bottom: 30px;
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor}cc;
      margin-bottom: 0px;
    }
  }
  .super-secure-card-img {
    margin-bottom: 30px;
    position: relative;
    width: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .super-secure-card-img-inner {
      overflow: hidden;
      height: 120px;
      width: 120px;
      margin: auto;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      img {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 1;
      }
    }
    .grad {
      position: absolute;
      bottom: -60px;
      z-index: 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px 50px 0px;
    .super-secure-text {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 575px) {
    .super-secure-card {
      p {
        max-width: 210px;
        margin: auto;
      }
    }
  }
`;

export default SuperSecureStyle;
