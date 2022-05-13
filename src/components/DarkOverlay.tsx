import styled from "styled-components";

interface SolutionProps {
    isAnswered: boolean
}

export const DarkOverLay = styled.div<SolutionProps>`
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
    background-color: ${(props) => props.isAnswered ? "rgba(0,0,0,.55)" : "rgba(0,0,0,0)"};
    justify-content: center;
    align-items: center;
    z-index: 3000;
    font-size: 0.8rem;
    
    & > div{
        opacity: 1;
        margin: .5rem;
        color: #000;
        padding: 1rem;
        width: 95vw;
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
             width: 75vw;
         }
    }
    @media (min-width: 992px){
         & > div{
             width: 50vw;
         }
    }
`