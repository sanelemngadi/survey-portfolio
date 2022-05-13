import React from 'react';
import Hero from '../../components/Hero';

const Services = () => {
    return (
        <>
            <Hero
                heading='What we offer, and dedicated to do for you.'
                src="/assets/vectors/services.svg"
                width={170}
                height={240}
                alt="The tools we us to achieve our client's needs"
                link="#hire"
                isCta={false}
            />
            <div>Services</div>
        </>
    )
}

export default Services;