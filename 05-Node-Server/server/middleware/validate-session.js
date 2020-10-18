var jwt = require('jsonwebtoken');
var Sequelize = require('../db');
var User = require('../models/user')(Sequelize, require('sequelize'));

module.exports = function(req, res, next) {
    if (req.method == 'OPTIONS') {
        next()
    } else {
        var sessionToken = req.header.authorization;  //created to hold token which is pulled from the authorization header of the incoming request
        //console.log(sessionToken) //for debugging to verify token is being sent to the server.  //!REMOVE
            if (!sessionToken) return res.status(403).send({auth: false, message: 'No token provided'});//if no token present, return error.
            else { //no user property is ever provided in request.  Ensure you are who you say you are.  Prevents using token assigned to another user.
                jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //decodes the token with provided secret, send callback with two variables
                    if(decoded){ //successful, decoded will contain the decoded payload.  If not successful, decoded remains undefined.  err is null by default
                    User.findOne({where: {id: decoded.id}}) //if decoded has a value, the Sequelize findOne method looks for in an in the users table that matches the decoded.id property
                .then(user => { //value of decoded.id is passed into the a callback.
                    req.user = user; //the callback sets the user value for the request to the value of the decoded.id in the callback
                    next(); //sends the request to next destination
                }, 
                function() {
                    res.status(401).send({error: 'Not authorized'}); //if no matching id found
                });
                } else {
                    res.status(400).send({error: 'Not authorized'}); //if no value for decoded
                }
            });
        }
    }
}