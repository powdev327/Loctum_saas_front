import styled from "styled-components";

const ManageAssetStyle = styled.section`
  margin: 140px 0px;
  .manage-asset-right {
    p {
      color: ${({ theme }) => theme.colors.whiteColor}cc;
      margin-bottom: 44px;
    }
    a {
      max-width: 212px;
      width: 100%;
      height: 60px;
      background: ${({ theme }) => theme.colors.whiteColor}33;
      border-radius: 50px;
      padding: 17px 31px;
      font-weight: 700;
      font-size: 15px;
      line-height: 26px;
      text-align: center;
      color: ${({ theme }) => theme.colors.whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0px;
      transition: 0.3s;
      img {
        margin-left: 20px;
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin: 80px 0px;
    .manage-asset-left {
      margin-bottom: 40px;
    }
  }
`;

export default ManageAssetStyle;
