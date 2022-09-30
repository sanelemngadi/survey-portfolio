import React from 'react'
import MetaData from '../../meta'
import Collimation from '../../src/routes/surveying/collimation/collimation'

const CollimationMethod = () => {
    return (
        <>
            <MetaData
                title="Collimation Mathod | Surveying"
                subtitle="Collimation methods is the methodused by suveryors to calculate the height differences of the slope."
                image="/assets/vectors/graphjoin.svg" />
            <Collimation />

        </>
    )


}

export default CollimationMethod