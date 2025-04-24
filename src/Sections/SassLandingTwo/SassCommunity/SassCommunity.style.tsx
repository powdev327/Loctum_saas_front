import styled from "styled-components";

import CheckImg from "../../../assets/images/icons/list-check.svg";

const SassCommunityStyle = styled.section`
  position: relative;
  img {
    &.obj-left {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
    &.obj-right {
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
  }
  .community-content {
    text-align: center;
    z-index: 2;
    position: relative;
    .community-img {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 2px solid ${({ theme }) => theme.colors.blackColor}1a;
      height: 100px;
      width: 100px;
      margin: auto;
      margin-bottom: 40px;
      border-radius: 50%;
    }
    h2 {
      font-size: 700;
      margin-bottom: 50px;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 470px;
      padding: 10px;
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      box-shadow: 0px 15px 20px ${({ theme }) => theme.colors.blackColor}1a;
      border-radius: 35px;
      margin: auto;
      margin-bottom: 36px;
      input {
        border: none;
        outline: none;
        max-width: 100%;
        overflow: hidden;
        &[type="text"] {
          background: transparent;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          color: ${({ theme }) => theme.colors.title};
          padding: 7px 13px;

          &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${({ theme }) => theme.colors.title};
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
        &[type="submit"] {
          background: #0555ff;
          border-radius: 25px;
          font-weight: 700;
          font-size: 15px;
          line-height: 26px;
          text-align: center;
          color: ${({ theme }) => theme.colors.whiteColor};
          height: 50px;
          width: 140px;
        }
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: url(${CheckImg});
      li {
        color: ${({ theme }) => theme.colors.title};
        font-weight: 600;
        font-size: 16px;
        margin-right: 50px;
        &:nth-last-child(1) {
          margin-right: 0px;
        }
      }
    }
  }

  .sass-testimonial-seciton {
    .testimonial-card {
      background-color: #041527;
    }
  }

  @media screen and (max-width: 1280px) {
    img {
      opacity: 30%;
    }
  }

  @media screen and (max-width: 767px) {
    .community-content {
      h2 {
        font-size: 32px;
      }
      ul {
        flex-wrap: wrap;
      }
    }
  }
`;

export default SassCommunityStyle;
