import React, { useState } from 'react';
import {
    Form,
    Button,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import "../styles/register.css"

// functional component
const RegisterComponent = (props) => {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ passwordConfirm, setPasswordConfirm] = useState("");

    const triggerEmailInputChange = (event) =>{
        setEmail(event.target.value);
    }
    const triggerPasswordInputChange = (event) =>{
        setPassword(event.target.value);
    }
    const triggerPasswordConfirmInputChange = (event) =>{
        setPasswordConfirm(event.target.value);
    }
    const handleUserRegister = (event) => {
         event.preventDefault();         
        //  verify email and password values exist
        //  Password and Confirm values must match
        //  Register the user uisng a fetch -> {server}/user/register
        if (email && password) {
            if(password === passwordConfirm){
                console.log("REGISTERING USER");
            fetch('http://localhost:8080/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then(response => response.json())
            .then(() => {
                console.log("User is successfully registered");
                // TODO: Add login automatically
            })
             .catch(error => console.log(error));
            } else {
                // TODO: change to a tooltip instead of alert
                alert("passwords MUST match!");
            }
         }
     };
    // Think about how to handle a token

    return (
        <div className="authForm" id="registerForm">
            <Form onSubmit={handleUserRegister}>
                <h3>Register by completing the information below.</h3>    
                <FormGroup>
                    <Label htmlFor="registerEmail">Email:</Label>
                    <Input onChange={triggerEmailInputChange} value={email} id="registerEmail" type="email" name="registerEmail" />
                </FormGroup>

                <FormGroup>                   
                    <Label htmlFor="registerPassword">Password:</Label>
                    <Input onChange={triggerPasswordInputChange} value={password} id="registerPassword" type="password" name="registerPassword" />
                </FormGroup>

                <FormGroup>                   
                    <Label htmlFor="registerConfirmPassword">Confirm Password:</Label>
                    <Input onChange={triggerPasswordConfirmInputChange} value={passwordConfirm} id="registerConfirmPassword" type="password" name="registerConfirmPassword" />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>
    );
};

export default RegisterComponent;