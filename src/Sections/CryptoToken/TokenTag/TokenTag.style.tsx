import styled from "styled-components";

const TokenTagStyle = styled.div`
  padding: 140px 0px 121px 0px;
  .crypto-token-tag-inner {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .crypto-token-tag-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: smoothSlider 25s infinite linear;
    .tag {
      font-family: ${({ theme }) => theme.fonts.quantico};
      margin-right: 30px;
      padding: 0px 30px;
      font-weight: 700;
      font-size: 24px;
      line-height: 250%;
      text-transform: uppercase;
      text-align: center;
      color: ${({ theme }) => theme.colors.blackColor};
      border-radius: 50px;
      &.skyblue {
        background: #aee3fd;
      }
      &.skyblue2 {
        background: #adffeb;
      }
      &.skyblue3 {
        background: #ade5ff;
      }
      &.offwhite {
        background: #fff8e7;
      }
      &.pink {
        background: #ff7bca;
      }
      &.yellow {
        background: #f2dd09;
      }
      &.yellowgreen {
        background: #bfff0a;
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding: 100px 0px;
    .crypto-token-tag-list {
      .tag {
        padding: 0px 18px;
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px;
  }
`;

export default TokenTagStyle;
