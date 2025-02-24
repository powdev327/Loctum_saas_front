import styled from "styled-components";

import BgImg from "../../../assets/images/bg/top-header-bg.png";

const SassHeaderTopStyle = styled.div`
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 111;
  .header-top-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 35px;
    .header-top-timer {
      span {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 228px;
        width: 100%;
        gap: 30px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .header-top-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 15px;
    }
    p {
      margin-bottom: 0;
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  .nav-expanded .staco-home3-canva {
    margin-top: 90px;
  }

  @media screen and (max-width: 767px) {
    .header-top-content .header-top-timer,
    .header-top-content .header-top-left {
      display: none;
    }
    .header-top-content .header-top-right {
      padding-top: 5px;
    }
    .header-top-content {
      flex-direction: column;
    }
  }
`;

export default SassHeaderTopStyle;
