import styled from "styled-components";

const TeamMainFeatureStyle = styled.section`
    padding: 100px 0 35px 0;
    position: relative;
    z-index: 0;

    .shape-img {
        position: absolute;
        z-index: 11;

        &.img-1 {
            bottom: 80px;
            left: 37%;
        }

        &.img-2 {
            bottom: 43%;
            right: 37%;
        }
    }

/*-- main-feature-card style --*/
.main-feature-card {
    height: calc(100% - 30px);
    margin-bottom: 30px;
    position: relative;
    z-index: 0;
    border-radius: 30px;
    padding: 40px 30px;

    &.card-1 {
        background-color: ${({ theme }) => theme.colors.bodyBG2}cc;
    }
    &.card-2 {
        background-color: #f8f0e6cc;
    }

    &.card-3 {
        background-color: #f8f0e6cc;
    }

    .overlay {
        position: absolute;
        z-index: -1;
        top: 40px;
        right: 30px;
    }

    &-content {
        img {
            width: 30px;
            height: 30px;
            margin-bottom: 16px;
        }
        h2 {
            margin-bottom: 12px;
            font-size: 18px;
    font-weight: 700;
    line-height: 30px;
            color: ${({ theme }) => theme.colors.blackColor};
        }
    }
}
/*-- main-feature-seciton end --*/


@media screen and (max-width: 1699px){
        .shape-img {
            &.img-1 {
                bottom: 80px;
                left: 35%;
            }

            &.img-2 {
                bottom: 43%;
                right: 35%;
            }
        }
}

@media screen and (max-width: 1499px){
        .shape-img {
            &.img-1 {
                bottom: 80px;
                left: 31%;
            }

            &.img-2 {
                bottom: 43%;
                right: 31%;
            }
        }
}

@media screen and (max-width: 1199px){
        .shape-img {
            &.img-1 {
                bottom: 80px;
                left: 31%;
            }

            &.img-2 {
                bottom: 47%;
                right: 30%;
            }
        }
}
@media screen and (max-width: 991px){
    .shape-img {
            display: none;
        }
    .hero-section-3 {
        padding-top: 80px;
    }
}


`;

export default TeamMainFeatureStyle;