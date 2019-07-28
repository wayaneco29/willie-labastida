import React from 'react';

import { auth, signInWithGoogle } from '../firebase/firebase.util';

import './header.styles.scss';


class Header extends React.Component {
    constructor(props) {
        super(props);

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

    signIn = () => {
        signInWithGoogle();
        this.setState({ toggleClass: 'hidden', bar: '' })
    }

    signOut = () => {
        auth.signOut();
        this.setState({ toggleClass: 'hidden', bar: '' })
    }

    render() {
        const { email } = this.props;
        return (
            <nav className="navbar">
                <div className="container">
                    <div className='logo'>
                        W<span>Labastida</span>
                    </div>
                    <ul className={this.state.toggleClass}>
                        <li>HOME</li>
                        <li>SKILLS</li>
                        <li>EXPERIENCE</li>
                        {
                            this.props.currentUser ?
                                <li onClick={this.signOut}>LOG OUT</li> :
                                <li onClick={this.signIn}>SIGN IN</li>
                        }
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