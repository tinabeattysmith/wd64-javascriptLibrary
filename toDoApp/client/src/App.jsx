import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/Login'
import NavBarComponent from './components/Navbar'

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <div id="wrapper">
        <LoginComponent />
      </div>
    </div>
  );
}

export default App;
