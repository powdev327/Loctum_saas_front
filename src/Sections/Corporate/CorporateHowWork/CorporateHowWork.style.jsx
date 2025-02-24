import styled from "styled-components";

const CorporateHowWorkStyle = styled.section`
  padding: 132px 0px 102px 0px;
  background: #101722;
  
  .how-it-work-content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    h2 {
      margin-right: 15px;
      font-weight: 800;
      font-size: 50px;
      line-height: 100%;
      text-transform: uppercase;
      background: linear-gradient(
        90deg,
        rgba(48, 215, 241, 0.5) 0%,
        rgba(121, 250, 75, 0.5) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .how-it-work-text {
    max-width: 263px;
    margin-bottom: 30px;
    h5 {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight: 800px;
    }
    p {
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.whiteColor}cc;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 110px 0px 82px 0px;
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px 50px 0px;
  }
`;

export default CorporateHowWorkStyle;
