var express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
var router = express.Router(); 
var sequelize = require('../db');
var User = require('../models/user'); 
var jwt = require('jsonwebtoken'); //imports the package

router.post('/createuser', function(req, res){
    
    var username = req.body.user.username; //refactored
    var pass = req.body.user.password;  //refactored

    User.create({
        username: username,
        passwordhash: pass

    }).then(//refactored
        function createSuccess(user){
            res.json({
                user: user,
                message: "created"  //1-refactor
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;