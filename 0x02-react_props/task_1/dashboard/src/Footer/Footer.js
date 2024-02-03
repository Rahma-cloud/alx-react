import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
    return (
    <div className="App-footer">
    <hr/ >
    <p>Copyright {getFooterCopy(true)} - {getFullYear()}</p>
    </div>
    );
}

export default Footer;
