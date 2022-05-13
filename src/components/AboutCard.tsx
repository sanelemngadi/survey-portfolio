import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Center } from './components.styles';
import { Container } from './Container';

const Wrapper = styled.div`
    display: block;
    margin-bottom: 2rem;

    & > div: first-of-type{
        background-color: ${({ theme }) => theme.colors.primary};
    }
`

const Head = styled(Container)`
    // border: 1px solid red;    
    position: relative;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    @media (min-width: 768px){
        border-radius: 1rem;
        padding: 1rem;
    }


    & > div: first-of-type{
        ${Center}

        &::before,
        &::after{
            content:"";
            display: block;
            height: 0.2rem;
            width: 30%;
            // border: 1px solid black;
            position: absolute;
            z-index: -1;
            background-color: ${({ theme }) => theme.colors.primary};

            @media (min-width:768px){
                width: 38%;
            }
        }
        &::before{
            left: 0;
        }
        &::after{
            right: 0;
        }
    }

    & > div: nth-of-type(2){
        ${Center}
        a{
            display: block;
            width: 18rem;
            height: 100%;
            // border: 1px solid red;
            padding: .65rem;
            border-radius: .45rem;
            background-color: #0f4532;
            color: ${({ theme }) => theme.colors.secondary};
        }
        a:active{
            transform: scaleX(.9);
        }
    }

    

    img{
        border-radius: 5rem;
    }

    @media (min-width:768px){
        margin-top: 3rem;
    }

`

const Body = styled(Container)`
    position: relative;
    padding: 1rem;

    &::before{
        content: "";
        display: block;
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: -.9rem;
        left: calc(50% - 1rem);
        transform: rotateZ(45deg);
        z-index: -2;
        background-color: #0b1e30;
    }
    h3{
        font-size: 1.5rem;
        position: relative;

        @media (min-width: 768px){
            font-size: 2rem;
        }
    }
    h3::before{
        content: "Who Am I?";
        ${Center}
        display: inline-flex;
        width: 14rem;
        height: 2rem;
        align-items: center;
        background-color: #0f4532;
        padding: .3rem 2rem;
        margin-right: 1rem;
        border-radius: 1rem;
        font-size: .8rem;
        line-height: 100%;
        position: relative;
        bottom: 8px;
        left: 0;
        color: ${({ theme }) => theme.colors.secondary};
    }
    p{
        position: relative;
    }
    p::before{
        content: "1";
        display: inline-flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        background-color: #0f4532;
        margin-right: 1rem;
        border-radius: 50%;
        font-size: .8rem;
        color: ${({ theme }) => theme.colors.secondary};
    }
    p::after{
        content: "?'";
        display: inline-flex;
        position: absolute;
        top: 0;
        right: 3rem;
        font-size: 10rem;
        font-weight: bold;
        opacity: .25;
        z-index: -3;
    }

    @media (min-width: 992px){
        border-radius: 1rem;
        h3{
            padding-right: 15rem;
        }
        p{
            padding-left: 20rem;
        }
    }
`

interface Props {
    noLink?: boolean
}

const AboutCard: FunctionComponent<Props> = ({ noLink }) => {
    return (
        <Wrapper>
            <div>
                {!noLink &&
                    <Head>
                        <div>
                            <Image
                                src="/assets/aboutMeImage.jpg"
                                width="98px"
                                height="130px"
                                alt="about me"
                            />
                        </div>
                        <h1>About me</h1>
                        <p>It would be amazing knowing that your are not working with a robot, here are few information about me.</p>
                        <br />
                        <div>
                            <Link href="/portfolio/about">
                                <a>Want to Know More?</a>
                            </Link>
                        </div>
                    </Head>
                }
            </div>
            <br />
            <br />
            <Body>
                {/* <h2>Helloq</h2> */}
                <h3>I am a proud South African who lives in Durban and works as a Web Designer and Developer. You may have seen my art, but I&apos;d want to tell you more about the guy behind it.</h3>

                <br />
                <p>A guy who enjoys nature, music, exercise, and overall health. I strive to live a life that is as balanced as possible. I like learning new things, especially about text and history. Nothing is more important to me than my loved ones&apos; peace of mind and being in the finest possible mental and physical state. My favorite quote is by -EVY POUMPOURAS &quot;The day you think you know everything is the day you become obsolete.&quot;</p>
            </Body>

        </Wrapper>
    )
}

export default AboutCard