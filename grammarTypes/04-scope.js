/*
* *********
! SCOPE
* *********

    What is scope?  code with intention

        -scope is how a computer keeps track of all the variables in a program.
        -scope can also be nested, where there's an outer space (global) that enclosed an inner scope.
            - outer (global) is outside of our function but can be accessed the file.
            - inner (local) only exist when the fuction is called.


*/

let scope = 'Earth' // this is currently in the global scope of our JS file.  Available to multiple functions - all aspects of our code.

function localScope() {
    let scope = "Indiana"; //the state (local) within JS "World/Globe"
    //console.log(`${scope} marks the the local scope`);
    let place = 'Bloomington';

    function veryLocalScope(){
        let scope = 'Indianapolis';
        console.log(`${scope} is the capital of Indiana`)
        console.log(`Just outside, we went to ${place}`)
    }
    veryLocalScope();
}; // this function is an example of a scope chain. 


console.log(`${scope} marks the the global scope`);
localScope();
// Scope Chain:  If a variable is not found, JS attempts to locate the requested information outside. Similar to parent/child in HTML or CSS If parent is changed, children may be impacted.  If child is changed, parent is not impacted.
//console.log(place);// returns place undefined because is defined locally.

//! ORDER MATTERS  
//  JS reads from top to bottom and acts according to what is beign asked.
// JS is a single-threaded language which means it can only execute a single task at a time.

let ordered = 1;

function layerOne() {
    let ordered = 2;
    //console.log(ordered);

    function layerTwo() {
        let ordered = 3;
        console.log(ordered);
    }

     layerTwo();
     console.log(ordered);
}    
    layerOne();
    console.log(ordered);


    
//? Reassignments / VAR vs LET
//  - var is coped to the nearest function block.
//  - let is coped to the nearest enclosing block.

let a = 10;

function reassign() {
    a = 30  // we are keeing this variable open and, with the 'let' keyword, we are capable of changing the value that is currently being held withing that variable.
    console.log(`a is being set to ${a} in this function`);
}

console.log(`Before reassigning function: ${a}`);
reassign();
console.log(`After reassigning function: ${a}`);



var x = 2;

function varScope() {
    var x = 4;
    if(true) {
        var x = 5;
        console.log(x)
    };
    console.log(`var Block Scope: ${x}`)
}

    varScope();
    console.log(x);


 // statements like "if" or loops don't create a new scope. If a variable is defined inside a block statement, it will remain in that scope.  However, we can utilize let and const as keywords to help us contorl how our variables are viewed.   

