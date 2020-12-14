import React from 'react';
import Common from './Common';
import web from '../src/images/b2.jpg';

const About = () => {
    return (
        <>
            <Common name="Welcome to About Page ... " img_src={web} visit="./contact" btname="Contact Now" />
        </>
    );
};

export default About;