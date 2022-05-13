import React from 'react';
import styled from 'styled-components';
import AboutCard from '../../components/AboutCard';
import { Container } from '../../components/Container';
import Hero from '../../components/Hero';

const Wrapper = styled(Container)`
    display: block;
`

const Paragraph = styled.p`
    display: block;
    position: relative;
    padding: 1rem;
    
    &::before{
        content: "2";
        display: inline-flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        background-color: #0f4532;
        margin-right: 1rem;
        border-radius: 50%;
        font-size: .8rem;
        // line-height: 100%;
        color: ${({ theme }) => theme.colors.secondary};
    }
    &::after{
        content: "''";
        display: inline-flex;
        position: absolute;
        top: 0;
        left: 3rem;
        font-size: 10rem;
        font-weight: bold;
        // transform: rotateZ(25deg);
        opacity: .25;
        z-index: -3;
    }

    @media (min-width: 992px){
        padding-right: 20rem;
    }
`

const AboutUs = () => {
    return (
        <>
            <Hero
                heading="Now it's perfect time to know we"
                src="/assets/aboutMeImage.jpg"
                width={175}
                height={233}
                alt="myself"
                link="#hire"
                isCta={false}
                bgShaddow
            />
            <Wrapper>
                Again!!! &#128514; &#128151;
                <AboutCard noLink={true} />
                {/* About us */}
                <Paragraph>
                    A guy who enjoys nature, music, exercise, and overall health. I strive to live a life that is as balanced as possible. I like learning new things, especially about text and history. Nothing is more important to me than my loved ones' peace of mind and being in the finest possible mental and physical state. My favorite quote is by -EVY POUMPOURAS "The day you think you know everything is the day you become obsolete."
                </Paragraph>
                <br />
                You must be enjoying, aren't? &#128514; &#128517;
            </Wrapper>
        </>
    )
}

export default AboutUs