import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function App() {
  return (
    <>
       <Notifications />
       <Header />
       <hr />
       <Login />
       <Footer />
    </>
  );
}

export default App;
