// const React = require('react')  same as import statement below
import React, { useState } from 'react'; //short hand.  Browsers not utilizing ES6 do not play well
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

//TODO: Build functionality to send infor to the api
//challenge
//create 2 state variables and wire up the two input fields with the state variables.


const LoginComponent = () => {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const triggerEmailInputChange = (event) =>{
        setEmail(event.target.value);
    }
    const triggerPasswordInputChange = (event) =>{
        setPassword(event.target.value);
    }

 
    return (
        <div>
            <h3>Login</h3>
            <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input onChange={triggerEmailInputChange} value={email} id="email" type="text" name="email" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={triggerPasswordInputChange} value={password} id="password" type="password" name="password" />
            </FormGroup>
            <Button>Login</Button>
            <p>Email useState: {email}</p>
            <p>Password userState: {password}</p>
           
        </div>
    )
};

//module.exports = LoginComponent;
export default LoginComponent;