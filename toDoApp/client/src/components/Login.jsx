// const React = require('react')  same as import statement below
import React, { useState } from 'react'; //short hand.  Browsers not utilizing ES6 do not play well
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "../styles/Login.css";
//TODO: Build functionality to send infor to the api
//challenge
//create 2 state variables and wire up the two input fields with the state variables.


const LoginComponent = (props) => {
    //set my state variables
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const triggerEmailInputChange = (event) =>{
        setEmail(event.target.value);
    }
    const triggerPasswordInputChange = (event) =>{
        setPassword(event.target.value);
    }
    //everytime push button in one of the fields, it triggers a re-render process.  Targeted re-render.  Only re-renders the things that changed.
    //single page web application
 

    const handleloginSubmit = (event) => {
        event.preventDefault();
        // if both email and password are present,
        // send to api to verify if it is a user
        //if response is ok, take token from the respnose and call the props.authenticateUser function
        //if response is NOT ok, display an error message, but do nothing
        if (email && password) {
            fetch('http://localhost:8080/user/login' , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                // this is a promise.  The .then() is instructing us to wait until the promise is returned then do something with it.
            }).then(response => response.json())
            // returns another promise...not sure how long it will take to return the json.  Once the json is returned, data, then so something with it.
            .then(responseBody => {
                // data is the body
                props.authenticateUser(responseBody.token)
            })
            .catch(error => console.log(error));
        }
    };
    
    return (
        <div>
            <Form className="authForm" id="loginForm" onSubmit={handleloginSubmit}>
            <h3>Login</h3>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input onChange={triggerEmailInputChange} value={email} id="email" type="email" name="email" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={triggerPasswordInputChange} value={password} id="password" type="password" name="password" />
            </FormGroup>
            <Button>Login</Button>
            </Form>
        </div>
    );
};

//module.exports = LoginComponent;
export default LoginComponent;