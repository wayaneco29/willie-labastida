import React from 'react';

import './header.styles.scss';

const Header = () => (
    <nav className="navbar">
        <div className="container">
            <div className='logo'>
                W<span>Labastida</span>
            </div>
            <ul>
                <li>HOME</li>
                <li>SKILLS</li>
                <li>EXPERIENCE</li>
            </ul>
        </div>
    </nav>
)

export default Header;