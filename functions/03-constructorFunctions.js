/*
* *********
! CONSTRUCOR FUNCTIONS
* *********
    - Functions allows us to easliy create a unique solution for different circumstances by using parameters.
        - creating several different objects with th esame keys but different names
*/


//Opt 1:
let person1 = {
    name: "Macy",
    age: 24,
    canVote: true
};

let person2 = {
    name: "Jeremy",
    age: 15,
    canVote: false
};

let person3 = {
    name: "Tyler",
    age: 38,
    canVote: true
};

//Opt 2
//  (1)     (2)       (3)
function Person(name, age, canVote) {
//   (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote
}
//console.log(Person); // returns that Person is a fuction
//            (7)  (8)
let person4 = new Person('James', 80, true);
console.log(person4);
let person5 = new Person('Mike', 12, false);
console.log(person5);

/*
    1. the KEYWORK (function)
    2. The fuction NAME. For Constructor Functions, the name should be capitalized.
    3. The parameters.  These will be the values of the object once this fuction is in use.
    4. The 'this' keyword.  'this' gives us the ability to refer back to whatever called, or whatever activites it.  In this case, 'this' refers to the 'Person'
    5. This will be a key of the new object we will create. This is NOT refering to the parameter.
    6. This is refering to the parameter.
    7 & 8.  This 'new' keyword is calling our Person fuction, creating a new person with the values we are passing as agruements, and storing that person in a variable.

*/