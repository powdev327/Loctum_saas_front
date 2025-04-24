import styled from "styled-components";

import CheckImg from "../../../assets/images/icons/list-check.svg";

const SassTwoChoosStyle = styled.section`
  position: relative;
  .choose-us-bg {
    position: absolute;
    top: 0px;
    width: 100%;
    min-height: 1554px;
  }
  .sidebar__inner {
    left: inherit !important;
  }
  .sass-choose-us-container {
    position: relative;
  }
  .sass-choose-us-content {
    ul {
      margin-top: 22px;
      margin-bottom: 40px;
      list-style: url(${CheckImg});
      max-width: 465px;
      width: 100%;
      li {
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 7px;
        padding-left: 8px;
      }
    }
  }

  .sass-choose-us-bottom {
    margin-bottom: 30px;
    max-width: 254px;
    width: 100%;
    h5 {
      margin-top: 22px;
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 0px;
    }
  }

  .sass-choose-us-img {
    max-width: 550px;
    width: 100%;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.blackColor}14;
    filter: drop-shadow(0px 5px 20px ${({ theme }) => theme.colors.blackColor}0d);
    border-radius: 20px;
    img {
      width: 100%;
    }
  }
  .chose-us-small-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-top: -140px;
    &.mobile{
      display: none;
    }
    .chose-us-img1 {
      margin-top: 0px;
      width: 50%;
    }
    .chose-us-img2 {
      width: 100%;
      margin-left: auto;
      margin-top: 70px;
      width: 50%;
    }
  }

  @media screen and (max-width: 991px) {
    .chose-us-small-img{
      &.mobile{
        display: flex;
        margin-top: 0;
      }
      &.desktop{
        display: none;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .sass-choose-us-text {
      margin-top: 60px;
    }
    .sidebar__inner {
      width: 500px !important;
      position: inherit !important;
    }
  }
  @media screen and (max-width: 575px) {
    .sidebar__inner {
      width: 380px !important;
    }
  }
  @media screen and (max-width: 425px) {
    .sidebar__inner {
      width: 320px !important;
    }
  }
`;

export default SassTwoChoosStyle;
