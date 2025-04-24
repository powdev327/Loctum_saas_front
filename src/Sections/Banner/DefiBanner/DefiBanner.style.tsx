import styled from "styled-components";

import BgImg from "../../../assets/images/defi/defi-banner-bg.png";
import GrainTextureImg from "../../../assets/images/crypto-token/grain-texture.png";

const DefiBannerStyle = styled.section`
  background: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  .defi-banner-inner {
    background: url(${GrainTextureImg});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    height: 100%;
    width: 100%;
    .overlay {
      background: linear-gradient(
        180deg,
        #0d1014 0%,
        rgba(13, 16, 20, 0.7) 50.52%,
        #0d1014 100%
      );
      padding-top: 260px;
      width: 100%;
      height: 100%;
    }
  }

  .defi-banner-text {
    text-align: center;
    max-width: 813px;
    margin: auto;

    h1 {
      margin-bottom: 30px;
      font-size: 70px;
      font-weight: 700;
      line-height: 100px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      .words {
        padding: 0px -7px;
      }
      .word {
        padding: 0px 6px;
      }
      .animation-text {
        padding: 0;
        margin: 0 auto !important;
        text-align: center;

        &:after {
          display: none;
        }
      }

      b {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700;
        margin-top: 6px;
      }
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 36px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 626px;
      margin: auto;
      margin-bottom: 48px;
    }
  }

  .defi-banner-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      .defi-banner-btn-shape {
        .shape1 {
          padding: 3.5px 0px;
        }

        .shape2 {
          padding: 5px 0px;
        }

        .shape3 {
          padding: 6px 0px;
        }
      }
    }
  }
  .defi-banner-btn-shape {
    margin-right: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 4px;
    .shape1 {
      width: 3px;
      padding: 6px 0px;
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 2px;
      transition: 0.3s;
    }
    .shape2 {
      width: 3px;
      padding: 3.5px 0px;
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 2px;
      transition: 0.3s;
    }
    .shape3 {
      width: 3px;
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 2px;
      padding: 5px 0px;
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 991px) {
    .defi-banner-inner {
      .overlay {
        padding-top: 157px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    /*-- defi index start --*/
    .defi-banner-inner {
      .overlay {
        padding-top: 137px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    /*-- defi index start --*/
    .defi-banner-text {
      h1 {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .defi-banner-text h1 {
      line-height: 120%;
    }
  }
`;

export default DefiBannerStyle;
