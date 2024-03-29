import React from 'react';

import banner from '../../assets/banner.jpg';
import './banner.styles.scss';

const Banner = () => (
    <div className="banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${banner})` }}>
        <div className="container">
            <div className="banner-inner">
                <h1 className='welcome-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error earum doloribus assumenda illo eius nulla mollitia quibusdam atque repellendus quis.</h1>
                <button className='button'>Getting Started</button>
            </div>
        </div>
    </div>
)

export default Banner;