import styled from "styled-components";

const SassWhyChoseUsStyle = styled.section`
  padding-top: 132px;
  padding-bottom: 126px;

  .why-chose-us-content {
    margin-top: 40px;
    .why-chose-us-card {
      padding: 44px 20px;
      width: 100%;
      text-align: center;
      border-radius: 30px;
      overflow: hidden;
      &.active {
        background: ${({ theme }) => theme.colors.cardBg};
      }
      h5 {
        margin-bottom: 24px;
        font-weight: 700;
      }
      p {
        max-width: 330px;
        width: 100%;
        margin: auto;
        margin-bottom: 47px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0px 40px 0px;
    .why-chose-us-content {
      margin-top: 0px;
      .why-chose-us-card {
        padding: 30px 20px;
        p {
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export default SassWhyChoseUsStyle;
