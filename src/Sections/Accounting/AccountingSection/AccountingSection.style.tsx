import styled from "styled-components";

const AccountingSectionStyle = styled.section`
  padding-top: 120px;
  padding-bottom: 140px;

  .index8-accounting-column-section {
    .custom-row {
      padding-bottom: 140px;

      .custom-column {
        padding-bottom: 40px !important;
        &:nth-last-child(1) {
          .index8-accounting-column-content {
            border: none;
          }
        }
      }
    }
  }

  .index8-accounting-column-content {
    width: 100%;
    padding-right: 18px;
    border-right: 1px solid ${({ theme }) => theme.colors.blackColor}26;

    .index8-accounting-colun-icon {
      margin-bottom: 23px;
    }

    h4 {
      font-size: 15px;
      margin-bottom: 14px;
    }

    p {
      width: 100%;
    }
  }

  .index8-accounting-img {
    overflow: hidden;
    max-width: 520px;
    width: 100%;
    min-height: 100%;
    padding-right: 20px;
    img {
      max-width: 100%;
      height: 100%;
      width: 100%;
      border-radius: 30px;
    }
  }
  .index8-accounting-content {
    min-height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  .index8-accounting-text {
    p {
      width: 100%;
      padding-bottom: 30px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;
      li {
        width: 50%;
        color: ${({ theme }) => theme.colors.title};
        svg {
          color: rgba(13, 172, 129, 0.5);
          margin-right: 10px;
          font-size: 18px;
        }
      }
    }

    .check-list {
      li {
        margin-bottom: 12px;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    padding-bottom: 70px;
  }
  @media screen and (max-width: 991px) {
    padding-top: 80px;
    .index8-accounting-column-section
      .custom-row
      .custom-column:nth-child(2)
      .index8-accounting-column-content {
      border: none;
    }
    .index8-accounting-column-section .custom-row {
      padding-bottom: 60px;
    }
  }
  @media screen and (max-width: 767px) {
    .index8-accounting-column-section .custom-row {
      padding-bottom: 30px;
    }
    .index8-accounting-column-content {
      padding-right: 0;
    }
    .index8-accounting-img {
      max-width: 100%;
      padding-right: 0px;
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 575px) {
    .index8-accounting-column-section .custom-row {
      padding-bottom: 20px;
    }
    .index8-accounting-column-section .custom-row {
      margin: 0px;
    }
    .index8-accounting-column-content {
      border: none;
      padding-right: 0px;
    }
  }
`;

export default AccountingSectionStyle;
