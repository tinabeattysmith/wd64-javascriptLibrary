// What should a cupcake have?
// Icing, Cake, Price 
// Purpose of a CLASS... way to represent something that allows you to create different versions of that thing using the same starting point.
// information witin {} is the thing's definition


class Cupcake {
    constructor(icing, cake, price) { // if constructor is not defined, a blank default constructor will be used.  Best practice is to define a constructor.
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription () {
        console.log(`A ${this.icing} topped ${this.cake} cupcake $${this.price}`)
    }
}

/* APIE (basic defination of OOP)
A - Abstraction:  Complicated stuff is hidden behind an easy inteface (translate a complicated process into a simple to use interface.)
P - Polymorphis:  One interaction with many implementaions.  (string.length, Array.length)
I - Inheritence:  class hierarchy that shares functionality and attributes
E - Encapsulation: Data and functionality to manipulate that data are bundled together. 
*/


module.exports = Cupcake;

