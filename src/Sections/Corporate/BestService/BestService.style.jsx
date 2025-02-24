import styled from "styled-components";

import MapImg from "../../../assets/images/corporate/map.svg";
import PrevImg from "../../../assets/images/corporate/icon-prev.svg";
import NextImg from "../../../assets/images/corporate/icon-next.svg";
import Icon1 from "../../../assets/images/corporate/card-footer-icon1.svg";
import Icon2 from "../../../assets/images/corporate/card-footer-icon2.svg";

const BestServiceStyleWrapper = styled.section`
  background: #eef2f5;

  .overlay {
    padding: 140px 0px;
    background: url(${MapImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .slick-prev {
    left: -284px;
    top: 315px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.blackColor}1a;
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: url(${PrevImg});
      filter: brightness(0);
      opacity: 20%;
    }
    &:hover {
      border: 2px solid #5ecc62;
      &::before {
        filter: none;
        opacity: 100%;
      }
    }
  }
  .slick-next {
    left: -214px;
    top: 315px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.blackColor}1a;
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: url(${NextImg});
      filter: brightness(0);
      opacity: 20%;
    }
    &:hover {
      border: 2px solid #5ecc62;
      &::before {
        filter: none;
        opacity: 100%;
      }
    }
  }

  .best-services-left {
    p {
      max-width: 271px;
      width: 100%;
    }
  }

  .best-services-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    transition: 0.3s;
    &::before {
      content: url(${Icon1});
      position: absolute;
      bottom: -11px;
      right: 0px;
      filter: brightness(0);
      opacity: 15%;
      transition: 0.3s;
    }
    &::after {
      content: url(${Icon2});
      position: absolute;
      bottom: -11px;
      right: 0px;
    }
    &:hover {
      &::before {
        filter: none;
        opacity: 100%;
      }
    }
  }
  .best-services-img {
    img {
      width: 100%;
    }
  }
  .best-services-text {
    padding: 24px 30px 30px 30px;
    h5 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 0px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 1199px) {
    .slick-prev {
      left: -225px;
    }

    .slick-next {
      left: -145px;
    }
    .best-services-text {
      padding: 25px 20px;
    }
  }
  @media screen and (max-width: 991px) {
    .overlay {
      padding: 120px 0px;
    }
    .best-services-left {
      margin-bottom: 30px;
    }
    .best-services-text {
      padding: 25px 20px;
    }
  }
  @media screen and (max-width: 767px) {
    .overlay {
      padding: 70px 0px 80px 0px;
    }
  }
`;

export default BestServiceStyleWrapper;
