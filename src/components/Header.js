import React from 'react';
import '../css/Header.css';

function Header() {

    const logo = '/assets/imgs/logo.png'

    return (
        <div className="section" id="header">
            <div className="center-container">
                <div className="left-header">
                    <a id="logo-container" href="/guidon-app-react">
                        <img src={process.env.PUBLIC_URL + logo} alt=""/>
                    </a>
                </div>
                <div className="right-header" id="navigation-container">
                    <a className="navigation-link" href="/guidon-app-react">Home</a>
                    <a className="navigation-link" href="https://interactive.theguidon.com/#/about">About</a>
                    <a className="navigation-link" href="https://theguidon.com">TheGuidon.com</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
