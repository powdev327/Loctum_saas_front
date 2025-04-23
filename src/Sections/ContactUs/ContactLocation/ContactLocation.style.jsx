import styled from "styled-components"

const ContactLocationStyle = styled.section`
    padding: 130px 0 0;

    .container-title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        .description {
            font-size: 15px;
        }
        
        .badge-title{
            border-radius: 0px 20px 0px 0px;
            background-color: #fec458;
            padding: 0px 10px 4px 10px;
        }
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        padding: 40px 0;
    }

    .contact-card {
        flex: 1;
        min-width: 400px;
        max-width: 390px;
        background-color: ${({theme}) => theme.colors.whiteColor || "#ffffff"};
        border-radius: 24px;
        overflow: hidden;
        /*
        box-shadow: 0 20px 50px rgba(8, 112, 184, 0.07);
        */
        border: 1px solid #e5e5e5;
        transition: all 0.3s ease;


    }

    .card-accent {
        height: 7px;
        background: linear-gradient(to right, #0095FF, #0095FF);
    }

    .card-content {
        padding: 30px;
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 24px;

        h4 {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin: 0;
        }
    }

    .icon-container {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e5e5e5;

        img {
            width: 24px;
            height: 24px;
        }
    }

    .card-details {
        padding-left: 8px;
    }

    .address {
        color: #666;
        line-height: 1.6;
        margin-bottom: 16px;
    }

    .contact-info {
        color: #666;
        margin-bottom: 12px;
        transition: color 0.2s ease;
        cursor: pointer;

        &:hover {
            color: #0095FF;
        }
    }


    @media screen and (max-width: 767px) {
        .cards-container {
            gap: 20px;
            padding: 20px 0;
        }

        .card-content {
            padding: 20px;
        }

        .icon-container {
            width: 48px;
            height: 48px;
        }

        .card-header h4 {
            font-size: 18px;
        }
    }
`

export default ContactLocationStyle
