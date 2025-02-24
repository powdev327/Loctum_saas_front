import styled from "styled-components";

const EcoSystemStyle = styled.section`
  padding-top: 82px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    z-index: 23;
    bottom: 225px;
    left: 0px;
    background: linear-gradient(
      90deg,
      rgba(13, 16, 20, 0) 0%,
      rgba(55, 234, 142, 0.5) 51.56%,
      rgba(13, 16, 20, 0) 100%
    );
  }
  &::after {
    content: "";
    position: absolute;
    height: 287px;
    width: 100%;
    z-index: 22;
    bottom: -60px;
    left: 0px;
    background: rgba(13, 16, 20, 0.7);
    backdrop-filter: blur(40px);
  }
  p {
    font-size: 18px;
    line-height: 200%;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteColor}cc;
    max-width: 779px;
    margin: auto;
    margin-bottom: 55px;
  }

  .defi {
    margin-bottom: 38px;
    text-align: center;

    .sub-title {
      margin-bottom: 12px;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0.2em;
      color: #37ea8e;
      display: block;
    }
    .title {
      color: ${({ theme }) => theme.colors.whiteColor};
      span.liniar {
        background: linear-gradient(90deg, #37ea8e 35.54%, #bdf93f 65.12%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }

  .ecosystem-text {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px;
      list-style: none;
      margin-bottom: 0px;

      li {
        width: 20%;
        font-size: 18px;
        padding: 0px 12px;
        text-align: center;
        margin-bottom: 13px;
        color: ${({ theme }) => theme.colors.whiteColor};
        line-height: 30px;
      }
    }
  }
  .ecosystem-content {
    max-width: 944px;
    margin: auto;
    text-align: center;
    .globe-img {
      max-width: 450px;
      margin: auto;
      text-align: center;
      margin-top: -60px;
      position: relative;
      z-index: 1;
      border-radius: 50%;
      .cloud1 {
        position: absolute;
        top: 51px;
        left: 42px;
      }
      .cloud2 {
        position: absolute;
        top: 150px;
        left: -27px;
      }
      .cloud3 {
        position: absolute;
        top: 72px;
        right: -47px;
      }
      .cloud4 {
        position: absolute;
        top: 175px;
        right: -20px;
      }
    }
  }
  .eco-line-pc {
    display: block;
  }

  .eco-line-mobile {
    display: none;
  }

  .defi-launchapp-btn {
    width: 220px;
    height: 60px;
    background: #37ea8e;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.title} !important;
    position: relative;
    overflow: hidden;
    margin: auto;
    margin-bottom: 72px;
    font-weight: 700;
    img {
      transition: 0.3s;
      margin-left: 14px;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.title};
      img {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .ecosystem-content {
      max-width: 755px;
    }
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
    .ecosystem-text {
      ul {
        li {
          font-size: 13px;
        }
      }
    }
    .ecosystem-content {
      max-width: 560px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding-top: 50px;
    p {
      font-size: 16px;
      margin-bottom: 30px;
    }
    .ecosystem-text {
      ul {
        flex-wrap: wrap;
        justify-content: center;
        li {
          width: 50%;
          line-height: 20px;
          &:nth-child(1) {
            text-align: left;
            padding: 0px;
          }
          &:nth-child(2) {
            text-align: right;
            padding: 0px;
          }
          &:nth-child(3) {
            text-align: right;
            padding-right: 20px;
          }
          &:nth-child(4) {
            text-align: left;
            padding-left: 20px;
          }
        }
      }
    }
    .defi-launchapp-btn {
      margin-bottom: 50px;
    }
    .ecosystem-text {
      margin-bottom: -100px;
      position: relative;
      z-index: 1;
    }

    .ecosystem-text ul li {
      &:nth-child(3) {
        padding-left: 80px;
        text-align: left;
      }
      &:nth-child(4) {
        padding-right: 80px;
        text-align: right;
      }
    }
    .ecosystem-content {
      overflow: hidden;
    }
    .eco-line-pc {
      display: none;
    }

    .eco-line-mobile {
      display: block;
      position: relative;
      z-index: 0;
    }
  }
  @media screen and (max-width: 575px) {
    /*-- defi index start --*/
    .ecosystem-text ul li {
      &:nth-child(3) {
        padding-left: 30px;
      }
      &:nth-child(4) {
        padding-right: 30px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    &::after {
      height: 200px;
    }
    &::before {
      bottom: 140px;
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .ecosystem-text ul li {
      &:nth-child(3) {
        padding: 0px 15px;
      }
      &:nth-child(4) {
        padding: 0px 15px;
      }
    }
  }
  @media screen and (min-width: 768px) {
  }
`;

export default EcoSystemStyle;
