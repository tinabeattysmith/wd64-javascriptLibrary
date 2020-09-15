/*
* *********
! ARROW FUNCTIONS
* *********

Arrow functions are expressional functions that can be simplified into one of two forms. CONCISE and BLOCK BODY.
The main goal is to generate shorter syntax for writing a function.

* Arrow functions also do NOT get hoisted.

*/

function regFunc() {
    console.log('Regular');
}

regFunc();

//    (1)       (2)(3)       (4)
let arrowFunc = () => console.log('Arrow Func');
arrowFunc();//still need to invoke our function

/*
    1. Arrow functions are ALWAYS anonymous.
    2. Parameters are still capable of being injected.
        - if we only have one parameter, we techically don't need the params ()
        - BUT if we are not passing any parameters, it is REQUIRED to denote ()
    3. The arrow is syntax that tells JS it is getting ready to process a function
        - => nicknamed fat arrow
    4. Within the above, JS assumes console.log('Arrow Func') is the return statement.

*/

//? CONCISE VS BLOCK BODY

//* Concise:
// => means function
 let cBody = (x , y) => console.log(x + y);
 cBody(1,2);

 let slightlyComplex = (x,y) => x > 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) :
 console.log(`${x} and ${y} are where we want them`);

 slightlyComplex(3,1);
 slightlyComplex(1,5);

//*Block:
let blockArrow = (x,y) => {
        return `${x} are within a ${y}`;
}

console.log(blockArrow('We', "Block Body"));

let sampleBlock = x /*because only one param, parenthesis are not required but can still be used.*/ => {
    console.log(x);
}

sampleBlock(99);


