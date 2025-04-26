import styled from "styled-components";

const AppBenefitsStyle = styled.section`
  padding: 132px 0px;
  .app-benefits-row{
    padding-top: 30px;
  }
  .app-benefits-card {
    margin-bottom: 30px;
    border-radius: 30px;
    overflow: hidden;
  }
  .app-benefits-card-img {
    margin-bottom: 43px;
    padding: 60px 20px 0px 20px;
    text-align: center;
    width: 100%;
    overflow: hidden;
    &.account {
      background: ${({ theme }) => theme.colors.blueGray};
    }
    &.plan {
      background: #f8f0e6;
    }
    &.team {
      background: #f6eafe;
    }
  }
  .app-benefits-card-text {
    padding: 0px 30px;
    h5 {
      margin-bottom: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0px 40px 0px;
  }
`;

export default AppBenefitsStyle;
