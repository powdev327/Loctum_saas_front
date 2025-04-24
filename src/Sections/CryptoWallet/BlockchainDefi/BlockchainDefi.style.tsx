import styled from "styled-components";

const BlockchainDefiStyle = styled.section`
    margin-bottom: 110px;
.blockchain-defi-card{
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    min-height: 100%;
    &.defi-card{
        padding: 59px 50px; 
    }
    &.blockchain-card{
        padding: 50px 50px 46px 50px;
    }
    h3{
        margin-bottom: 24px;
        max-width: 332px;
        color: ${({ theme }) => theme.colors.whiteColor};
        position: relative; 
        z-index: 2;
        span{
            color: #01FFB0;
        }
    }
    p{
        color: ${({ theme }) => theme.colors.whiteColor}cc;
        position: relative; 
        z-index: 2;
        max-width: 398px;
    }
    .blockchain{
        margin-bottom: 28px;
        position: relative;
        z-index: 2;
    }
    .blur{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 0;
    }
    .graph-img{
        position: absolute;
        bottom: 0px;
        right: 0px;
        z-index: 0;
    }
    .code-bg{
        width: 90%;
        height: 90%;
        left: 5%;
        bottom: 5%;
        position: absolute;
        z-index: 1;
    }
    
}

@media screen and (max-width: 767px){
        margin-bottom: 50px;
    .blockchain-defi-card {
        .graph-img{
            opacity: 0.5;
        }
    }
}


`; 

export default BlockchainDefiStyle;
