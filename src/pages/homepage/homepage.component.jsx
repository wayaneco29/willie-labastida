import React from 'react';

import Header from '../../components/header/header.component';
import Banner from '../../components/banner/banner.component';
import Skills from '../../components/skills/skills.component';
import Experience from '../../components/experience/experience.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.scss';

const Homepage = () => (
    <div className='main'>
        <Header />
        <Banner />
        <Skills />
        <Experience />
        <Footer />
    </div>
)

export default Homepage;