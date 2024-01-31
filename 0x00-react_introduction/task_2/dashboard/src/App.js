import React from 'react';
import './App.css';
import holbertonlogo from './holbertonlogo.jpg'
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonlogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <hr/ >
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <hr/ >
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
