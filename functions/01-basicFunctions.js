/*
* ************
! Functions
* ************

Functions are a processes that we call upon to run an actoin.
    - Take in input so that it can process it, modify it or just respond to to.
    - Returns a value (but not always)
    - Can be involed (called upon) as often as we need
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

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/
 
let grade = 100;
switch(true){

    case (grade >= 89 && grade <= 100):
        console.log(`Great Job! Your grade is an A.`);
        break;
    case (grade < 89 &&  grade >= 79):
        console.log(`Good Job! Your grade is a B.`);
        break;
    case (grade < 79 &&  grade >= 66):
        console.log(`Keep going! Your grade is a C.`);
        break;
    case (grade < 66 &&  grade >= 59):
        console.log(`Keep trying, you can do this! Your grade is a D.`);
        break;
    case (grade < 59):
        console.log(`I believe in you! Let's talk. Your grade is a F.`);
}
