import styled from "styled-components";

import MetaverseImg from "../../../assets/images/crypto2/metavarse-bg.png";

const BenefitesStyleWrapper = styled.section`
  padding-top: 112px;
  padding-bottom: 140px;

  .crypto2-benifits-content {
    margin-top: 35px;
  }
  .crypto2-benifits-card {
    padding: 62px 70px 70px 70px;
    position: relative;
    overflow: hidden;
    &1 {
      background: linear-gradient(145.48deg, #ced8f7 0%, #f3f6fe 79.62%);
      border-radius: 30px;
      h5 {
        color: #4541fe;
        &::before {
          background: #4541fe;
        }
      }
      a {
        color: #4541fe;
      }
    }

    &2 {
      background: linear-gradient(193.39deg, #173502 0%, #173502 93.24%);
      border-radius: 30px;
      h5 {
        color: #9fe870;
        &::before {
          background: #9fe870;
        }
      }
      a {
        color: #9fe870;
      }
      h3 {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      p {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      .weav-img {
        position: absolute;
        z-index: 1;
        left: -30%;
        min-width: 600px;
        bottom: 123px;
      }
      .benifits-card-img3 {
        position: relative;
        z-index: 2;
      }
      .benifits-card-img4 {
        position: relative;
        z-index: 0;
      }
    }

    h5 {
      position: relative;
      z-index: 3;
      padding-left: 25px;
      margin-bottom: 15px;
      &::before {
        content: "";
        height: 14px;
        width: 14px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 7px;
        left: 0px;
      }
    }
    h3 {
      margin-bottom: 25px;
      position: relative;
      z-index: 3;
    }
    p {
      margin-bottom: 24px;
      position: relative;
      z-index: 3;
    }
    a {
      transition: 0.3s;
      font-weight: 700;
      font-size: 15px;
      line-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 41px;
      position: relative;
      z-index: 3;
      img {
        transition: 0.3s;
        margin-left: 12px;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .benifits-card-img-section {
    .benifits-card-img {
      position: relative;
      overflow: hidden;
      height: 180px;
      border-radius: 15px;
      &2 {
        filter: drop-shadow(0px 20px 15px rgba(0, 0, 0, 0.1));
        border-radius: 15px;
      }

      .card-img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
  .metaverse-card {
    background: url(${MetaverseImg});
    background-position: center right;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 50px;
    .overlay {
      padding: 62px 70px;
      background: linear-gradient(
        90deg,
        rgba(16, 23, 34, 0.5) 0%,
        rgba(16, 23, 34, 0) 61.46%
      );
      height: 100%;
    }
    h5 {
      padding-left: 25px;
      position: relative;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 15px;
      &::before {
        content: "";
        border-radius: 50%;
        overflow: hidden;
        height: 14px;
        width: 14px;
        background: ${({ theme }) => theme.colors.whiteColor};
        position: absolute;
        top: 7px;
        left: 0px;
      }
    }
    h3 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 26px;
    }
    p {
      margin-bottom: 0px;
      max-width: 500px;
      color: ${({ theme }) => theme.colors.whiteColor}cc;
    }
  }

  @media screen and (max-width: 1199px) {
    .crypto2-benifits-card {
      padding: 40px;
    }
  }
  @media screen and (max-width: 991px) {
    .crypto2-benifits-card {
      max-width: 500px;
      margin: auto;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px;
    .metaverse-card .overlay {
      padding: 50px 30px;
    }
  }
  @media screen and (max-width: 575px) {
    .benifits-card-img-section {
      .benifits-card-img {
        max-width: auto;
        margin: auto;
        margin-bottom: 30px;
        height: auto;
        text-align: center;
        .card-img {
          position: inherit !important;
          height: auto;
          width: auto;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .section-title.crypto2.text-center {
      text-align: left !important;
    }
  }
`;

export default BenefitesStyleWrapper;
