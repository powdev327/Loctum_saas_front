import styled from "styled-components";

import BgImg from "../../../assets/images/newslater/newsletter-mashgrad.png";

const DevApiStyleWrapper = styled.section`
  background: #061121;
  margin-bottom: 47px;

  .developer-apis-left {
    padding-right: 50px;
    padding-top: 112px;
    margin-bottom: 112px;
    .developer-apis-text {
      p {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.whiteColor};
        margin-top: 35px;
        margin-bottom: 30px;
      }
    }
  }

  .developer-apis-right {
    background: ${({ theme }) => theme.colors.whiteColor}0a;
    height: 100%;
    width: 100%;
    padding: 120px 30px;
    position: relative;
    overflow: hidden;
    &::after {
      content: url(${BgImg});
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 0;
    }
    .developer-apis-tab-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 33px;
      border-bottom: none;
      position: relative;
      z-index: 1;
      border: none;
      .api-tab-btn {
        padding: 8px 19px;
        border: 1px solid ${({ theme }) => theme.colors.whiteColor}14;
        border-radius: 26px;
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.whiteColor};
        transition: 0.3s;
        cursor: pointer;

        &.react-tabs__tab--selected,
        &:hover {
          border: 1px solid ${({ theme }) => theme.colors.whiteColor}14;
          background: ${({ theme }) => theme.colors.whiteColor}14;
        }
      }
    }
  }

  .section-title2 {
    p {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.badgeColor};
      text-transform: uppercase;
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 363px;
    }
  }
  .developer-apis-tab-contents {
    position: relative;
    z-index: 2;
  }
  .developer-apis-notepad {
    .custom-textarea {
      position: relative;
      width: 100%;
      max-width: 90%;
      margin: auto;
      overflow: hidden;
      .textarea {
        display: block;
        position: relative;
        height: 288px;
        min-height: 288px;
        max-height: 288px;
        margin-left: 24px;
        outline: none;
        border: none;
        overflow-y: auto;
        word-wrap: normal;
        word-break: break-all;
        background: transparent;
        resize: none;
        overflow-x: none;
        font-family: ${({ theme }) => theme.fonts.firaCode};
        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.whiteColor};
        &::-webkit-scrollbar {
          display: none;
        }
      }

      .linenumbers {
        position: absolute;
        top: 0;
        left: 0;
        width: 16px;
        background: transparent;

        .number {
          font-family: ${({ theme }) => theme.fonts.firaCode};
          font-size: 13px;
          font-weight: 500;
          line-height: 24px;
          color: ${({ theme }) => theme.colors.whiteColor}4d;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        }
      }
    }
  }

  .variable {
    color: aqua;
  }
  .bracket1 {
    color: chartreuse;
  }
  .bracket2 {
    color: fuchsia;
  }
  .bracket3 {
    color: #1f14ff;
  }
  .bracket4 {
    color: #ecff8e;
  }
  .bracket5 {
    color: #26ffcc;
  }
  .bracket6 {
    color: #8bffb3;
  }
  .bracket7 {
    color: #ffbc3e;
  }
  .bracket8 {
    color: #7e00ed;
  }
  .class {
    color: ${({ theme }) => theme.colors.badgeColor};
  }
  .import {
    color: orangered;
  }
  .string {
    color: ${({ theme }) => theme.colors.btnColor};
  }
  .comment {
    color: #919090;
  }

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
    .developer-apis-left .developer-apis-text p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 50px;

    .developer-apis-left {
      padding: 50px 0px;
      margin-bottom: 0px;
      padding-right: 0px;
    }

    .developer-apis-right {
      padding: 50px 15px;
    }
  }
  @media screen and (max-width: 575px) {
    .developer-apis-right .developer-apis-tab-buttons .api-tab-btn {
      padding: 4px 8px;
      font-size: 13px;
    }
    .developer-apis-notepad .custom-textarea .textarea {
      width: 100%;
    }
  }
`;

export default DevApiStyleWrapper;
