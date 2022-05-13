import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { ExperienceInterface } from '../interfaces/interfaces';
import { Center } from './components.styles';

const Card = styled.div`
    height: 6rem;
    margin: .25rem;
    cursor: pointer;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border:1px solid rgba(112,112,112, 0.25);
    padding: .5rem;
    font-size: 0.8rem;
    &:hover{
        background-color: rgba(112,112,112, 0.25);
    }
    
    div{
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        ${Center}
    }

    
`
interface Props {
    experience: ExperienceInterface,
    setExcerpt(x: ExperienceInterface): void
}
const ExperienceCard: NextPage<Props> = ({ experience, setExcerpt }) => {

    return (
        <Card
            onMouseEnter={() => setExcerpt({
                excerpt: experience.description,
                image: experience.image,
                alt: experience.alt,
                name: experience.name
            })}
        >
            <div>
                <Image
                    src={experience.image}
                    alt={experience.alt}
                    height={40}
                    width={40}
                />
            </div>
            <h5>{experience.name}</h5>
        </Card>
    )
}

export default ExperienceCard;