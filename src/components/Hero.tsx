import Image from 'next/image';
import Link from "next/link";
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Center, PrimaryBg } from './components.styles';
import { Container } from './Container';

interface BgProps {
    bgShaddow: boolean,
    isCta: boolean
}
export const HeroContainer = styled.div`
    ${PrimaryBg}
    padding: 1rem;
    // display: flex;
    // align-items: center;
    // justify-content: center;

    @media (min-width: 992px){
        margin-bottom: 4rem;
    }
`
export const HeroStyle = styled(Container) <BgProps>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:  "image"
                            "text";
    z-index:1;
    & > div:first-of-type{
        border: inherit;
        grid-area: text;
        padding: 1em;

        h1{
            text-align: center;
            font-size: 1.5rem;
            // font-size: 2.3rem;
        }
        a{
            ${Center};
            width: 200px;
            border: 1px solid ${({ theme }) => theme.colors.secondary};
            padding: .5rem;
            color: ${({ theme }) => theme.colors.secondary};
            margin: 1rem auto;
            border-radius: .4rem;
            &:hover{
                border: 1px solid ${({ theme }) => theme.colors.secondary};
                background-color: ${({ theme }) => theme.colors.secondary};
                color: ${({ theme }) => theme.colors.primary};
            }

            &:active{
                transform: scaleX(0.98);
            }
        }
    }
    & > div:last-of-type{
        ${Center}
        border: inherit;
        grid-area: image;
        width: 100%;
        max-height: 16rem;
        margin: 0 auto;
        
        img{
            display: block;
            z-index: 2;
        }
    }

    @media (min-width: 992px){
        & > div:first-of-type{
            h1{
                text-align: center;
                font-size: 2.3rem;
            }
        }
    }
    @media (min-width: 992px){
        grid-template-columns: 1fr 1fr;
        grid-template-areas:  "text image";

        & > div:first-of-type{
            display: ${({ isCta }) => isCta ? "block" : "flex"};
            align-items: ${({ isCta }) => isCta ? "start" : "center"};

            h1{
                text-align: left; //changed
            }
            a{
                margin: 2rem 0 1rem 0;
            }
        }
        & > div: last-of-type{
            justify-content: flex-end; // changed
        }
    }
    @media(min-width: 1200px) {
        h1{
            text-align: left; //changed
            font-size: 3rem;
        }
        & > div:last-of-type{
            
            img{
                width: 275px !important;
                height: 275px !important;
            }
        }
    }
`

interface Props {
    heading: string,
    isCta: boolean,
    link: string,
    src: string,
    height: number,
    width: number
    alt: string,
    bgShaddow?: boolean
}
const Hero: FunctionComponent<Props> = ({ heading, isCta, link, src, height, width, alt, bgShaddow }) => {
    return (
        <HeroContainer>
            <HeroStyle bgShaddow={bgShaddow ? bgShaddow : false} isCta={isCta}>
                <div>
                    {/* // <h1>We Map Your digital presents into an amazing experience</h1> */}
                    <h1>{heading}</h1>
                    {isCta &&
                        <Link href={link}>
                            <a> Hire Me</a>
                        </Link>
                    }
                </div>
                <div>
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        alt={alt}
                    />
                </div>
            </HeroStyle>
        </HeroContainer>
    )
}

export default Hero