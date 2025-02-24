import styled from "styled-components";

const AboutCompanyStyleWrapper = styled.section`
  padding: 132px 0px 113px 0px;
  position: relative;
  z-index: 11;
  .about-company-inner {
    max-width: 516px;
    width: 100%;
    position: relative;
    .play-btn {
      height: 120px;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 50%;
      position: absolute;
      right: 114px;
      bottom: 140px;
      box-shadow: 0px 15px 25px ${({ theme }) => theme.colors.blackColor}26;
    }
  }
  .about-company-img {
    img {
      width: 100%;
      height: 1005;
    }
  }

  .about-company-right {
    h3 {
      text-transform: uppercase;
      margin-bottom: 29px;
      margin-top: 4px;
      background: linear-gradient(90deg, #30d7f1 0%, #79fa4b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    p {
      margin-bottom: 25px;
    }
    ul {
      list-style: none;
      padding: 0px;
      margin-bottom: 0px;
      margin-top: 41px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      li {
        width: 25%;
        padding: 10px 10px 10px 20px;
        border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        &:nth-child(1) {
          padding-left: 0px;
          border-left: none;
        }
        img {
          margin-right: 12px;
        }
        span {
          color: ${({ theme }) => theme.colors.blackColor};
          font-weight: 700;
          font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .about-company-right ul li {
      padding: 10px 10px 10px 14px;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 110px 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .about-company-right {
      ul {
        li {
          padding: 10px 5px;
          span {
            font-size: 13px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px;
  }
  @media screen and (max-width: 575px) {
    .about-company-right {
      ul {
        flex-wrap: wrap;
        li {
          width: 50%;
          padding: 10px 20px !important;
          &:nth-child(3) {
            border-left: none;
          }
          &:nth-child(1) {
            border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
          }
          &:nth-child(2) {
            border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
          }
        }
      }
    }
  }
`;

export default AboutCompanyStyleWrapper;
