import styled from "styled-components";

const SassTwoTestimonialsStyle = styled.section`
  padding: 140px 0;

  /*-- testimonial-card style --*/
  .testimonial-card {
    border-radius: 50px;
    background-color: #041527;
    display: flex;
    align-items: center;
    position: relative;
    &-left,
    &-right {
      padding: 40px;
      width: 50%;
      height: 530px;
      flex: 0 0 auto;
    }
    &-left {
      text-align: center;
      position: relative;
      overflow: hidden;
      z-index: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.whiteColor}0a;
      }

      .shape-img {
        position: absolute;
        z-index: -1;
        &.img-1 {
          top: 49px;
          left: 0;
        }
        &.img-2 {
          bottom: 0;
          left: 96px;
        }
        &.img-3 {
          top: 40%;
          right: 0;
        }
        &.img-4 {
          top: 70px;
          right: 65px;
          .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      .sass-testimonials-shapes {
        .shape1 {
          position: absolute;
          left: 0px;
          top: 145px;
        }
        .shape2 {
          position: absolute;
          left: 40px;
          bottom: 71px;
          transition: 0.3s;
        }
        .shape3 {
          position: absolute;
          right: 40px;
          top: 67px;
        }
        .shape4 {
          position: absolute;
          right: 0px;
          bottom: 123px;
          z-index: 11;
          transition: 0.3s;
        }
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .testimonial-slider-img {
      img {
        width: 270px;
        height: 350px;
        border-radius: 135px;
      }
    }

    .slider-img {
      img {
        width: 270px;
        height: 350px;
        border-radius: 135px;
      }
    }

    .slider-counter-box {
      position: absolute;
      bottom: 86px;
      right: 70px;
    }
  }

  /*-- testimonial-title style --*/
  .testimonial-title {
    margin-bottom: 40px;
    h3 {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 0.2em;
      margin-bottom: 16px;
    }
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      svg {
        color: ${({ theme }) => theme.colors.badgeColor};
      }
    }
  }

  /*-- testimonial-slider style --*/
  .testimonial-slider-nav {
    .slick-list {
      padding: 0 !important;
    }
    .slick-arrow {
      display: none !important;
    }
    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
      .slick-slide {
        display: none;
        &.slick-current {
          display: block !important;
          left: 0px !important;
        }
      }
    }

    .slider-item {
      position: relative;
      overflow: hidden;
      width: 270px !important;
      height: 350px !important;
      border-radius: 135px;
      background-color: ${({ theme }) => theme.colors.whiteColor}14;
      transition: 0.3s;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .testimonial-slider-for {
    .slider-item {
      p {
        margin-bottom: 35px;
        font-size: 18px;
        line-height: 36px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      .author-info {
        color: ${({ theme }) => theme.colors.whiteColor};
        .name {
          font-weight: 700;
          margin-right: 10px;
        }
      }
      .slider-item-user {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
      }
    }

    .slider-info {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .slider-counter {
      p {
        color: ${({ theme }) => theme.colors.whiteColor};
        letter-spacing: 5px;
        margin-bottom: 0;
      }
    }

    .slider-arrow {
      cursor: pointer;
      svg {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }

  .slider-info {
    position: relative;
    z-index: 10;
    width: fit-content;
    margin-top: -30px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    .slider-arrow {
      cursor: pointer;
      svg {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }

    .slider-counter {
      p {
        color: ${({ theme }) => theme.colors.whiteColor};
        margin-bottom: 0;
      }
    }
  }

  .testimonial-slider {
    .slider-item {
      .slider-img {
        display: none !important;
      }
      p {
        margin-bottom: 35px;
        font-size: 18px;
        font-weight: 500;
        line-height: 36px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      h2 {
        font-size: 15px;
        font-weight: 700;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      h3 {
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }

    .slider-item-user {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .owl-nav {
      margin-top: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      gap: 50px;
      button {
        margin: 0 !important;
        svg {
          font-size: 20px;
          color: ${({ theme }) => theme.colors.whiteColor};
        }
        &:hover {
          background: transparent !important;
        }
      }
    }
  }

  @media screen and (max-width: 1499px) {
    .testimonial-slider {
      .slider-item {
        p {
          font-size: 15px;
          line-height: 28px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .testimonial-card {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      &-left,
      &-right {
        width: 100%;
        min-height: 530px;
        height: unset;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 60px 0px 60px;
    .testimonial-slider {
      .owl-nav {
        margin-top: 0px;
        bottom: -30px;
        right: unset;
        left: 0;
        gap: 20px;
      }
    }
    .testimonial-card {
      .slider-counter-box {
        display: none;
        bottom: 43px;
        right: unset;
        left: 60px;
      }
      &-left {
        .shape-img {
          &img-4 {
            top: auto;
            bottom: 19px;
            left: 36px;
            right: auto;
          }
        }
      }
    }
    .testimonial-card {
      &-left {
        min-height: auto;
        padding: 50px 20px 100px 20px;
      }
      &-right {
        min-height: auto;
        padding: 42px 20px 44px 20px;
      }
    }
    .testimonial-title {
      margin-bottom: 17px;
      h3 {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 9px;
      }
      h2 {
        font-size: 32px;
        line-height: 50px;
      }
    }
    .testimonial-slider-for .slider-item p {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 23px;
    }
    .testimonial-slider-for .slider-info {
      position: relative;
      justify-content: center;
      margin-top: 15px;
    }

    .slider-info {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media screen and (max-width: 480px) {
    .testimonial-card {
      &-left,
      &-right {
        padding: 30px 20px 40px;
      }

      &-left .shape-img.img-4 {
        top: 20px;
        right: 33px;
      }
    }
    .testimonial-slider-for {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .slider-info {
        position: relative;
      }
    }
    .testimonial-slider-for .slider-info {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;

export default SassTwoTestimonialsStyle;
