import React from 'react';
import holbertonlogo from '../assets/holbertonlogo.jpg'
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <header className={css(styles.header)}>
            <img src={holbertonlogo} className={css(styles.img)} alt="Holberton Logo" />
            <h1>School dashboard</h1>
            {user.isLoggedIn && (
                <section className={css(styles.welcomeSection)} id="logoutSection">
                    Welcome {user.email} (<span onClick={this.context.logOut} className={css(styles.logoutLink)}>logout</span>)
                </section>
            )}
            </header>
        );
    }
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
    welcomeSection: {
        marginLeft: 'auto',
        paddingRight: '20px',
    },
    
    logoutLink: {
        cursor: 'pointer',
        color: 'blue',
        textDecoration: 'underline',
    },
})
export default Header;
