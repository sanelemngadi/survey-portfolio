import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
    theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
    *,*::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: 0.5s;
        scroll-behavior: smooth;
    }

    body{
        font-family: ${({ theme }) => theme.fonts.body};
    }

    p{
        // font-family: ${({ theme }) => theme.fonts.paragraph};
        font-family: ${({ theme }) => theme.fonts.poppins};
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
        font-weight: 600;
    }
    h1{
        font-size: 2.5rem;
    }
`
export default GlobalStyle;