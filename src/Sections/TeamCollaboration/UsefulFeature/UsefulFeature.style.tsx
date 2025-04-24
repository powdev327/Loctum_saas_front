import styled from "styled-components";

const UsefulFeatureStyleWrapper = styled.section`
    padding: 65px 0;
    .nav.nav-tabs {
        border-bottom: 0;
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        .nav-link {
            height: 50px;
            padding: 13px 28px;
            border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
            border-radius: 26px;
            background-color: transparent;
            text-transform: capitalize;
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            color: ${({ theme }) => theme.colors.blackColor};
            transition: 0.3s;
            &.active {
                border: 1px solid #e7f1fc;
                background-color: #e7f1fc;
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }

    .tab-content {
        margin-top: 45px;
    }

.useful-feature-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 30px;

    &-title {
        h3 {
            margin-bottom: 16px;
            text-transform: uppercase;
            font-size: 18px;
            line-height: 30px;
            color: ${({ theme }) => theme.colors.primary};
            letter-spacing: 0.2em;
        }
    }
}
.useful-feature-slider-nav {
    p {
        margin-bottom: 0;
    }
}
.useful-feature-slider-for .slider-item .list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.virtually-card .list .list-item svg {
    position: relative;
    top: -5px;
}

.useful-feature-tab-content {
    .item-text {
        margin-bottom: 30px;
        h2 {
            margin-bottom: 24px;
            font-size: 24px;
        }
    }
    .list {
        display: flex;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
        .list-item {
            img {
                width: 20px;
                height: 20px;
            }
            p {
                margin-top: 16px;
                color: ${({ theme }) => theme.colors.title};
            }
        }
    }
}

.useful-feature-slider-nav {
    .slick-list {
        padding: 0 !important;
        .slick-slide{
            width: min-content !important;
            &.slick-current {
                .slider-item {
                    color: ${({ theme }) => theme.colors.primary};
                    &::before {
                        opacity: 1;
                        animation: tabAnimate 6.5s linear;
                    }
                }
            }
        }
        
    }

    .slick-track {
        width: 100% !important;
        transform: translate3d(0px, 0px, 0px) !important;
        margin: 0 -10px;
        max-width: 800px !important;
        overflow: hidden;
        height: 80px;
    }

    .slider-item {
        margin: 10px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: max-content !important;
        height: 50px !important;
        padding: 13px 28px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-radius: 26px;
        background-color: transparent;
        text-transform: capitalize;
        font-weight: 700;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.blackColor};
        transition: 0.3s;

        &::before {
            position: absolute;
            z-index: -1;
            content: "";
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: #e7f1fc;
            opacity: 0;
            transition: 0.3s;
        }
    }
}

.useful-feature-slider-for {
    margin-top: 45px;

    .slider-item {
        display: flex !important;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        &-left,
        &-img {
            width: 48%;
        }
    }

    .slider-item-text {
        margin-bottom: 30px;
        h2 {
            margin-bottom: 24px;
            font-size: 24px;
        }
    }

    .slider-item .list {
        display: flex;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
        .list-item {
            img {
                width: 20px;
                height: 20px;
            }
            p {
                margin-top: 16px;
            }
        }
    }

    ol {
        padding: 0;
        list-style: none;
        max-width: 450px;
        li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 15px;
            svg {
                color: ${({ theme }) => theme.colors.iconColor};
                font-size: 18px;
                min-width: 20px;
                margin-top: 7px;
            }
        }
    }
}

@media screen and (max-width: 991px){
    padding-top: 10px;
    padding-bottom: 55px;
    .useful-feature-slider-nav {
        .slick-track {
            margin: 0 -7px;
        }

        .slider-item {
            margin: 7px;
            width: max-content !important;
            height: 50px !important;
            padding: 13px !important;
            min-width: max-content;
        }
    }
    .useful-feature-tab-img {
        margin-top: 30px;
    }

    .useful-feature-slider-for {
        margin-top: 40px;

        .slider-item {
            flex-direction: column;
            gap: 20px;

            &-left,
            &-img {
                width: 100%;
            }
        }
    }
}
@media screen and (max-width: 768px){
    .useful-feature-slider-nav {
        .slick-track{
            overflow: visible;
        }
    }
}
@media screen and (max-width: 575px){
    .useful-feature-header-title h2 {
        font-size: 30px;
    }
}
@media screen and (max-width: 480px){
    .useful-feature-header-title h2 {
        line-height: 50px;
    }
    .useful-feature-slider-for .slider-item .list .list-item p {
        margin-top: 6px;
    }
    .useful-feature-slider-for .slider-item .list {
        gap: 20px;
    }
}
@media screen and (max-width: 375px){
    
}

`;

export default UsefulFeatureStyleWrapper;