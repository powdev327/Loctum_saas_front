import styled from "styled-components";

const FinanceLetsTalkStyle = styled.section`
  margin: 140px 0px;
  .lets-talk-content {
    background: ${({ theme }) => theme.colors.v6templateColor};
    border-radius: 30px;
    padding: 0px 70px;
    overflow: hidden;
  }
  .lets-talk-text {
    padding: 54px 0px 70px 0px;
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 34px;
    }
    a {
    }
  }
  .lets-talk-img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
  }

  @media screen and (max-width: 1199px) {
    margin: 80px 0px;
    .lets-talk-text {
      h3 {
        font-size: 33px;
        line-height: 50px;
        margin-bottom: 30px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .lets-talk-text {
      h3 {
        font-size: 23px;
        line-height: 35px;
        margin-bottom: 20px;
      }

      .lets-talk-btn {
        width: 130px;
        height: 45px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    margin-bottom: -30px;
    .lets-talk-text h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: -40px;
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2 {
      font-size: 36px;
      line-height: 45px;
    }
  }
  @media screen and (max-width: 575px) {
    margin-bottom: -60px;
    .lets-talk-text .lets-talk-btn {
      margin: auto;
    }
    .lets-talk-content {
      padding: 0px 30px;
      text-align: center;
    }
    .lets-talk-img {
      justify-content: center;
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

export default FinanceLetsTalkStyle;
