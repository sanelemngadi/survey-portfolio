import React from 'react'
import MetaData from '../../meta'
import { Join } from '../../src/routes'

const TheJoin = () => {
    return (
        <>
            <MetaData
                title="Join | Surveying"
                subtitle="The join method consists of determining the direction and the distance of each new point from a known station"
                image="/assets/vectors/graphjoin.svg" />
            <Join />
        </>
    )
}

export default TheJoin