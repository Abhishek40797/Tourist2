import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    .flex {
        display : flex;
        align-items : center;
    }
    .nav-item {
        text-decoration: none;
        color : #000;
        padding-inline : 20px;
    }
    .justify-between {
        justify-content : space-between;
    }
`

export const BodyColor = createGlobalStyle`
    background-color: #eeeeee;
`;

export const FooterSection = styled.footer`
    background-color : #00BFFF;
    padding-block: 50px;
    margin-top : 80px;
`;

export const FooterContents = styled.div`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: flex-start;
    color : #FFF;
    .nav-links {
        color : #FFF;
        text-decoration : none;
        font-size : 13px;
    }
    p {
        font-weight: 500;
        font-size: 13px;
        line-height: 10px;
    }
    input  {
        margin-top: -5px;
        border: none;
        padding: 10px;
        border-radius: 6px;
        outline: none;
    }
    .footer-icons {
        margin-top: -10px;
        i {
            padding-right: 10px;
        }
    }
`