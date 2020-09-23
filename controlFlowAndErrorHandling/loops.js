/*
* *************
! FOR LOOPS
* *************
    -Loops help us repeat a process without writing a lot of code.

    We need to:
    1) Create an index
    2) Run a condition
    3) Change to the indexing variable (exeuction of condition)
*/

for(let i=0; i <=10; i++) {
    console.log(i);}

/*
    We state our loop with "for".
    Within this function, we are injecting some parameters that JS will run against
        (index; condition; change index --> result
            
        for(<create index variable>; <run condition>; <change index>){
            <return results>
            *will continue until run condition is met.
        }

*/

/*let x = 20;
let i = 10;
for(i; i <= x; i++) {
    console.log(i);}*/

    //! CHALLENGE
    //                       (let i = 2)                         (i > 10)                                               (i -= 4)
    //* Using a for loop, set an idex to 2.  Make a condition  where if that number is greater than -10, change the index by subtracting 4 and console log each iteration


    for(let i= 2; i > -10; i -= 4) {
        console.log(i);
    }

   //let word = 'supercalifragilisticexpialidocious';
    //for(let i = 0; i < word.length; i++) {
     //   console.log(i, word[i]);}
        //checking against a value when I don't know the # of times to iterate.


/*
* *************
! FORIN LOOPS
* *************
*/

    let city = {  // object called city.
        name: 'Indianapolis', //key of city
        pop: 877000, //key of city
        speedway: true //key of city
    };

    for(info in city) { //info is variable
        console.log(info)
        console.log(city[info]);
    }

/*  for( variable IN object) {
        <statement>
    }
*/    

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
    console.log(item);
    console.log(list[item]);
};

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
//let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard';
let fullName; //creates a empty variable to be used at a future point

for(char in name) {
    //console.log(char);
    //if letter index = 0 (p), then change letter to upper case.  if letter index is not = 0, then change letter to lowercase  
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
    console.log(fullName); // this will console log each iteration
}
//console.log(fullName); //this logs the final result of all iterations

/*
  1) We are taking the value of the "n" index and declaring the position of 0
  2) We assign our empty varibale to equal that positioned value.
  3) If that index is 0, we will take that value and run a ".toUpperCase()"" method on it. 
  4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value (or n++).
  5) If the index is NOT 0, we want t run a ".toLowerCase()" method so that all letters are in proper case.
*/

/*
* *************
! FOROF LOOP
* *************

    -In order to run a FOR OF loop, the "thing" must be numbered like an array.

    let object = {
        key = value,
        key = value,
        key = value
    };

    for(o of object) {
        <breaks>
    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}


/*
? Quick Recap:
for loop:  loops through a block fo code until the counter reaches a specified number
for in: loops though properties of an object
for of: loops over iterable objects as any arrays and strings *strings can be accessed much in the same wasy as arrays
*/