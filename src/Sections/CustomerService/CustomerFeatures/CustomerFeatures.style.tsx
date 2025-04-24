import styled from "styled-components";

const CustomerFeaturesStyleWrapper = styled.section`
  .index2-features-card {
    background: ${({ theme }) => theme.colors.blueGray};
    border-radius: 30px;
    padding: 112px 100px;
    margin-top: 100px;
  }
  .contents-text {
    &2 {
      padding-left: 20px;
    }
    &4 {
      padding-left: 20px;
    }
    & h4 {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 800;
      line-height: 26px;
      margin-bottom: 19px;
      & span {
        margin-right: 13px;
      }
    }
  }
  /*-- index2-features-card End --*/

  @media screen and (max-width: 1199px) {
    .index2-features-card {
      padding: 100px 60px;
    }
  }
  @media screen and (max-width: 991px) {
    .index2-features-card {
      padding: 80px 60px;

      .features2-contents {
        margin-top: 40px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .index2-features-card {
      margin-top: 50px;
      padding: 50px 30px;
    }
    .contents-text {
      &2 {
        padding-left: 0px;
      }
      &4 {
        padding-left: 0px;
      }
    }
    .contents-text {
      text-align: left !important;

      & h4 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .index2-features-card {
      padding: 50px 30px;
    }
  }
`;

export default CustomerFeaturesStyleWrapper;
