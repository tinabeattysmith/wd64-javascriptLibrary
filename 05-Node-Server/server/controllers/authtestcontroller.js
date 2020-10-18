const router = require('express').Router();
//const sequelize = require('sequelize');
const Sequelize = require('../db');
var User = require('../models/user')(Sequelize, require('sequelize'));
var AuthTestModel = require('../models/authtest')(Sequelize, require('sequelize'));

/********************************
GET ALL ITEMS FOR INDIVIDUAL USERS
**********************************/

router.get('/getall', function(req, res){
    var userid = req.user.id;

    AuthTestModel
        .findAll({
            where: {owner: userid}
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
})


/********************************
POST SINGLE ITEM FOR INDIVIDUAL USER
**********************************/

router.post('/create', function (req, res) {
    var owner = req.user.id;
    var authTestData = req.body.authtestdata.item;

    AuthTestModel.create({
            authtestdata: authTestData,
            owner: owner
        })
        .then(
            function createSuccess(authtestdata) {
                res.json({
                    authtestdata: authtestdata 
                });
            },   
            function createError(err) {
                res.send(500, err.message);
            }
        );
});


/********************************
GET SINGLE ITEM FOR INDIVIDUAL USER
**********************************/

router.get('/:id', function (req, res) {

    var data = req.params.id;
    var userid = req.user.id;

    AuthTestModel
        .findOne({
        where: {id: data, owner: userid}
        })
            .then(
                function findOneSuccess(data) {
                res.json(data);
                },
        function findOneError(err) {
            res.send(500, err.message);
        }
    );
});



/********************************
DELETE  ITEM FOR INDIVIDUAL USER
**********************************/
router.delete('/delete/:id', function(req, res){ //:id allows a parameter to be passed through the URL to the server so we can use it later.
    var data = req.params.id;
    var userid = req.user.id;

    AuthTestModel
        .destroy({
            where: {
                id: data, owner: userid
            }
        })
        .then(
            function deleteLogSuccess(data){
                res.send('you removed a log');
            },
            function deleteLogError(err){
                res.send(500, err.message);
            }
    );
});


/********************************
UPDATE SINGLE ITEM FOR INDIVIDUAL USER
**********************************/
//PUT replaces whatever is already there with what we give it. In other words, PUT means update.
router.put('/update/:id', function (req, res) {
    var data = req.params.id;
    var authtestdata = req.body.authtestdata.item;

    AuthTestModel
        .update({
            //update is a Sequelize method which takes two arguments.
                //First argument of update. Contains an object holding the new value we want to edit into the database.
                //Second argument of update. Tells Sequelize where to place the new data if a match is found.
            authtestdata: authtestdata,
        },
        {where: {id: data}}
        ).then(
            function updateSuccess(updateLog) {
                res.json({
                    authtestdata: authtestdata 
                });
            },   
            function updateError(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;