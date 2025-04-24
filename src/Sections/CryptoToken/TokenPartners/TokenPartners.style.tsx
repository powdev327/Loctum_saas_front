import styled from "styled-components";

import GrainTextureImg from "../../../assets/images/crypto-token/grain-texture.png";

const TokenPartnersStyle = styled.section`
  margin-bottom: 140px;
  background: url(${GrainTextureImg});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 20%;
    width: 100%;
    position: absolute;
    height: 250px;
    width: 100%;
    top: -47px;
    left: 0px;
    background: linear-gradient(180deg, #0d1014 0%, rgba(13, 16, 20, 0) 100%);
  }
  &::after {
    content: "";
    position: absolute;
    height: 250px;
    width: 100%;
    position: absolute;
    height: 20%;
    width: 100%;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(180deg, rgba(13, 16, 20, 0) 0%, #0d1014 100%);
  }
  .partners-title {
    font-family: ${({ theme }) => theme.fonts.quantico};
    font-weight: 700;
    font-size: 60px;
    line-height: 133%;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-bottom: 64px;
    position: relative;
    z-index: 1;
  }

  .partners-list {
    position: relative;
    z-index: 1;
    ul {
      margin: 0px -15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      list-style: none;
      padding: 0px;

      li {
        width: 20%;
        padding: 0px 15px;
        margin-bottom: 30px;
      }
    }
  }

  .partners-logo {
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.whiteColor}1f;
    border-radius: 50%;
    min-width: 210px;
    min-height: 210px;
    overflow: hidden;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-outline {
      opacity: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
    }
    &:hover {
      .btn-outline {
        opacity: 1;
        animation: rotate360 5s linear infinite;
        -webkit-animation: rotate360 5s linear infinite;
      }
    }
  }

  .partners-logo:hover {
    cursor: pointer;
  }

  .partners-logo .round {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.whiteColor}10;
    position: absolute;
    top: 5px;
    left: 10px;
    z-index: -1;
    animation: scale-down 0.2s forwards;
  }

  .partners-logo.animate .round {
    animation: scale-up 0.5s forwards;
  }

  .green-shape {
    position: absolute;
    z-index: 0;
    left: 20%;
    top: 20%;
  }

  @keyframes scale-up {
    to {
      transform: scale(600);
    }
  }

  @keyframes scale-down {
    from {
      transform: scale(600);
    }
    to {
      ransform: scale(0);
    }
  }

  @media screen and (max-width: 1199px) {
    .partners-title {
      font-size: 45px;
      margin-bottom: 40px;
    }
    .partners-logo {
      min-width: 160px;
      min-height: 160px;
      padding: 20px;
    }
  }
  @media screen and (max-width: 991px) {
    .partners-list {
      ul {
        margin: 0px;
        li {
          width: 25%;
        }
      }
    }
    margin-bottom: 100px;
  }

  @media screen and (max-width: 767px) {
    .partners-title {
      font-size: 40px;
    }
    margin-bottom: 80px;
    .partners-list {
      ul {
        li {
          width: 33.33%;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .partners-title {
      font-size: 30px;
    }
    .partners-logo {
      min-width: 110px;
      min-height: 110px;
    }
  }
  @media screen and (max-width: 480px) {
    .partners-logo {
      padding: 10px;
    }
  }
  @media screen and (max-width: 425px) {
    .partners-logo {
      min-width: 80px;
      min-height: 80px;
    }
  }
`;

export default TokenPartnersStyle;
