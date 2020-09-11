/*
! TYPES

? Data and Structure Types
    Primitive Data Types:
        - boolean
        -undefined
        -number
        -string
            -bigInit
            -symbol
        -null
        -Object
        -function
        */

        //? Booleans

        // A boolean and two possible values: true and false

        let on = true;
        let off= false;
        console.log(on);

        // ? NULL
        // A null value is an empty value.  Think of it as an empty container that has space to fill.

        let empty = null;
        console.log(empty);

        //? UNDEFINED
        //No value has been assigned to a container.
            //Null you can trust as zero - undefined not so much
         //undefined is when a variable has never been set, or hasn't been created yet.   

        let password;
        console.log(password);


        //?Numbers
        let dgrees = 90;
        console.log(dgrees);

        let precise = 9999999999999999; // 16 9's
        console.log(precise);
        //JS gives space for 15 9's before rounding up.

        let notQuite = 0.2 + 0.1;
        console.log(notQuite);
        //JS rouunds out to a certain number, so if math is needed, be aware

let whatif = (0.2 * 10 + 0.1 * 10);
console.log(whatif);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//? STRINGS

//Strings represent text and are wrapped in single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';// because using single quote, the ' in I've is acting like the closing single quote.  Adding the \ indicates ' is not the closing single quote and I want to actally use it and there will be one more single quote to close.
console.log(inception, singleQ);

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = "1150" + "150"; //concatenation
console.log(addTheseAlso);

//operator to view what type something is.  Operator 'typeof' returns a string that tells what type of variable is used.
console.log(typeof addThese);
console.log( typeof addTheseAlso);

let stringToNum = Number('1150');
console.log(stringToNum);
console.log(typeof stringToNum);

//const log = console.log;  //we can reduce our typing by setting console log to a variable that doesn't change.
//log('test');

 //? Objects
 /*
    objects are used to store manyu values instead of a singular value.
    Consider these as an collection of various properties
    denoted by curly brackets {}
    
 */

 let frodo = {
     race:  'hobbit', //string
    //(1)   (2)
     rings: 1, // number
     sting: true, //boolean
 }

 console.log(frodo);
 console.log(typeof frodo);
 // 1: Key
 // 2: Value


 //? ARRAYS
 /*
    - containers that hold a list of items.
    -denoted by square brackets []
    -all items are withing the square brackets
    -regardless of datatype, each item is seperated by a comma 
 */

 let arrayList = ['pos 1', 'pos 2', 'pos 3'];
 console.log(arrayList);
 let anotherExample = [1, 2, 'three', true]
 console.log(anotherExample);
 console.log(typeof arrayList);
 console.log(typeof anotherExample);

 //JS classified arrays as objects and not a data type of thier own.

 //?  Addition vs Concatenation
 /*
    - JS sees the "+" symbol in two different ways
        - When combined with numbers, uses built-in math function.
        - When combined with strings, it ignores the math anc cancats the two strings.
 */

 let strings = 'one' + ' ' +'is number';
 let concatDiff = 1050 + '100';
 console.log(strings);
 console.log(concatDiff);
 console.log(typeof concatDiff);



 /*CHALLENGE:::
 Set 7 (or 8) variables:
 firstName
 lastName
 houseNumber
 aptNumber (if applicable)
 street
 city
 state
 zipcode
 Set each variable to its respective type.
 console.log your whole address (with a space between variables).
*/

let firstName = 'Tina';
let lastName = 'Beatty-Smith';
let houseNumber = 1234;
//let aptNumber = ' ';
let street = 'Test Dr.';
let city = 'Testville';
let state = 'TE';
let zipcode = 12345;
console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

//? string: Properties

/*
 - strings have properties, or the qualities assoicated with that string.
 - the length of a string is a property

*/

let myName = 'Tina Beatty-Smith';
console.log(myName.length);

//? String: Methods
/*
 -Methods are tools that can help us manipulate data
*/

let myNameIs = "Tina";
console.log(myNameIs.toUpperCase()); //method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); 

let home = 'My home is Indianapolis';
console.log(home.includes('Fishers')); //method that checks that variable includes the a specific term and returns either true or false.


//

