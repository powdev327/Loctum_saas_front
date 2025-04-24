import styled from "styled-components";

const WhyChoseStyleWrapper = styled.section`
  padding-bottom: 132px;
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.colors.whiteColor};
  .choose-us-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    .choose-us-text {
      max-width: 310px;
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 90px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 70px;
    .choose-us-content {
      flex-direction: column;
      .choose-us-text {
        gap: 30px;
        max-width: 355px;
        .text-right{
          text-align: left !important;
        }
      }
    }
  }
`;

export default WhyChoseStyleWrapper;
