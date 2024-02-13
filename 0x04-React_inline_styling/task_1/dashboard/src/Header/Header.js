import React from 'react';
import holbertonlogo from '../assets/holbertonlogo.jpg'
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <header className={css(styles.header)}>
        <img src={holbertonlogo} className={css(styles.img)} alt="Holberton Logo" />
        <h1>School dashboard</h1>
        </header>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '18px',
        color: 'red',
    },

    img: {
        width: "200px",
        height: "200px",
      },
    
})
export default Header;
