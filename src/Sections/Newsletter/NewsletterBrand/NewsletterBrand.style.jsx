import styled from "styled-components";

const NewsletterBrandStyle = styled.section`
  padding: 60px 20px;
  .container {
    position: relative;
  }

  /*-- brands-section-title style --*/
  .brands-section-title {
    margin-bottom: 25px;
    text-align: left;
    position: absolute;
    left: 0px;
    top: 2px;
    background: #eef2f5;
    z-index: 2;
    padding-right: 30px;

    h2 {
      font-size: 18px;
      font-weight: 600;
      line-height: 30px;
    }
  }

  /*-- brands-slider style --*/
  .brands-slider {
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;

    &-container {
      width: calc(200px * 12);
      display: flex;
      align-items: center;
      gap: 0px;
      animation: smoothSlider 25s infinite linear;
    }
    .slider-item {
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &::before {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      left: 0;
      width: 120px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(-180deg);
    }

    &::after {
      position: absolute;
      z-index: 1;
      content: "";
      top: 0;
      right: 0;
      width: 120px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &.newslater {
      height: 36px;
      &::before {
        left: 285px;
        background: linear-gradient(
          270deg,
          #eef2f5 0%,
          rgba(238, 242, 245, 0) 100%
        );
        transform: rotate(180deg);
      }
      &::after {
        background: linear-gradient(
          270deg,
          #eef2f5 0%,
          rgba(238, 242, 245, 0) 100%
        );
      }
      .slider-item {
        height: 36px;
        max-width: 178px;
        img {
          max-width: 105px;
        }
      }
    }
  }
  @keyframes smoothSlider {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 6));
    }
  }

  @media screen and (max-width: 767px) {
    &.newslater {
      padding: 40px 20px;
      .brands-section-title {
        position: inherit;
      }
    }
  }

  @media screen and (max-width: 374px) {
    .brands-section-title h2 {
      font-size: 16px;
    }
  }
`;

export default NewsletterBrandStyle;
