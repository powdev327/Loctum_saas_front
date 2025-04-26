import styled from "styled-components";

const TopNotchStyle = styled.section`
  padding: 100px 0px;
  .top-notch-features-content{
    padding-top: 30px;
  }
  .top-notch-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid #e4e4e4;
    border-radius: 15px;
    margin-bottom: 30px;
    padding: 30px;
    transition: 0.3s;
    cursor: pointer;
    min-height: 100%;
    &:hover {
      box-shadow: 0px 20px 50px ${({ theme }) => theme.colors.blackColor}1a;
      border-radius: 15px;
      border: 1px solid transparent;
    }
    h5 {
      margin-bottom: 15px;
      margin-top: 30px;
    }
    p {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px 48px 0px;
  }
`;

export default TopNotchStyle;
