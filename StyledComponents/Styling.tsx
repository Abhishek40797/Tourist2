import styled from "styled-components";

const colors = {
    primaryColor : "#00BFFF",
    secondaryColor : "#FFF"
}

export const Wrapper = styled.div`
    width : 1200px;
    margin : auto;
`

export const Headers = styled.header`
    width : 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0%;
    padding : 10px 0;
    background-color : #FFF;
`

export const Logo = styled.img<{width:string}>`
    width : ${({width})=>width};
`

export const Button = styled.button<{bg:string,text:string}> `
    padding: 8px 30px;
    border-radius: 4px;
    border: 1px solid #00BFFF;
    color: ${({text})=>text};
    background-color : ${({bg})=>bg};
`

export const H3 = styled.h3`
    color : ${colors.primaryColor};
    text-align : center;
`

export const H4 = styled.div`
    font-size: 20px;
    cursor: pointer;
    color : ${colors.primaryColor}
`;

export const H5 = styled.h5`
    font-size: 15px;
`

export const I = styled.i<{color:string}>`

    color : ${({color})=> color}
`


export const BigTextSection = styled.div`
    width : 50%;
    p {
        padding : 30px 0 50px 0;
    }
`

export const H1 = styled.h1`
    border-left: 4px solid ${colors.primaryColor};
    font-size: 50px;
    font-weight: 700;
    color: ${colors.primaryColor};
    padding : 0 10px;
    line-height : 70px;
`;

export const Para = styled.p`
    font-weight : 400;
    font-size : 15px;
`

export const BigImages = styled.img`
    width: 500px;
    object-fit: cover;
    border-radius: 5px;
`

export const Button2 = styled.button`
    text-align : center;
    padding: 8px 90px;
    border-radius: 4px;
    background-color : #00BFFF;
    border : none;
    color : #FFF;
`

export const FlightInformation = styled.div`
    justify-content: space-between;
    margin-block : 50px;
    flex-wrap : wrap;
    gap : 10px;
    h3 {
        padding-block : 12px;
        font-size : 22px;
    }
`;

export const FlightInfoCard = styled.div`
    padding: 15px;
    padding-bottom: 0px;
    width: 20%; 
    background-color: ${colors.secondaryColor};
    border: none;
`;

export const FlightInfoTopSection = styled.div`
    color : ${colors.primaryColor};
    justify-content: space-between;
`;

export const Cards = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-block : 30px;
`;

export const Card = styled.div`
    width: 23%;
    background-color: #FFF;
    transition: 0.2s all;
    font-size: 12px;
    span {
        color : ${colors.primaryColor};
    }
`;

export const CardImage = styled.img`
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
    height: 200px;
`;

export const CardBody = styled.div`
    padding : 10px;
    div p {
        padding-top : 10px;
        font-size : 12px;
    }
`;

export const CardFooter = styled.div`
    margin-block : 5px;
    .card-footer-left > img {
        width : 50px;
        height: 50px;
        border-radius: 50%;
    }
    .card-footer-left .footer-text {
        margin-top: 10px;
        align-self: center;
        padding: 0 10px;
    }
    .card-footer-left .footer-text  h6 {
        font-size: 13px;
    }
    .card-footer-left .footer-text p{
        margin-top: -10px;
        font-size: 10px;
        opacity: 0.7;
    }
    .card-footer-right {
        display: flex;
    }
    .card-footer-right i {
        color: #00BFFF;
        margin: 0 3px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
        font-size: 15px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ServicesCards = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    gap : 5px;
    margin-block : 20px;
`

export const ServiceCard = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    i {
        color: #FFF;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        align-self: center;
        background-color: ${colors.primaryColor};
    }
    .service-text-section {
        padding-inline: 20px;
        border-radius: 5px;
        text-align : center;
        background-color: #dddddd;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
        p {
            font-size : 14px;
        }
    }
`

export const SeeMoreSection = styled.div`
    margin-block : 20px;
    text-align : center;
`

export const FeedbackCardsSection = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    .feedback-card {
        width: 30%;
        padding: 20px 10px;
        background-color: #FFF;    
        flex-direction: column;
        text-align: center;
        gap: 15px;    
        box-shadow: -1px -1px 1px 1px rgba(0, 0, 255, 0.1), 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
        .feedback-top-section {
            justify-content : space-between;
            width : 100%;
        }
    }
    .feedback-card p {
        font-size: 13px;
        opacity: 0.8;
        text-align: justify;
        line-height: 20px;
    }
    
    .left-top-section > img {
        width : 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
    .feedback-top-section p {
        font-size: 13px;
    }
    .feedback-text {
        padding: 10px;
        line-height: 5px;
    }
    .left-top-section .feedback-text p {
        font-size: 12px;
    }
    .left-top-section .feedback-text p > i {
        color: yellow;
    }
`