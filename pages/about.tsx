import React from 'react';
import MetaData from '../meta';
import { AboutUs } from '../src/routes';

const about = () => {
    return (
        <>
            <MetaData
                title="About Us | Portfolio"
                subtitle="I am a proud South African who lives in Durban and works as a Web Designer and Developer."
                image="/assets/aboutMeImage.jpg" />
            <AboutUs />
        </>
    )
}

export default about