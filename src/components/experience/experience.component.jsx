import React from 'react';

import Box from '../box/box.component';

import './experience.styles.scss';

const Experience = () => (
    <section id="experience">
        <div className="container">
            <h1 className="title">
                Experience
            </h1>
            <div className="experience-inner">
                <Box title='Company' years='2011-2012' description='description' styleProp='box-experience' />
                <Box title='Company' years='2011-2012' description='description' styleProp='box-experience' />
                <Box title='Company' years='2011-2012' description='description' styleProp='box-experience' />
            </div>
        </div>
    </section>
)

export default Experience;