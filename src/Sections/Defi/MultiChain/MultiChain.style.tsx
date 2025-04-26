import styled from "styled-components";

const MultiChainStyle = styled.div`
  margin-top: 59px;
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteColor};
    text-transform: uppercase;
    margin-bottom: 9px;
  }
  .multi-chain-card {
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    backdrop-filter: blur(10px);
    border-radius: 150px;
    padding: 20px 0px;
    overflow: hidden;
  }

  .multi-chain-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
    &1 {
      animation: smoothSlider 32s infinite linear;
    }
    &2 {
      animation: smoothSlider 25s infinite linear;
    }
    &3 {
      animation: smoothSlider 15s infinite linear;
    }
    &4 {
      animation: smoothSlider 22s infinite linear;
    }
    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li {
        margin-right: 20px;
        padding: 10px;
        background: ${({ theme }) => theme.colors.whiteColor}0d;
        border: 1px solid ${({ theme }) => theme.colors.whiteColor}14;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: max-content;
        .coin-img {
          height: 30px;
          width: 30px;
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          margin-right: 9px;
          img {
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }
        span {
          color: ${({ theme }) => theme.colors.whiteColor}cc;
        }
      }
    }
  }
  .scrollerWrapper {
    overflow: hidden;
    *position: relative;
  }

  .scroller {
    position: relative;
    white-space: nowrap;
    display: inline-block;
    display: flex;
    align-items: center;
    .slid-content {
      display: inline-block;
      *display: inline;
      white-space: normal;
      vertical-align: middle;
    }
  }

  .multi-chain-scroller-wrapper {
    overflow: hidden;
    *position: relative;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
  }

  .multi-chain-scroller {
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
    .multi-chain-slid-content {
      white-space: normal;
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 30px;
    .multi-chain-card {
      padding: 10px 0px;
    }
    .multi-chain-list {
      margin-bottom: 10px;
      ul {
        li {
          padding: 5px;
          margin-right: 10px;
          .coin-img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
  }
`;

export default MultiChainStyle;
