import React from 'react';
import MetaData from '../../meta';
import { Polar } from '../../src/routes';

const ThePolar = () => {
    return (
        <>
            <MetaData
                title="Polar | Surveying"
                subtitle="The polar method consists of determining the direction and the distance of each new point from a known station"
                image="/assets/vectors/graphpolar.svg" />
            <Polar />
        </>
    )
}

export default ThePolar;