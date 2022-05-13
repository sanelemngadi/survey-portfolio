import React from 'react'
import Hero from '../../components/Hero'
import { Wrapper } from './experiences.styles'

const Experiences = () => {
    return (
        <>
            <Hero
                heading='Tools can define the user, let ours tell you how brilliant we are.'
                src="/assets/vectors/experiences.svg"
                width={256}
                height={234}
                alt="The tools we us to achieve our client's needs"
                link="#hire"
                isCta={false}
            />
            <Wrapper>
                <div>Experiences</div>
            </Wrapper>
        </>
    )
}

export default Experiences