/*
* **********
! HOISTING
* **********

    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed.
        - Only the declaration is pulled up, NOT the assignment.

*/
//console.log(hoistedVar);

//console.log(`How JS see hoistedVar: `, typeof hoistedVar);
//var hoistedVar = 'using var'; // JS recognizes the varable, but returns undefined because the assignment is not hoisted.
//let hoistedVar = 'using let'; //returns error:  cannot access hoistedVar before initialization.  let does not hoist and returns error as if there is no variable.

//console.log(noVariable);


//? Hoisting  in a Function
//This process is considered the same within a function.  On the first pass, it reads it, pushes the declarations to the top, and then on the 2nd pass, it executes them in the order that they are written.

function testHoist(){
    becomesGlobal = "not declared, it becomes part of the global scope";
    console.log(`Prior to declaring `, insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}
testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of whether they are in a function or global scope.  This makes it clear how it should be handled.

//? Using LET
//The keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError (Cannot access 'letVariable' before initialization)due to ES6 not accpepting undeclared variables.  This is to ensure we ALWAYS declare our variables FIRST.


//? Hoisting Function
//Function Declarations:

hoistedFunc();// this is the on button for coffee maker.

function hoistedFunc() {
    console.log(`This is a hoised function`);
}

//Function Expressions:
//These are NOT hoisted.

expressionFunc();  

let expressionFunc = function() {
    console.log('Works?');
} // returns Cannot access 'expressionFun' before initialization
// we do not want to hoist, but we need to understand it is happening so we can debug. Let introduced in ES6 to allow more control.
