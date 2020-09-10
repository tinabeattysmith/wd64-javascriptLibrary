/*
Variables
*/

console.log('hello'); //F8 to open console.  look at Output tab
// The console log is a debugging tool.

let a = 2;

/*
- let  :  is our KEYWORD
- a    :  is our NAME of our variable
- =    :  is our ASSIGNMENT OPERATOR
- 2    : is our variable VALUE
*/

let b = 1;

console.log(a+b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollar sign.
    - numbers may follow the above characters, BUT cannot come first.
    - javascript IS case sensitive - 'hello' and 'Hello', these would be different variables.
    - no spaceds are allowed in variable names.
    - camelCase is the best practice for naming.
    - ex:
        let myName = 'Eric';
        is easier to read than
        let myname = 'Eric';
*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
//let 4startsWithNumber = "Breaks";

console.log(startingWithLetter, _startingWithUnderscore,$startingWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;


/* 
! KEYWORDS

var, let, and const
    - var: 'old' keyword that stands for variable.  ** we won't be using it as often, but is still viable to use.

    - let:  'new' keyword that stands for variable.  (introduced with ES6 *newest version of ECMAScript, whichis a standarization of JS)
        -ECMAScript is the true name of javascript.  Javascript is the adopted name.
        
    - const:  also 'new' keyword that declares and UNCHANGEABLE, or constant, variable.

*/

var variable = 'var variable';
let letVariable = 'let variable';

//let function = 1; Cannot use reserved words within a variable name - *function is a reserved word.


/*
! DECLARATIONS & INITIALIZATIONS

*/

//Declarations are the LEFT SIDE of the assignment operator
//let x;

//Initializations are the RIGHT SIDE of the assingment operator
//let x = 10;

let y;
console.log('declaration: ',  y);

y = 10;
console.log('initialization: ',  y);

y = 33;
console.log('initialization 2: ',  y);
//var y  allows hoisting.  This is not a feature, but a side effect of rushed development.

// We've set our variable with our let keyword.  With each iteration, we have redeclared what it is.

//? const

let today = 'Great!';
const efa = 'Wonderful';
console.log(today, efa);

today = 'Awesome!';
console.log(today, efa);

//efa = 'Super';  returns an error because efa was declared as a const.
console.log(today, efa);
// const allows us to make a variable that we don't want to change.

