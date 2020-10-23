import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';
import LoginComponent from './components/Login'
import NavBarComponent from './components/Navbar'
import RegisterComponent from './components/Register'

function App() {

  const [ authenticationJWT, changeAuthJWT ] = useState("");

  /*
    USEEFFECT NOTES:
    1) If you make a useEffect without the array, it will fire each time the app is rendered to the screen.
    2) If you have an empty array in the useEffect, it will fire only when the component is first MOUNTED to the screen.
    3) if you include a dependency in the array, it will fire when that dependency IS UPDATED
  */
 // If the user had logged in
  useEffect(() => {
    if(window.localStorage.getItem('authToken')){
      console.log("abc")
      changeAuthJWT(window.localStorage.getItem('authToken'));
    }
  }, [])

  //helper function to save the JWT locally and in the browser
  const authenticateUser = (token => {
    window.localStorage.setItem("authToken", token)
    // use the "State Change" function to set the new token in the state
    changeAuthJWT(token);
  })

  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent isLoggedIn={authenticationJWT} />
        <Switch>
          <Route exact path="/login">  
            <LoginComponent authenticateUser={authenticateUser}/> 
            {/* authenticateUser is a prop which is equal to the authenticateUser function */}
          </Route>
          <Route exact path="/register">
            <RegisterComponent />
          </Route>
        </Switch>
      </div>    
    </BrowserRouter>    
  );
}

export default App;
