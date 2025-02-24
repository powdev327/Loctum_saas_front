import styled from "styled-components";

import BgImg from "../../../assets/images/footer/footer-testimonial-bg.svg";
import TestimonialBgImg from "../../../assets/images/accounting/footer-testimonial-bg.png";

const AccStartFreeStyle = styled.section`
  background: url(${BgImg});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  min-height: 551px;
  margin-bottom: 107px;
  .footer-testimonial-left {
    padding-top: 35px;
    h4 {
      margin-top: 55px;
      margin-bottom: 61px;
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 24px;
      font-weight: 700;
      line-height: 45px;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 583px;
    }
    form {
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 35px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.textColor};
        padding: 10px 14px;
        height: 100%;
        width: 100%;
        max-width: 296px;
        border: none;
        outline: none;

        &::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: ${({ theme }) => theme.colors.title};
          /* Firefox */
        }

        &:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: ${({ theme }) => theme.colors.title};
        }

        &::-ms-input-placeholder {
          /* Microsoft Edge */
          color: ${({ theme }) => theme.colors.title};
        }
      }
      button {
        background: ${({ theme }) => theme.colors.btnColor};
        color: ${({ theme }) => theme.colors.btnTextColor};
        padding: 12px 24px;
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        font-weight: 700;
        line-height: 26px;
        border-radius: 25px;
        min-width: max-content;
        transition: 0.5s;
      }
    }
    &.v8 {
      padding-top: 60px;
      padding-bottom: 88px;
      form {
        button {
          background: ${({ theme }) => theme.colors.v8Title2};
          color: ${({ theme }) => theme.colors.v8SeconderyColor};
          &:hover {
            color: ${({ theme }) => theme.colors.whiteColor};
            background: ${({ theme }) => theme.colors.v8SeconderyColor};
          }
        }
      }
    }
    ul {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      max-width: 370px;
      width: 100%;
      margin-top: 16px;
      li {
        width: 50%;
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 14px;
        font-weight: 500;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.whiteColor};
        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
          margin-right: 11px;
          font-size: 18px;
        }
      }
    }
  }
  .footer-testimonial-right {
    text-align: right;
    position: absolute;
    right: 15px;
    bottom: 0;
    .footer-testimonial-right-text {
      text-align: left;
      position: absolute;
      left: 120px;
      bottom: 120px;
      h5 {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      p {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }
  &.v8 {
    background: url(${TestimonialBgImg});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
    min-height: auto;
    margin-bottom: 107px;
    .footer-testimonial-icon {
      opacity: 0;
    }
  }

  @media screen and (max-width: 1199px) {
    .footer-testimonial-left form button {
      padding: 12px 22px;
    }
  }
  @media screen and (max-width: 991px) {
    .footer-testimonial-right .footer-testimonial-right-text {
      left: 35px;
    }
    &.v8 {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .footer-testimonial-right {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      height: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    .footer-testimonial-right .footer-testimonial-right-text {
      bottom: 50px;
    }
    .footer-testimonial-left h4 {
      line-height: 36px;
    }
    .footer-testimonial-left {
      margin-bottom: 50px;
    }
    .footer-testimonial-left h4 {
      font-size: 18px;
      margin-bottom: 25px;
    }
    .footer-testimonial-left form button {
      padding: 8px 18px;
    }
    .footer-testimonial-right {
      position: static;
    }
    .footer-testimonial-left.v8 {
      padding-top: 10px;
      padding-bottom: 0;
    }
  }
  @media screen and (max-width: 425px) {
    .footer-testimonial-left ul {
      display: block;
    }
    .footer-testimonial-left ul li {
      width: 100%;
    }
  }
`;

export default AccStartFreeStyle;
