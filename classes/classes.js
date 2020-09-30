/*
* ***********
! CLASSES
* ***********
    - Classes can be defined by either expression or declaration
    - Classes are functions
    - Classes act as a blueprint for creating objects.
        ex:  model could be a property of a class of Automobile.  Each new automobile we creat that'a a copy of our original class and could have a different value for the property model.

    - Body of class is between {}
    - Constructor method is a special method for creating and initializing an object that was created with a class.
        - Ther can only be ONE constructor method
        - Can use the keyword "super"
        - The super keyword is used to access and call fucntions on an object parent.
    - Introduced in ES5
    - New way to write previou existing prototype-based inheritance
    - Closest thing in vanilla JS to OOP (Object Oriented Programming)
*/

/*
* ***********
! CLASS DECLARATION
* ***********
*/

class Automobmile {
    // instanced properties must be defined inside of class method, like the constructor method.
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}


//Hoisting:  Unlike function declarations, class declarations are not hoisted.  A class declaration needs to be declared before accessing it.


/*
* ***********
! CLASS EXPRESSION
* ***********
    - can be named or not named
    - the name given to an unnamed class expression is locat to the class's body
        the name of a named class can be retred throug the class's name peropery. 
*/

let Vehicle = class {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    }
};
console.log(Vehicle.name);

//named
let Auto = class Mobile{
    constructor(make, model) {
    this.make = make;
    this.model = model;
    }
};
console.log(Auto.name);


/*
* ***********
! Methods
* ***********
    - Introduced in ES5
        - prototype methods are shorted for method and definition.
*/

//Method definition:  OLD SYNTAX
const automobile = {
start: function() {
    //
},
stop: function() {
    //
    }
};

//Prototype Method:  NEW SYNTAX
const Automobile = {
    start() {
        //
    },
    stop() {
        //
    }
};


class AutoMobile {
    constructor(make, model) {
        this.make=make;
        this.model=model;
    }

    //Method 1L
    start() {
        console.log(`This ${this.make} ${this.model}'s engine started.`);
    }

    //Method 2
    stop() {
        console.log(`This ${this.make} ${this.model}'s engine started.`);
        }
};

/*
* ***********
! New Instance
* ***********
    - using the keyword 'new' we can create a new object/instance of the Automobile Class
*/
//new object/instance of the class

let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();
let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();

/*
* ***********
! Constructor Method
* ***********
    - Helps create and initalizes an object created from a class.
    - works along with the 'new' keyword.
    - Needs to be included to create new objects and instances of our class.
        - set proporties
        - passes values of properties
*/

class Cookie{
    constructor(type, icing, shape) {
        // the parameter we note will be the values we want passed an  stored in the object
        this.t = type;
        this.i = icing;
        this.s = shape;
    //LEFT SIDE:  assigning keys for the values we pass in.
                //RIGHT SIDE:  this accepted values from our parameters.
    }
}

let chocolatechip = new Cookie('chocolate chip', false, 'circle')
//console.log(chocolatechip.type);
console.log(chocolatechip.t);
console.log(chocolatechip.i);
console.log(chocolatechip.s);
console.log(chocolatechip);

/*
* ***********
! ENTENDS
* ***********

    - keyword used in class declarations/expressions to create a new class.
    - each new class created inherits the properites and methods from the parent class.
    - can have it's own properties and methods.
        - also know as subClass
*/


//* PARENT
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {// method called eat
        console.log(`${this.name} eats thier food.`)
    }
}

//*SUBCLASS
class Dog extends Animal {
    constructor(name, breed) {
        super(name);//'super' prior to 'this' keyword - if not, the result is an error.
        this.type = breed;
    }

    play() {
        console.log(`The ${this.type} named ${this.name} fetches the ball!`)
    }
}

let Fido = new Dog ('Fido', 'mutt');
Fido.eat();
Fido.play();
//Animal.play();// this causes an error - Animal.play is not a function