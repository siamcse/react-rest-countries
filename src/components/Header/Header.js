import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to Country Sorted by Population</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/country">Country</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;