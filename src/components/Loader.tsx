import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Center } from './components.styles';
import { DarkOverLay } from './DarkOverlay';

interface LoadingProps {
    isLoading: boolean
}
const Wrapper = styled.div<LoadingProps>`
    width: 100vw;
    height: 100vh;
    ${Center}
    transform: scale(${(props) => props.isLoading ? 1 : 0});
    text-align: center;

    h1{
        span{
            font-size: 2rem;
            display:inline-block;
            // transform-origin: center;
        }
        span:nth-of-type(1){
            animation: oscilate 1s  ease-in-out alternate infinite;
            // transform: scale(0);
        }
        span:nth-of-type(2){
            animation: oscilate 1s 0.2s ease-in-out alternate infinite;
        }
        span:nth-of-type(3){
            animation: oscilate 1s 0s ease-in-out alternate infinite;
        }

        @keyframes oscilate{
            0%{
                transform: translateY(-1rem);
                // display: none;
            }
            100%{
                transform: translateY(1rem);
                // display: block;
            }
        }
    }
`

const Loader: FunctionComponent = () => {
    const [overlay, setOverlay] = useState<boolean>(false);

    useEffect(() => {
        setOverlay(true);

        return () => {
            setOverlay(false);
        }
    }, []);
    return (
        <Wrapper isLoading={overlay}>
            {/* <DarkOverLay isAnswered={overlay}>
            </DarkOverLay> */}
            <h1>
                Yima kancane ngsaloader
                <br />
                {/* <br /> */}
                <br />
                <span>&#128514;</span>
                <span> &#128151;</span>
                <span>&#128517;</span>
            </h1>
            {/* <h4>Loading...</h4> */}
        </Wrapper>
    )
}

export default Loader