const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user');
const jwt = require('jsonwebtoken');

router.post('/createuser', function (req, res){
    const username = req.body.user.username;
    const pass = req.body.user.password;

    User.create
    ({
        username: username,
        passwordhash: pass

    }).then(
        function createSuccess(user){
            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                user: user,
                message: "created",
                session: token
            });
        },
        function createError(err){
            res.send(500, err.message)
        }
    );
});
module.exports = router;