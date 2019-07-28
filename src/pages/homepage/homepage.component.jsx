import React from 'react';

import Banner from '../../components/banner/banner.component';
import Skills from '../../components/skills/skills.component';
import Experience from '../../components/experience/experience.component';
import Footer from '../../components/footer/footer.component';

import './homepage.styles.scss';

window.addEventListener('scroll', () => {
    const scrollMain = document.querySelector('.main');
    const popUp = document.querySelector('.toTop');

    const fromTop = scrollMain.getBoundingClientRect().top;

    if (!fromTop == 0) {
        popUp.classList.add('show');
    } else {
        popUp.classList.remove('show');
    }
    // obj.classList.add('show');
})
const Homepage = () => (
    <div className='main'>
        <Banner />
        <Skills />
        <Experience />
        <Footer />

        <div className="toTop">
            <span></span>
            <span></span>
        </div>
    </div>
)

export default Homepage;