import styled from "styled-components";
import { Container } from "../../../components/Container";

export const CollimationWrapper = styled(Container)`
    border: 1px solid blue;
    margin-bottom: 2rem;
`


export const CollimationTable = styled.table`
    width: 100%;
    border: 1px solid blue;
    td{
        border: 1px solid blue;
        text-align: center;
    }
`

export const Form = styled.form`
    border: 1px solid black;
    margin: 1rem 0;
    input[type='text'], button{
         height: 2rem;
    }
    input[type='text']{
        //  width: 18rem; for big
        width: 65%;
    }

    button{
        //  width: 8rem; for big
         width: 30%;
         margin: 0 .5rem;
         background-color: ${({ theme }) => theme.colors.primary};
         color: ${({ theme }) => theme.colors.secondary};
         border: none;
    }
`
