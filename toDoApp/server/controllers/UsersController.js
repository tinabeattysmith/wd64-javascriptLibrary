const { Router } = require('express');
const UsersControllerRouter = Router(); // creates a new instance of Router

//CRUD-DY CODE FOR USERS
// C - Create a user by registration    (url): "/register"
// R - Read the user profile            (url): "/profile", "login"  
// U - Update user information          (url): "/update"
// D - Delete user                      (url): "/delete user"


// Kinds of requests:
// POST - Create new info, insert info into db, sends information in general
// GET - Retrieve information, or pull information from db (give me an html document)
// PUT - Modify existing existing information
// DELETE - Delete data from db

UsersControllerRouter.post('/register', (request, response) => {
    //  PROCESS:
    //  Retrieve the data from the body of the request
    //  Use that data to craft a USER
    //  Respond with the status of the action

    response.json({
        message: "Hello from the user Register route!"
    })
})

UsersControllerRouter.post('/Login', (request, response) => {
    //  PROCESS
    //  Retrieve the data from the body of the request
    //  Verify the user exists, and the data matches what is in the record
    //      If true, respond with a token
    //      If false, respond with "Get off my lawn!"

    response.json({
        message: "Hello from the user Register route!"
    })
})

// TODO: Implement the following routes:  "profile", "update", "terminate"

module.exports = UsersControllerRouter;

