import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import LoginComponent from './components/Login'
import NavBarComponent from './components/Navbar'

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState("");

  //TODO:  Load up the auth token if it is stored locally (on startup);

  //helper function to save the JWT locally and in the browser
  const authenticateUser = (token => {
    window.localStorage.setItem("authToken", token)
    // use the "State Change" function to set the new token in the state
    changeAuthJWT(token);
  })

  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent/>
        <Switch>
          <Route path="/login">  
            <LoginComponent authenticateUser={authenticateUser}/> 
            {/* authenticateUser is a prop which is equal to the authenticateUser function */}
          </Route>
        </Switch>
      </div>    
    </BrowserRouter>    
  );
}

export default App;
