import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import { Services } from '../../src/routes'

const services: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Services | Portfolio</title>
            </Head>
            <Services />
        </>
    )
}

export default services