import styled from "styled-components";

import BgImg from "../../../assets/images/corporate/testimonial-bg.jpg";
import PrevImg from "../../../assets/images/corporate/icon-prev.svg";
import NextImg from "../../../assets/images/corporate/icon-next.svg";
import QuoteImg from "../../../assets/images/corporate/quotes-bg.png";

const CorporateTestiminialsStyle = styled.section`
  background: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  z-index: 2;
  background-attachment: fixed;

  .corporate-testimonial-bg {
    position: absolute;
    height: 150%;
    width: 100%;
    left: 0px;
    top: -100px;
    z-index: 0;
    object-fit: cover;
    transition: 0.3s;
  }
  .overlay {
    padding-top: 140px;
    padding-bottom: 130px;
    background: rgba(16, 23, 34, 0.8);
    position: relative;
    z-index: 2;
    .slick-initialized .slick-slide {
      text-align: center;
    }
  }

  .slick-prev {
    top: 60%;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: url(${PrevImg});
      filter: brightness(100);
    }
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.whiteColor};
    }
  }
  .slick-next {
    top: 60%;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: url(${NextImg});
      filter: brightness(100);
    }
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.whiteColor};
    }
  }

  .corporate-testiminials-content {
    text-align: center;
    max-width: 700px;
    margin: auto;
    .clint-img {
      position: relative;
      height: 173px;
      width: 150px;
      padding: 25px;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      margin: auto;
      background: url(${QuoteImg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      margin-bottom: 42px;
      .clint-img-inner {
        position: relative;
        overflow: hidden;
        height: 100px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background: ${({ theme }) => theme.colors.whiteColor};
        border-radius: 50%;
        img {
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
    }
    p {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 30px;
    }
    h5 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      font-family: ${({ theme }) => theme.fonts.dmSans};
      color: ${({ theme }) => theme.colors.whiteColor};
      line-height: 30px;
      margin-bottom: 0px;
      span {
        font-size: 15px;
        font-weight: 500;
        opacity: 80%;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .overlay {
      padding: 110px 0px;
    }
  }
  @media screen and (max-width: 767px) {
    .corporate-testiminials-content {
      p {
        font-size: 16px;
      }
    }
    .overlay {
      padding: 80px 0px;
    }
  }
`;

export default CorporateTestiminialsStyle;
