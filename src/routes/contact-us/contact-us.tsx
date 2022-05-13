import React from 'react'
import Hero from '../../components/Hero'

const ContactUs = () => {
    return (
        <>
            <Hero
                heading="Let us be friends for a moment, while we survey your journey and friends never disspoint each other."
                src="/assets/vectors/contacts.svg"
                width={256}
                height={237}
                alt="The tools we us to achieve our client's needs"
                link="#hire"
                isCta={false}
            />
            <div>ContactUs</div>
        </>
    )
}

export default ContactUs