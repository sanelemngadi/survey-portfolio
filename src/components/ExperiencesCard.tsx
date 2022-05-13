import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { Container } from './Container';
import { Experiences } from '../lists/experience_cards';
import { Center } from './components.styles';
import ExperienceCard from './ExperienceCard';
import Image from 'next/image';
import { ExperienceInterface } from '../interfaces/interfaces';


const Wrapper = styled(Container)`
    visibility: visible;
`
const Card = styled.div`
    position: relative;
    border: 1px solid rgba(112,112,112, 0.15);
    border-radius: 1rem;
    padding: 1rem;
    display: grid;
    margin-bottom: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "one two three"
                            "four five six"
                            "seven eight .";

    div:nth-of-type(1){
        grid-area: one;
    }
    div:nth-of-type(2){
        grid-area: two;
    }
    div:nth-of-type(3){
        grid-area: three;
    }
    div:nth-of-type(4){
        grid-area: four;
    }
    div:nth-of-type(5){
        grid-area: five;
    }
    div:nth-of-type(6){
        grid-area: six;
    }
    div:nth-of-type(7){
        grid-area: seven;
    }
    div:nth-of-type(8){
        grid-area: eight;
    }
    div:nth-of-type(9){
        grid-area: nine;
        display:none;
    }
    @media (min-width: 992px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: "one two three four"
                            "five six seven eight";
    }
    @media (min-width: 1200px){
        grid-template-areas: " ... one two . "
                            "three nine nine four"
                            "five nine nine six"
                            "... seven eight ... ";
        div:nth-of-type(9){
            display:block;
            text-align: center;
            border: 1px solid rgba(112,112,112, 0.25);
            border-radius: 1rem;
            padding: 1rem;
        }
    }
`

const Description = styled.div`
    ${Center}
`

const ExperiencesCard: FunctionComponent = () => {
    const [excerpt, setExcerpt] = useState<ExperienceInterface>({
        excerpt: "Hover over the cards to get description",
        image: "/assets/vectors/logo.svg",
        name: "Sanele Mngadi",
        alt: "logo",
    });

    return (
        <Wrapper>
            <Heading>
                <h1>Experiences</h1>
                <p>Here we are showing the tools we are using to achieve your goals</p>
            </Heading>

            <Card onMouseLeave={() => setExcerpt({
                excerpt: "Hover over the cards to get description",
                image: "/assets/vectors/logo.svg",
                name: "Sanele Mngadi",
                alt: "logo",
            })}>
                {Experiences.length > 0 ? Experiences.map((experience, index) => {
                    return (
                        <ExperienceCard
                            key={"experience-" + index}
                            experience={experience}
                            setExcerpt={setExcerpt}
                        />
                    )
                }) : "No cards"}
                <div>
                    <Image
                        src={excerpt.image}
                        alt={excerpt.alt}
                        height={50}
                        width={50}
                    />
                    <h2>{excerpt.name}</h2>
                    <Description>
                        <p>{excerpt.excerpt}</p>
                    </Description>
                </div>
            </Card>
            <div style={
                {
                    textAlign: "right",
                    textDecoration: "underline"
                }
            }>
                <Link href="/portfolio/experiences">
                    <a>More ...</a>
                </Link>
            </div>
        </Wrapper>
    )
}


export default ExperiencesCard;