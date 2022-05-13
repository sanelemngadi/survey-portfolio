import Head from 'next/head'
import React from 'react'
import { AboutUs } from '../../src/routes'

const about = () => {
    return (
        <>
            <Head>
                <title>About Us | Portfolio</title>
            </Head>
            <AboutUs />
        </>
    )
}

export default about