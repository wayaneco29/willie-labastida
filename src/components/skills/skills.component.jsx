import React from 'react';

import Box from '../box/box.component';

import './skills.styles.scss';

const Skills = () => (
    <section id="skills">
        <div className="container">
            <h1 className="title">Skills</h1>
            <div className="skills-inner">
                <Box title="Title1" description="description" />
                <Box title="Title2" description="description" />
                <Box title="Title3" description="description" />
            </div>
        </div>
    </section>
)

export default Skills;