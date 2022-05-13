import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components';
import { Center } from './components.styles';
import { DarkOverLay } from './DarkOverlay';

const Wrapper = styled.div`
    visibitiy: visible;
    // border: 1px solid rgba(0,0,0, 1);
`
const Card = styled.div`
    padding: 1em 0.5em 1em .5em;
    text-align: center;
    border-radius: 1em;
    margin-top: 0.5rem;
    background-color: ${({ theme }) => theme.colors.secondary};

    button{
        background-color:transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color:blue;
    }
    button:hover{
        text-decoration: underline;
    }
    button:active{
        transform: scaleX(0.9);
    }

    & > div:first-of-type{
        ${Center}
        margin-bottom: .5em;

        div{
            ${Center}
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
            padding: .3rem;
        }
        h3{
            margin-left: 5%;
        }
    }
    @media (min-width: 768px){
        padding: 1rem 4rem;
    }
    @media (min-width: 768px){
        padding: 1rem 0.5rem 1rem .5rem;
    }
    @media (min-width: 1200px){
        overflow: hidden;
        border: 1px solid transparent;
        &:hover{
            // box-shadow: .2em .2em 1em .3em rgba(0,0,0, 0.1);
            border: 1px solid rgba(0,0,0, 0.1);
        }
        height: auto;
        min-height: 13.125rem;
        
        background-color: #fff;

        & > div:first-of-type{
            flex-direction: column; //new
            margin: 0 0 1rem 0; //new

            transform: translateY(3rem); // for hover
            
            div{
                margin-bottom: 1rem; //new
            }
        }        
        & > div:last-of-type{
            background-color: ${({ theme }) => theme.colors.secondary};
            transform: translateY(115px); //show on hover
            margin-top: 2rem;
            padding-top: .3rem;
            transition: background-color .5s 0.15s ease-in-out;
        }

        transition: transform .5s 0.2s ease-in-out;
        &:hover {
            & > div:first-of-type{
                transform: translateY(0rem); // for hover
            }
            & > div:last-of-type{
                background-color: transparent;
                transform: translateY(-20px); //show on hover
                transition: transform .5s 0.2s ease-in-out;
            }
        }
    }
`
interface Props {
    src: string,
    width: string,
    height: string,
    alt: string,
    heading: string,
    description: string
}
const ServiceCard: NextPage<{ service: Props }> = ({ service }) => {
    const [overlay, setShowOverLay] = useState<boolean>(false);

    return (
        <Wrapper>
            <DarkOverLay isAnswered={overlay}>
                <div>
                    <span><FaWindowClose size={25} onClick={() => setShowOverLay(false)} /></span>
                    <h2>{service.heading}</h2>
                    <br />
                    <p>{service.description}</p>
                </div>
            </DarkOverLay>
            <Card>
                <div className='heading'>
                    <div>
                        <Image
                            src={service.src}
                            width={service.width}
                            height={service.height}
                            alt={service.alt}
                        />
                    </div>
                    <h3>{service.heading}</h3>
                </div>
                <div className="card_body">
                    <p>{service.description.length > 100 ? service.description.substring(0, 100) + "..." : service.description}</p>
                    <br />

                    <Link href={"#service"}>
                        <a onClick={() => setShowOverLay(true)}>more {"..."}</a>
                    </Link>
                </div>

            </Card>
        </Wrapper>
    )
}

export default ServiceCard