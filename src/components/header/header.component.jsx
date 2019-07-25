import React from 'react';

import './header.styles.scss';


class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            toggleClass: 'hidden',
            bar: ''
        }
    }

    toggleClass = () => {
        const currentCss = this.state.toggleClass === 'hidden' ? 'show' : 'hidden';
        const barCss = this.state.bar === '' ? 'rotate' : '';
        this.setState({ toggleClass: currentCss })
        this.setState({ bar: barCss })
    }

    render() {
        return (
            <nav className="navbar" onScroll={handleScroll}>
                <div className="container">
                    <div className='logo'>
                        W<span>Labastida</span>
                    </div>
                    <ul className={this.state.toggleClass}>
                        <li>HOME</li>
                        <li>SKILLS</li>
                        <li>EXPERIENCE</li>
                    </ul>
                    <div className="hamburger" onClick={this.toggleClass}>
                        <span className={`bar ${this.state.bar}`}></span>
                        <span className={`bar ${this.state.bar}`}></span>
                        <span className={`bar ${this.state.bar}`}></span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;