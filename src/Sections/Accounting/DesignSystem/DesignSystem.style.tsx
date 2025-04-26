import styled from "styled-components";

const DesignSystemStyle = styled.section`
  .design-system-sticky {
    position: relative;

    .design-system-section {
      z-index: 1;
      background: #f4f5f8;
      padding-top: 132px;
      padding-bottom: 60px;
      width: 100% !important;
    }

    &.active {
      height: 870px;

      .design-system-section {
        position: fixed;
        top: 20px;
        left: 0px;
      }
    }
  }
  .design-system-img {
    text-align: center;
    max-width: 870px;
    width: 100%;
    margin: auto;
    margin-top: 54px;
  }
  .v8-seroll-content {
    position: relative;
    z-index: 2;
    background: ${({ theme }) => theme.colors.whiteColor};
  }

  @media screen and (max-width: 991px) {
    .design-system-sticky {
      .design-system-section {
        padding-top: 72px;
      }
    }
  }
`;

export default DesignSystemStyle;
