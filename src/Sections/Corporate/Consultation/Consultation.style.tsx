import styled from "styled-components";

import BgImg from "../../../assets/images/corporate/consultation-bg.png";
import DropdownImg from "../../../assets/images/corporate/dropdown-icon.svg";

const ConsultationStyleWrapper = styled.section`
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 140px;
  .consultation-card {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 30px 30px 0px 0px;
    overflow: hidden;
  }
  .consultation-left {
    width: 100%;
    height: 100%;
    padding: 82px 60px;
    background: linear-gradient(90deg, #3bb864 0%, #94ce69 100%);
    border-radius: 30px 0px 0px 0px;
  }

  .consultation-img {
    margin-bottom: 46px;
  }
  .consultation-form {
    padding: 91px 60px 91px 30px;
    form {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      label {
        font-weight: 500;
        font-size: 15px;
        line-height: 30px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 5px;
      }
      input {
        border: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
        border-radius: 10px;
        height: 50px;
        width: 100%;
        overflow: hidden;
        outline: none;
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.title};
        padding: 10px 15px;
        margin-bottom: 25px;
      }
    }
  }

  .consultation-dropdown {
    position: relative;
    width: 100%;
    &::after {
      content: "";
      position: absolute;
      right: 20px;
      top: 20px;
      width: 18px;
      height: 18px;
      background-image: url(${DropdownImg});
      background-repeat: no-repeat;
    }
    select {
      border: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
      border-radius: 10px;
      height: 50px;
      width: 100%;
      overflow: hidden;
      outline: none;
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.title};
      padding: 10px 15px;
      margin-bottom: 40px;
      -webkit-appearance: none;
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 110px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 80px;
    .consultation-form {
      padding: 60px 30px;
    }
    .consultation-left {
      padding: 60px 30px;
    }
  }
`;

export default ConsultationStyleWrapper;
