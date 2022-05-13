import Head from 'next/head'
import React from 'react'
import { Experiences } from '../../src/routes'

const experiences = () => {
    return (
        <>
            <Head>
                <title>Experiences | Portfolio</title>
            </Head>
            <Experiences />
        </>
    )
}

export default experiences