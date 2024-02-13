import React from 'react';
import holbertonlogo from '../assets/holbertonlogo.jpg'
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <header className={css(styles.header)}>
        <img src={holbertonlogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        </header>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '18px',
        color: 'red',
    }
})
export default Header;
