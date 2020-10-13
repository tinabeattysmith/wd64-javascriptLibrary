var express = require('express'); //1
var router = express.Router(); //2

//3    //4    //5         //6
router.get('/', function (req, res) {
       //7
    res.send('Hey!!! This is a test route!');
    res.send('This is about for Challenge 1');
});

router.get('/about', function (req, res) {
    //7
res.send('This is about for Challenge 1');
});

router.get('/contact', function (req, res) {
    //7
res.send({name: "Tina", email: "tinabeattysmith@gmail.com"});
});

router.get('/projects', function (req, res) {
    //7
res.send(['Project 1', 'Project 2']);
});

router.get('/myContacts', function (req, res) {
    //7
res.send([{name: "Jeff", email: "Jeff@jeffy.com"},
{name: "Austen", email: "Austen@buddy.com"},
{name: "Audrey", email: "Audrey@sissy.com"},
{name: "Hope", email: "Hope@dopy.com"}]);
});

//8
module.exports = router;


