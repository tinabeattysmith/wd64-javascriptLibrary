var express = require('express'); //1
var app = express(); //2



//3        //4
app.listen(3000, function() {
    console.log('I have no clue!') //5   
});

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint.  It's from the server")
});


var test = require('./controllers/testcontroller')//1 importing the route object created
       //2 1st parameter ('/test') is base url    //3 2nd parameter is the route object variable


let sequelize = require('./db');

sequelize.sync(); // tip:  pass in {force: true} for resetting tables

app.use('/test', test)








