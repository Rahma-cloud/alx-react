import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

function Footer() {
    const { user } = useContext(AppContext);

    return (
    <div className="App-footer">
    <p>Copyright {getFooterCopy(true)} - {getFullYear()}</p>
    {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
    )}
    </div>
    );
}

export default Footer;
