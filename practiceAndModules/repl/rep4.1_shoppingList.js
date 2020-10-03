let shoppingList = 
[
    ['eggs', 'milk', 'butter'],
    ['cleaner', 'trash bags', 'detergent'],
    ['thankyou card', 'pens', 'gift wrapping'],
    ['shoes', 't-shirt', 'slacks']
]

//assign each array a variable
let [food, houseHold, misc, clothing] = shoppingList;

//console log each variable.
console.log(food);
console.log(houseHold);
console.log(misc);
console.log(clothing);

shoppingList1 = [...food, ...houseHold, ...misc, ...clothing];
console.log(shoppingList1);