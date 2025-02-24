import styled from "styled-components";

import BgImg1 from "../../../assets/images/corporate/footer-top-bg1.png";
import BgImg2 from "../../../assets/images/corporate/footer-top-bg2.png";
import BgImg3 from "../../../assets/images/corporate/footer-top-bg3.png";

const CorporateFooterTopStyle = styled.section`
  .row {
    margin: 0px !important;
  }
  .col-md-4 {
    padding: 0px !important;
  }
  .corporate-footer-top-banner {
    &1 {
      background: url(${BgImg1});
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &2 {
      background: url(${BgImg2});
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &3 {
      background: url(${BgImg3});
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .overlay {
      height: 100%;
      width: 100%;
      height: 250px;
      background: linear-gradient(
        90deg,
        #175fba 0%,
        rgba(23, 95, 186, 0.7) 49.73%,
        #175fba 100%
      );
      overflow: hidden;
      border-right: 1px solid ${({ theme }) => theme.colors.whiteColor}26;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 28px;
      padding: 20px;
      padding: 20px;
      overflow: hidden;
      p {
        margin-bottom: 0px;
      }
      h4 {
        transition: 0.5s;
        margin-top: 160px;
        margin-bottom: 130px;
      }
    }
    .corporate-footer-top-text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: 0.5s;
    }
    &:hover {
      .corporate-footer-top-text {
        h4 {
          margin-top: 0px;
          margin-bottom: 28px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .corporate-footer-top-banner {
      h4 {
        font-size: 22px;
      }
    }
    .corporate-footer-top-banner {
      .overlay {
        height: 200px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .corporate-footer-top-banner {
      &3 {
        .overlay {
          border-top: 1px solid ${({ theme }) => theme.colors.whiteColor}26;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .corporate-footer-top-banner {
      &2 {
        .overlay {
          border-top: 1px solid ${({ theme }) => theme.colors.whiteColor}26;
        }
      }
    }
  }
`;

export default CorporateFooterTopStyle;
