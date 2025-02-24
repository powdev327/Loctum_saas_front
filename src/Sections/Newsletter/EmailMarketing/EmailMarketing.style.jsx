import styled from "styled-components";

const EmailMarketingStyle = styled.section`
  margin-top: 70px;
  margin-bottom: 132px;
  .leading-email-card {
    padding: 50px 100px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 30px;
  }

  .leading-email-left {
    h3 {
      margin-bottom: 36px;
      color: ${({ theme }) => theme.colors.title};
      line-height: 50px;
      span {
        font-family: ${({ theme }) => theme.fonts.caveat};
        color: ${({ theme }) => theme.colors.primary};
        font-size: 40px;
      }
    }
    ul {
      padding: 0px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      max-width: 383px;
      width: 100%;
      li {
        background: #eef2f5;
        box-shadow: 0px 2px 0px rgba(0, 149, 255, 0.3);
        border-radius: 10px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.title};
        padding: 12px 21px;
        cursor: pointer;
        span {
          margin-right: 10px;
          img {
            margin-top: -2px;
          }
        }
        &:nth-child(2) {
          span {
            img {
              margin-top: -5px;
            }
          }
        }
      }
    }
  }

  .leading-email-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    ul {
      padding: 0px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 30px;
      max-width: 360px;
      margin-left: auto;
      margin-bottom: 0px;
      li {
        width: 33.33%;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .leading-email-card {
      padding: 40px 50px;
    }
    .leading-email-left {
      h3 {
        font-size: 24px;
        line-height: 36px;
        span {
          font-size: 36px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .leading-email-left {
      max-width: 430px;
      margin: auto;
      text-align: center;
      ul {
        margin: auto;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    .leading-email-right {
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 30px;
      ul {
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 35px;
    margin-bottom: 70px;
  }
  @media screen and (max-width: 575px) {
    .leading-email-card {
      padding: 40px 20px;
    }
    .leading-email-right {
      margin: 20px 0px;
    }
  }
`;

export default EmailMarketingStyle;
