import styled from "styled-components";

const FinanceDisclaimerStyle = styled.section`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 0;
  padding: 53px 0 60px 0;
  background-color: ${({ theme }) => theme.colors.v6BG};
  .disclaimer-text {
    font-family: ${({ theme }) => theme.fonts.dmSans};
    h6 {
      font-weight: 700;
      margin-bottom: 11px;
    }
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 30px 0px;
  }
`;

export default FinanceDisclaimerStyle;
