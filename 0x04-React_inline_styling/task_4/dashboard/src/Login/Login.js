import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.loginForm)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" autoComplete="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" autoComplete="current-password" />
        <button>OK</button>
        </form>
        </div>
    );
}

const styles = StyleSheet.create({
    loginForm: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
        },
        
    },
    body: {
    height: '45%',
    fontSize: '14px',
    marginTop: '50px',
    marginBottom: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
   },
});

export default Login;
