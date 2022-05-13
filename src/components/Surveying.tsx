import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Heading } from './Heading';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Center } from './components.styles';
import { surveys } from '../lists/surveys';


interface SurveysInterface {
    description: string
}
const Wrapper = styled(Container)`
    border: 1px solid black;
    margin-top: 4.5rem;
    background-color: #0f4532;
    // background-color: #181545;
    // background-color: #0b1e30;
    color: silver;
    
    @media (min-width:768px){
        border-radius: 1rem;
    }
`

const Card = styled.div<SurveysInterface>`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    width: 9rem;
    height: 5rem;
    border-radius: .5rem;
    cursor: pointer;
    margin:.3rem;
    padding: 0 1em;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;

    a{
        display: inline-block;
        color: #fff;
        ${Center}
        height: 100%;
    }

    &:hover{
            div{
                transform: translateX(-.5rem);
            }
            a{
                transform: translateX(.3rem);
            }
    }

    article{
        display: block;
        background-color: green;
        border-radius: .2rem;
        padding: 0.1rem .5rem;
        font-size: 0.7rem;
        position: absolute;
        top: .2em;
        right:.2em;
    }

    
`

const Cards = styled.div<SurveysInterface>`
    // border: 1px solid black;
    ${Center}
    flex-wrap: wrap;
    // background-color: red;
    position: relative;
    
    @media (min-width: 992px){
        margin-top: 5rem;
        &::before{
        content: "${(props) => props.description}";
        display: block;
        height: 3rem;
        width: 20rem;
        // border: 1px solid black;
        position: absolute;
        top: -3.5rem;
        z-index:20;
        font-size: 0.8rem;
        // background-color: blue;
        background-color: #0b1e30;
        padding: 1rem;
        border-radius: 1rem;
        text-align: center;
    }
    }
    
`

const More = styled.div`
    margin-top: 2rem;
    text-align: right;
    padding-right: 2rem;

    a{
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
        font-size: 0.8rem;
    }
`

const Surveying = () => {
    const [desc, setDescr] = useState<string>("Hover over the cards for more");
    return (
        <Wrapper>
            <Heading>
                <h1 style={{ color: "#fff" }}>Are you a Land Surveying stundent?</h1>
                <p>This site was created by a land surveying student at his final year with an understanding of how frustrating it is to do some calcs, that is why he made things easier for you.</p>
            </Heading>

            <Cards description={desc} onMouseLeave={() => setDescr("Hover over the cards for more")}>
                {surveys.length > 0 ? surveys.map((survey, index) => {
                    return (
                        <Card key={"servey-" + index} description={survey.description} onMouseEnter={() => setDescr(survey.description)}>
                            <article style={{ backgroundColor: survey.status === "New" ? "green" : "#B22727" }}>
                                {survey.status}
                            </article>
                            <Link href={survey.link} passHref>
                                <a>
                                    <div style={{ textDecoration: survey.status === "New" ? "none" : "line-through" }}>{survey.name}</div>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="42" height="11" fill="none">
                                            <path stroke="currentColor" stroke-width="2" d="M0 5.5h40m0 0L34.6 1M40 5.5 34.6 10"></path>
                                        </svg> */}
                                    <FaLongArrowAltRight />
                                </a>
                            </Link>
                        </Card>
                    )
                }) : "No surveys found"}
            </Cards >
            <More>
                <Link href={"#"}>
                    <a>more surveys...</a>
                </Link>
            </More>
        </Wrapper >
    )
}

export default Surveying