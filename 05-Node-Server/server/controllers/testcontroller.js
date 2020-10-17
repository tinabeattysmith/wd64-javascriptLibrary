var express = require('express');
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test'); //1b

/*************************
 * Controller Method #1: Simple Response
**************************/
       //1      //2
router.post('/one', function(req, res){
     //3
    res.send("Test 1 went through")

});

/*************************
 * Controller Method #2: Persisting Data
**************************/

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; //2b

    TestModel //3b
        .create({ //4b
            //6b
            testdata: testData //5b
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});


/*************************
 * Controller Method #3: req.body
**************************/
router.post('/three', function (req, res) {
                    //1c
    var testData = req.body.testdata.item;

    TestModel
        .create({ //2c
            testdata: testData
        })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

//STEP 4 - Use this with Postman
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then( //1d
            function message() { //2d
                res.send("Test 4 went through!")
            }
        );
});

/*************************
 * Route #5: Return data in a Promise
**************************/
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(              //1e
            function message(data){
                res.send(data); //2e
            }
        );  
});

/*************************
 * Route #6: Return response as JSON
**************************/
router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(              
            function message(testdata){
                res.json({ //1f
                    testdata: testdata //2f
                }); 
            }
        );
});

/*************************
 * Route #7: Handle errors
**************************/
router.post('/seven', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(              
            function message(testdata){
                res.json({ //1f
                    testdata: testdata //2f
                }); 
            },
            function createError(err) { //1g
                res.send(500, err.message);
            }
        );
});

/*************************
 * GET: A simple message from server
**************************/

router.get('/helloclient', function(req, res) {
    res.send('This is a message from the server to the client')
})

/*************************
 * Get: /one
**************************/
router.get('/one', function (req, res){
    
    TestModel
        .findAll({
            attributes: ['id', 'testdata']
        })
            .then(
                function findAllSuccess(data){
                    console.log("Controller data:", data);
                    res.json(data);
                },
                function findAllError(err){
                    res.send(500, err.message);
                }
            );
        });


module.exports = router;