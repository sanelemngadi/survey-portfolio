import styled from "styled-components";
import { Center } from "../../components/components.styles";
import { Container } from "../../components/Container";

interface ToggleProps {
    isToggled: boolean,
}

export const HeaderStyle = styled(Container)`
    position: relative; //for small
    height: 4.5rem;
    display: flex;
    flex-direction:column; //for small
    align-items:center; screens
    background-color: #fff;

    @media ${({ theme }) => theme.breakpoints.sm}{
        flex-direction: row;
    }
`

export const NavStyle = styled.nav<ToggleProps>`
    position: absolute; //for small
    top: 4.5rem; //small
    width: 90vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    transform: ${(props) => props.isToggled ? 'translateX(-6%)' : 'translateX(-120%)'};
    transition: transform 0.5s ease-in-out;
    z-index: 20;

    li::after{
        content:"";
        display: block;
        width: 100%;
        height: .2rem;
        transform: scaleX(0);
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    li:hover::after{
        transform: scaleX(1);
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    a{
        display: flex;
        padding: 0.3em;
        width:100%;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.colors.secondary};
    }
    ul li ul li a{
        display:flex;
        justify-content: flex-start;
    }

    @media ${({ theme }) => theme.breakpoints.sm}{
        position: relative; //changed
        min-height: auto;
        top: auto; //changed
        width: auto; //changed
        height: 4.5rem; //changed
        background-color: #fff; //changed
        padding: 0; //changed
        transform: unset; //changed
        animation: unset; //changed
        transition: transform 0.5s  ease-in-out;
        display: flex; // new
        align-items: center; // new

        & > div{
            height: auto;
            padding: 0;
        }

        ul{
            display:flex;
            flex-direction: row;
            align-items: center; // new
        }

        li{
            height: 4.5rem;
        }
        ul li ul{
            background-color: #fff;
            
            visibility: hidden;
            opacity: 0;
            transform: translateY(1rem);
            flex-direction: column;
            
            border-top: 5px solid #0f4532;
            position: absolute;
            top: 4.3rem;
            min-width: 45vw;
            border-bottom-left-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            padding: 1rem;
            z-index: 10;
            transition: unset;
        }
        ul li ul li{
           height: auto;
           width: 100%;
        }
        ul li ul:hover{
            visibility: visible;
            opacity: 1;
            transform: translateY(0rem);
            transition: all 0.2s ease-in-out;
            z-index: 99;
        }
        a{
            display: flex;
            height: 100%;
            color: #000;
        }

        // a:focus ~ ul,
        a:hover ~ ul{
            visibility: visible;
            opacity: 1;
            transform: translateY(0rem);
            transition: all 0.2s ease-in-out;
        }
    }
    @media (min-width: 1200px){
          ul li ul{
              min-width: auto;
            width: 12rem;
        }
    }

`

export const LogoStyle = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    align-items:center;
    justify-content: space-between;

    & > div:first-of-type{
        ${Center}
        cursor: pointer;

        img{
            display:block;
        }
    }
`

export const ToggleMenuStyle = styled.div<ToggleProps>`
    ${Center}
    flex-direction: column;
    cursor: pointer;
    border: 2px solid ${({ isToggled }) => isToggled ? "red" : ({ theme }) => theme.colors.primary};
    padding: 0.35rem;
    border-radius: 0.3rem;

    span{
        width:1.5rem;
        height:.2rem;
        border: 1px solid black;
        background-color: ${({ theme }) => theme.colors.primary};
    }
    span:nth-of-type(1){
        visibility: visible;
        transform: ${({ isToggled }) => isToggled && 'rotateZ(45deg) translate(0.3rem, 0.2rem)'};
    }
    span:nth-of-type(2){
        margin: 2px;
        transform: ${({ isToggled }) => isToggled && 'scaleX(0)'};
    }
    span:nth-of-type(3){
        visibility: visible;
        transform: ${({ isToggled }) => isToggled && 'rotateZ(-45deg) translate(0.3rem,-0.2rem)'};
    }
    

    @media ${({ theme }) => theme.breakpoints.sm}{
        display:none;
    }
`