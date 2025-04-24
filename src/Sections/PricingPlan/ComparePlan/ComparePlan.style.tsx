import styled from "styled-components";

const ComparePlanStyle = styled.section`
  background: ${({ theme }) => theme.colors.whiteColor};
  padding-top: 115px;
  padding-bottom: 140px;

  .compare-plans-title {
    margin-bottom: 45px;
  }

  .compare-plans-table-section {
    .compare-plans-table {
      width: 100%;
      overflow-x: hidden;

      .table-header-sticky {
        background: ${({ theme }) => theme.colors.whiteColor};
        width: 100% !important;
        top: 0px !important;
        transition: 0.3s;

        &.sticky {
          position: fixed;
          z-index: 111;
          left: 0;
        }
      }

      ol {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        overflow: hidden;
        border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        margin: 0;
        li {
          padding-bottom: 10px;
          vertical-align: bottom;
          width: 18%;
          min-width: 210px;
          margin-top: 33px;
          padding: 0px 30px 10px 30px;
          padding-top: 11px;
          display: block;
          &:nth-child(1) {
            width: 46%;
            padding-left: 0px;
          }

          &:nth-last-child(2) {
            background: rgba(0, 0, 0, 0.03);
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }

          h5 {
            font-family: ${({ theme }) => theme.fonts.dmSans};
            text-transform: uppercase;
            span {
              text-transform: lowercase;
              font-size: 12px;
              margin-left: 13px;
            }
          }

          button {
            max-width: 150px;
            width: 100%;
            height: 40px;
            border: 2px solid rgba(0, 149, 255, 0.3);
            border-radius: 50px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.primary};
            transition: 0.3s;
            position: relative;
            overflow: hidden;
            z-index: 0;
            margin: 10px 0px;

            &::before {
              position: absolute;
              z-index: -1;
              content: "";
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50px;
              background-color: ${({ theme }) => theme.colors.primary};
              transform: translateX(-100%);
              transition: 0.3s;
            }

            &:hover {
              border: 2px solid ${({ theme }) => theme.colors.primary};
              color: ${({ theme }) => theme.colors.whiteColor};

              &::before {
                transform: translateX(0%);
              }
            }
          }
        }
      }

      .table-body {
        margin-top: 0;
        ul {
          padding: 0;
          list-style: none;
          margin: 0;
          li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 50px;
            b {
              padding-bottom: 10px;
              padding-top: 33px;
              color: ${({ theme }) => theme.colors.title};
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .pricing-table-row {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        &:nth-child(1) {
          width: 46%;
          min-width: 210px;
          padding-left: 0px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        &:nth-child(2) {
          width: 18%;
          min-width: 210px;
          padding: 10px 30px;
        }
        &:nth-child(3) {
          width: 18%;
          min-width: 210px;
          padding: 10px 30px;
          background: rgba(0, 0, 0, 0.03);
        }
        &:nth-child(4) {
          width: 18%;
          min-width: 210px;
          padding: 10px 30px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .compare-plans-title {
      margin-bottom: 20px;
    }
    .compare-plans-table-section .compare-plans-table .table-body {
      overflow-y: auto;
    }
    .compare-plans-table-section {
      .compare-plans-title {
        margin-bottom: 0px;
      }

      .compare-plans-table {
        ol {
          li {
            min-width: 33%;
            max-width: 33%;
            padding: 15px;
            margin-top: 0px;
            background: transparent;

            &:nth-child(1) {
              display: none;
            }

            &:nth-last-child(2) {
              background: transparent;
            }

            &.active {
              background: rgba(0, 0, 0, 0.03);
            }
          }
        }

        .table-body {
          .table-col2,
          .table-col3,
          .table-col4 {
            background: rgba(0, 0, 0, 0.03);
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    padding-top: 70px;
    .compare-plans-table-section .compare-plans-table .table-body .table-col1 {
      width: 50%;
    }
    .compare-plans-table-section .compare-plans-table .table-body ul {
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 575px) {
    .compare-plans-table-section {
      .compare-plans-table {
        ol {
          li {
            h5 {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;

              & span {
                margin-left: 0px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .compare-plans-table-section {
      .compare-plans-table {
        ol {
          li {
            button {
              height: 30px;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;

export default ComparePlanStyle;
