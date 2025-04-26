import styled from "styled-components";

const CorporateValuesStyle = styled.section`
  padding-top: 132px;
  position: relative;
  z-index: 1;
  .our-values-top {
    max-width: 779px;
    margin: auto;
    margin-bottom: 100px;
    text-align: center;
    .section-title {
      margin-bottom: 26px;
    }
    p {
      font-size: 18px;
      margin-bottom: 0px;
    }
  }

  .our-value-text {
    margin-bottom: 64px;
    position: relative;
    h5 {
      font-weight: 700;
      margin-bottom: 10px;
    }
    .our-value-icon {
      position: absolute;
      border-radius: 50%;
      height: 60px;
      width: 60px;
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 2px dashed ${({ theme }) => theme.colors.blackColor}26;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 11;
      &1 {
        right: -180px;
        top: -10px;
      }
      &2 {
        right: -110px;
        top: -10px;
      }
      &3 {
        left: -180px;
        top: -10px;
      }
      &4 {
        left: -110px;
        top: -10px;
      }
    }
  }

  .our-values-img-section {
    position: relative;
    max-width: 470px;
    height: 100%;
    margin: auto;
  }
  .our-values-img-border {
    height: 470px;
    width: 470px;
    border-radius: 50%;
    border: 2px dashed ${({ theme }) => theme.colors.blackColor}26;
    position: absolute;
    top: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .our-values-img {
    height: 266px;
    width: 266px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }

  .loader-img {
    height: 470px;
    width: 470px;
    position: absolute;
    animation: rotate360 5s linear infinite;
    -webkit-animation: rotate360 5s linear infinite;
  }

  @media screen and (max-width: 991px) {
    padding-top: 110px;
    padding-bottom: 80px;
    .our-values-img-border {
      height: 200px;
      width: 200px;
    }
    .loader-img {
      height: 200px;
      width: 200px;
    }
    .our-values-img {
      height: 140px;
      width: 140px;
    }
    .our-values-img-section {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .our-values-img-border {
      top: 80px;
      bottom: auto;
    }
    .our-values-top {
      margin-bottom: 60px;
    }
    .our-value-text {
      margin-bottom: 30px;
      .our-value-icon {
        &1 {
          right: -70px;
          top: auto;
          bottom: 0px;
        }
        &2 {
          right: -70px;
          top: 30px;
        }
        &3 {
          left: -70px;
          top: auto;
          bottom: 0px;
        }
        &4 {
          left: -70px;
          top: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 50px;
    .our-value-text {
      text-align: left;
      padding-left: 80px;
      max-width: 390px;
      .our-value-icon {
        right: auto;
        left: 0px;
        top: 0px;
        bottom: auto;
      }
    }
    .our-values-top {
      p {
        font-size: 16px;
      }
    }
    .our-values-img-border {
      position: relative;
      top: auto;
      margin-bottom: 30px;
    }
  }
`;

export default CorporateValuesStyle;
