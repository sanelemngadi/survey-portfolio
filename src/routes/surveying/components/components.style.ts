import styled from "styled-components";
import { Container } from "../../../components/Container";

interface SolutionProps {
    isAnswered: boolean
}

export const Wrapper = styled(Container)`
    // border: 1px solid red;

    @media (min-width: 1200px){
        // display: flex;
        // justify-content: space-between;
        padding-top: 1rem;
        // margin-top: 2rem;

        div h1{
            margin-bottom:1rem;
            color: ${({ theme }) => theme.colors.primary}
        }
    }
`


export const MetaDataTable = styled.table`
    // border: 1px solid blue;
    tr td:last-of-type{
        padding-left: .5rem;
    }
`

export const Inputs = styled.div`
    // border: 1px solid blue;

    input[type ='text']{
        height: 2rem;
        width: 100%;
        padding: .2rem 1rem;
    }
    label {
        display: block;
        margin-top: .5rem;
        font-size: 0.8rem;
    }   

    section{
        display: flex;

        button{
        height: 2rem;
        width: 10rem;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid black;
        margin: 2rem .2rem 0.5rem 0;

        &:last-of-type{
            background-color: red;
            border: none;
            cursor: pointer;
        }
    }
    }
`

export const Solutions = styled.div<SolutionProps>`
    display: flex;
    transform:${(props) => props.isAnswered ? 'scale(1)' : 'scale(0)'};
    border-radius:${(props) => props.isAnswered ? '0' : '100%'};
    opacity: ${(props) => props.isAnswered ? "1" : "0"};
    // border: 1px solid blue;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: calc(100%);
    // background-color: rgba(0,0,0,.95);
    background-color: ${(props) => props.isAnswered ? "rgba(0,0,0,.95)" : "rgba(0,0,0,0)"};
    justify-content: center;
    align-items: center;
    z-index: 3000;
    font-size: 0.8rem;
    
    & > div{
        margin: .5rem;
        color: #000;
        padding: 1rem;
        min-width: 50vw;
        position: relative;
        background-color: silver;
        border-radius: 0.5rem;
        // transform: rotateZ(90deg);

        span{
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            cursor: pointer;

            &:hover{
                color: red;
                transition: 0.1s;
            }
        }
        
    }
    @media (min-width: 768px){
         & > div{
             padding: 2rem;
         }
    }
`

export const ResultTable = styled.table`
    width: 100%;
    border: 3px solid blue;
    tr, td{
        border-bottom: 2px solid black;
    }
    th{
        border: 1px solid black;
        padding: 0.3rem;
    }
    td{
        padding: 0.3rem;
    }
    // b{
    //     color: red;
    // }
`


export const Graph = styled.div`
    // border: 1px solid black;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(min-width: 1200px) {
        // justify-content: flex-start;
        justify-content: space-between;
        flex-direction: row;
    }
`
