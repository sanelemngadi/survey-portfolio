import styled from "styled-components";
import { Center } from "../../components/components.styles";
import { Container } from "../../components/Container";


export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`
export const FooterWrap = styled(Container)`
    // border: 1px solid blueviolet;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "heading"
                            "contact"
                            "form";
    background-color: ${({ theme }) => theme.colors.primary};

    header{
        grid-area: heading;
        width: 100%;
        text-align: left;

        h1{
            font-size: 1.5rem;
            margin-bottom: 1em;
        }
    }
    & > div:nth-of-type(1){
        grid-area:contact;
    }
    & > div:nth-of-type(2){
        grid-area:form;
    }

    @media (min-width:992px){
        grid-template-columns: 1fr 1fr;
        grid-template-areas:"heading heading" 
                            "contact form";
        header{
            h1{
                font-size: 2.5rem;
                margin-bottom: 0em;
            }
        }
    }
    @media (min-width:1200px){
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "heading heading"
                            "contact form";
    }
    
`


export const SiteMap = styled.div`
    // border: 1px solid blue;
    color: ${({ theme }) => theme.colors.secondary}; 
    display:flex;
    align-items: center;  

    ul{
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
    }
    li{
        margin: 0.5rem 1rem;
    }
    a{
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
        font-size:0.95rem;
        display: flex;
        align-items: center;
    }
    // @media (min-width:1200px){
    //     margin-left:1rem;
    // }
`

export const CompanyWrapper = styled.div`
    // border: 1px solid red;
    background-color: #0b1e30;
    // background-color: #181545;
`;
export const CompanyCopy = styled(Container)`
    visibility: visible;
    color: ${({ theme }) => theme.colors.secondary};

    & > div: nth-of-type(1){
        ${Center}
    }
    & > div: nth-of-type(2){
        margin: 2rem auto;
    }
    & > div: nth-of-type(3){
        ${Center}
    }

    @media (min-width: 992px){
        display: flex;
    }
`;