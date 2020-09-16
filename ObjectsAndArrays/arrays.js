/*
* *********
! ARRAYS
* *********
*/

//? POPULATING AND REFERRING

let list = ['orange', 'banana', 'oreos']
console.log(list[1]);

// JS counts starting at 0.  So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference.  This is SQUARE BRACKET NOTATION


let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
//console.log(typeof students);
console.log(students instanceof String);  // the instanceof operator is used to check the type of an object at run time.  Remember that arrays are technically objects.
console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
//index position (0)      (1)         (2)     (3)  (4)  (5)            (6)
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];
//                                                              (0)     (2)      (1)

console.log(students[1]);
console.log(students[6][2]);
console.log(`Hello ${students[1]}!`);
console.log(`Hello ${students[6][2]}!`);

//? ARRAY METHODS

// We have mutliple methods to allow us tomanipulate arrays as we may need.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (foodItem of food) {
    console.log(foodItem);
}

//Add to our array:  push method
food.push('Pizza');
//console.log('push: ', food);
console.log(food);

//Remove and insert:  splice method

food.splice(1 , 1, 'Bananas');// Removes Shrimp and adds Bananas => postion, how many to remove, what to add
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice: ', food);

//Remove from end:  pop method
food.pop();// pop removed the last item of an array
console.log('pop: ', food);

//Adds to the start:  unshift method
food.unshift('Popcorn', 'Steak'); //adds one or more items to the beginning of the array
console.log('unshift: ', food);

//Remove from start:  shift method
food.shift(); // shift remove the first element in an array
console.log('shift: ', food);

//? LENGTH
// We can use a method called length() that can tell us how many values are within our array.

let long = [1,2,3,4,5,6,7,8,9,10]; 
console.log(long.length); // returns the number of values (# of indices), not the index of the value.

let color = ['pink', 'yellow', 'blue', 'green'];
console.log(color.length);

console.log(color);
console.log(color.toString());



//? ITERATING
/*
    forEach -
        -the forEach() method executes a provided function once for each element in an array - much like a for loop or a for of loop

        - runs three agrumetns
            1. The Value
            2. The Index
            3. the array object itself
*/

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

//for(let i = 0; i < foodList.length; i++) {
//    console.log(foodList[i]);
//}

// we invoke callback funtion for each element withing our array
foodList.forEach(foodItem => console.log(foodItem));
// A callback function (parameter) is another function we invoke within our main function

//function print(callback) {
//    callback();
//}

foodList.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index)
})
//- the second postion of the parametr is ALWAYS the index.

/*
! CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movieList = ['Outbreak', 'Moana', 'Toy Story', 'Transformers', 'Endgame'];
    console.log('Before');

    movieList.forEach(movieItem => console.log(movieItem));

    movieList.push('How to Lose a Guy in 10 Days');
    movieList.splice(2, 1, 'G-Force');

    console.log('After');

movieList.forEach(movieItem => console.log(movieItem));