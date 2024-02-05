import React from 'react';
import './Header.css';
import holbertonlogo from '../assets/holbertonlogo.jpg'

function Header() {
    return (
        <header className="App-header">
        <img src={holbertonlogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        </header>
    );
}

export default Header;
