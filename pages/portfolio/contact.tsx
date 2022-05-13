import Head from 'next/head';
import React from 'react';
import { ContactUs } from '../../src/routes';

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Portfolio</title>
            </Head>
            <ContactUs />
        </>
    )
}

export default contact