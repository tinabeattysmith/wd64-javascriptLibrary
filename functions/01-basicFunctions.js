/*
* ************
! Functions
* ************

Functions are a processes that we call upon to run an actoin.
    - Take in input so that it can process it, modify it or just respond to to.
    - Returns a value (but not always)
    - Can be invoked (called upon) as often as we need
*/

// 1      (2)
function hi(){
    console.log("Hi!");
}

//1: Keyword
//2: Name of the function and the parenthesis for the parameter.

// (1)      (2)       (3)
function functionName() {
//     (4)
    return value
};
//  (5)
functionName()

//1-4 is the coffee maker, 5 is the start button

/*
    - 1 KEYWORD "function"
    - 2 NAME of "functionName"
    - 3 PARAMETER "currently empty"
    - 4 STATEMENT "to process"
    - 5 INVOKE "on switch"
*/

//? Function Declaration
// A chunk of code that performs a set action when it is invoked.

function funcOne() {
    console.log('Statement Here:');
}
funcOne();

//? Function Expression
// Assigning a function to a variable is what is called an EXPRESSION

let first = function funcTwo() {
    console.log('Second Statement');
}
first()
//console.log(first)   (return that first was a function called funcTwo)


//? Anonymouns Function
// Anonymous Functions are stored in memory but the runtime doesn't automatically create a reference to it.

let anon = function() {
    console.log('anon function')
}
anon();

//? Parameters 
//Allow us to accept information already declared.

function parameterFunc(num) {
    //num is a placeholder
        console.log(num);
}

parameterFunc(4);
parameterFunc(5);
parameterFunc(9);
parameterFunc(100);

let returnedVal = 5;
parameterFunc(returnedVal);


let firstName = "Jane";
let lastName = "Doe";

function greeting(first, last){
    //first is a placeholder in the 1st position and last is a placeholder in the 2nd positions
    console.log(`Hi,${first}! Welcome back!`);  
    //looking at position 1
    console.log(`This is the first parameter: ${first}`);  
    //looking at position 1
    console.log(`This is the last parameter: ${last}`);  
    //looking at position 2
}

// greeting(firstName); 
    //looking at position 1
// greeting(lastName);
    //looking at position 1
greeting(firstName, lastName);
    //looking at position 1, position 2
//greeting(firstName, null);
//greeting('', lastName);