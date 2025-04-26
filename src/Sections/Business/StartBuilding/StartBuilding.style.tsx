import styled from "styled-components";

import BgImg from "../../../assets/images/business/fram-4.svg";

const StartBuildingStyle = styled.div`
  padding: 88px 0 73px 0;
  background-color: ${({ theme }) => theme.colors.bgFooter};
  position: relative;
  z-index: 0;

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 36.5%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.whiteColor}05;
  }

  &::after {
    position: absolute;
    z-index: -2;
    content: "";
    top: 0;
    right: 0;
    width: calc(100% - 36.5%);
    height: 100%;
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
  }

  .building-content-4 {
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    a {
      display: inline-block;
      margin-top: 34px;
    }
    .template-btn {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }

  @media screen and (max-width: 1600px) {
    &::before {
      width: 34%;
    }
    &::after {
      width: calc(100% - 34%);
    }
  }
  @media screen and (max-width: 1399px) {
    &::before {
      width: 32%;
    }
    &::after {
      width: calc(100% - 32%);
    }
  }
  @media screen and (max-width: 991px) {
    .building-content-4 {
      h2 {
        font-size: 32px;
        line-height: 45px;
      }

      a {
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px 70px;
  }
`;

export default StartBuildingStyle;
