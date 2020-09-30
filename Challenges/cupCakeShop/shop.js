const Cupcake = require('./cupCake')

// class called shop with two attibutes, this.locaiton and this.owner
class Shop { 
    constructor (location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocation() {
    console.log(`This shop is at: ${this.location}`);
    }

    getOwner() {
        console.log('This shop is owned by: ${this.owner}');
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }
};

class CupcakeShop extends Shop {
    constructor(location, owner, name) {
        super(location, owner);// calls(extends) the constructor of the parent class 
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    };

    bakeBatch(count, batter, icing, price) {
        // make count cupcakes, add them into inventory
        for (let i = 0; i < count; i++) {
            let newCupcake = new Cupcake(icing, batter, price);// creates an instance of the cupcake object
            this.inventory.push(newCupcake);
        };
    };

    sellCupcake() {
        //remove cupcake from inventory, increase cash by price of cupcake
        let soldCupcake = this.inventory.pop(); //pop() removes the last cupcake from inventory.  This line pulls one cupcake out of inventory and holds it in the varible soldCupCake.
        this.cash += soldCupcake.price;
    };

    
};

let newShop = new CupcakeShop('Greenwood', 'Minnie Mouse', 'Minnie Eats');
newShop.bakeBatch(12, 'vanilla', 'chocolate', 5);

newShop.sellCupcake();
newShop.sellCupcake();
newShop.sellCupcake();
newShop.sellCupcake();
newShop.sellCupcake();

console.log(newShop.cash);







