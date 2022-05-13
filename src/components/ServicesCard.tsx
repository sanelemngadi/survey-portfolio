import React from 'react';
import styled from "styled-components";
import { Heading } from './Heading';
import { Container } from './Container';
import { ServiceCards } from '../lists/service_cards';
import { Center } from './components.styles';
import { NextPage } from "next";
import ServiceCard from './ServiceCard';


const Wrapper = styled.div`
    visibitiy: visible;
    // border: 1px solid rgba(0,0,0, 1);
`

const ServiceCardStyle = styled(Container)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "card1"
                        "card2"
                        "card3";

    & > div:nth-of-type(1){
        grid-area: card1;
    }
    & > div:nth-of-type(2){
        grid-area: card2;
    }
    & > div:nth-of-type(3){
        grid-area: card3;
    }

    @media (min-width: 992px){
        margin: 1rem auto;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "card1 card2"
                            "card3 card3";

        & > div:nth-of-type(1){
            margin-bottom: .5rem;
        }
        & > div:nth-of-type(2){
            margin-bottom: .5rem;
        }
        & > div:nth-of-type(3){
            padding: 1rem 4rem;
        }
    }
    @media (min-width: 1200px){
        margin: 1rem auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "card1 card2 card3";

        & > div:nth-of-type(1){
            margin: 0em;
        }
        & > div:nth-of-type(2){
            margin: 0em 0.5em 0 0.5em;
            // margin: .5em 0.5em 0 0.5em;
        }
        & > div:nth-of-type(3){
            padding: 0rem .5rem;
            // padding: 1rem .5rem;
            margin: 0;
        }        
    }
`

const ServicesCard: NextPage = () => {
    return (
        <Wrapper>
            <Heading>
                <h1>Services</h1>
                <p>We offer a variety of services for small businesses and university/college students</p>
            </Heading>
            <ServiceCardStyle id="#service">
                {ServiceCards.length > 0 ? ServiceCards.map((service, index) => {
                    return <ServiceCard
                        key={"inde-" + index}
                        service={service}
                    />
                }) : "Not cards"}
            </ServiceCardStyle>
        </Wrapper>
    )
}

export default ServicesCard;