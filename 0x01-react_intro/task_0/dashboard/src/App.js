import React from 'react';
import './App.css';
import holbertonlogo from './holbertonlogo.jpg'

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
      </div>
      <div className="App-footer">
        <hr/ >
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
