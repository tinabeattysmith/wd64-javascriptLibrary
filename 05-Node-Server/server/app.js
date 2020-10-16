require('dotenv').config();


var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');

sequelize.sync(); // tip:  pass in {force: true} for resetting tables
app.use(express.json());

//ADD MIDDLEWARE HEADERS //! THIS MUST COME BEFORE ROUTES ARE DECLARED
app.use(require('./middleware/headers'))// activating the middleware headers exported from headers.js


app.use('/test', test);
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint.  It's from the server")
});

app.use('/user', user);

//3        //4
app.listen(3000, function() {
    console.log('I have no clue!')   
});


















