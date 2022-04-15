import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { Layout, Typography, Sapce, Switch } from 'antd';
import {Navbar, Exchange,CryptoDetails, Cryptocurrencies,News,Homepage } from './components';
import './index';
import  "./App.css";

const App = () => {
  return (
    <div className='app'>
    <div className='navbar'>
    <Navbar/>
    </div>
    <div className='main'>
   
  
   
    </div>

    <div className='footer'>
    
    </div>
    </div>
  )
}

export default App;