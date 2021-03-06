//Challenge: Scaffold out the Navbar component
//User reactstrap to create navbar
//Breand should say ToDo
//2 Links: Lists, Login

import React, {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, Nav} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBarComponent= (props) => {
    //       variable, function
    const [ isOpen, changeIsOpen ] = useState(false); //we destructure the array returned bu the useState function and hooks into event listeners 
    //false passed into the usestate variable (isOpen) and is the default value.  The variable is const and immutable (can not be changed my direct interatcation)

    const toggleNavBarMenu = () => changeIsOpen(!isOpen);
    //navbar will be closed when it comes into view.  this function inverts value of variable isOpen  (state change). Attach to NavbarToggler button


    return (
        <Navbar color="light" light>
        <NavbarBrand>ToDo</NavbarBrand>
            <NavbarToggler onClick={toggleNavBarMenu}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {/* the following is a ternary ? return the true (if) and : returns the false (else) */}
                    {props.isLoggedIn ? (
                        <> 
                        {/*<></> is a jsx fragment */}
                        <NavItem>
                            <Link to="/mylists">My Lists</Link>
                        </NavItem>
                        <NavItem>
                            <p>Logout</p>
                        </NavItem>
                        </>
                        ) : (
                        <>
                        <NavItem>
                            <Link to="/login">Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/register">Register</Link>
                        </NavItem>
                        </>
                     )}       
                </Nav>
            </Collapse>
        </Navbar>
    );
};
export default NavBarComponent;