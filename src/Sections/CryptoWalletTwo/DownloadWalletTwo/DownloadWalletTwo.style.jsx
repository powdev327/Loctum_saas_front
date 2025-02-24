import styled from "styled-components";

const DownloadWalletTwoStyle = styled.section`
  margin-top: -80px;
  padding-bottom: 102px;
  position: relative;
  .download-wallet-list {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0px -15px;
      list-style: none;
      padding: 0px;
      li {
        padding: 0px 15px;
        margin-bottom: 30px;
        width: 16.666666%;
        a {
          background: linear-gradient(
            180deg,
            #f1f1f1 0%,
            #ffffff 49.48%,
            #f1f1f1 100%
          );
          border-radius: 20px;
          height: 178px;
          padding: 25px 14px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          span {
            margin-bottom: 26px;
          }
          h6 {
            font-weight: 700;
            line-height: 24px;
            margin-bottom: 0px;
          }
          p {
            font-size: 13px;
            line-height: 24px;
            color: ${({ theme }) => theme.colors.iconColor};
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .download-wallet-list ul li {
      width: 25%;
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
    .download-wallet-list ul li {
      width: 33.33%;
    }
  }
  @media screen and (max-width: 480px) {
    .download-wallet-list ul li {
      width: 50%;
    }
  }
`;

export default DownloadWalletTwoStyle;
