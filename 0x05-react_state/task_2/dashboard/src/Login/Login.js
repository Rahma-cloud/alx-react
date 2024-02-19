import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useAppContext } from '../App/AppContext'

function Login() {
  const { login } = useAppContext();

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    enableSubmit: false,
  });
  
  const handleChangeEmail = (event) => {
    setLoginState({
      ...loginState,
      email: event.target.value,
      enableSubmit: event.target.value !== '' && loginState.password !== '',
    });
  };

  const handleChangePassword = (event) => {
    setLoginState({
      ...loginState,
      password: event.target.value,
      enableSubmit: loginState.email !== '' && event.target.value !== '',
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(loginState.email, loginState.password);
    // Add logic for handling login submission (e.g., API call, validation, etc.)
  };

  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={loginState.email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginState.password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="OK" disabled={!loginState.enableSubmit} />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '45%',
    fontSize: '14px',
    marginTop: '50px',
    marginBottom: '35%',
  },
});

export default Login;
