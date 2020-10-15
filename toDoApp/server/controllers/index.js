// Purpose:
//  CRUD for LISTS
//  CRUD for ITEMS
//  CRUD for USERS
// CRUD = Create, Read, Update, Delete

//This index.js is the collection point for all controllers.  All controllers imported and exported here.
//This index.js is the outlet point for all controllers

// Current goal:  Test controller

const TestController = require('./TestController');// imports the testcontroller.js file.
const UsersController = require('./UsersController');


module.exports = { //export an object with listed key/value pairs.  easier to use instead of each controller file being named and imported/requried.
    test: TestController,
    users: UsersController
}

