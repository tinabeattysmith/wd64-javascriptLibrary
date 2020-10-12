/*
Create class = polygon
    contructor method wit a parameter to capture array of 4 numbers.

Assign parameter to a key using "this"

Method = perimeter
    return
        only the parameter 
            OR
        empty array from the method.
all the reduce method on the return value to get a single output

Create a new object/instance of Class = polygon and store as a variable

New 'polygon' accepts argument of 4 numbers.
    console.log return value of newly created polygon.  
*/

//create class = Polygon with constructor method and parameter to accept array of 4 nums.

//create class = Polygon with constructor method and parameter to accept array of 4 nums.

class Polygon {
    constructor (sides){
        this.sides = sides;
    }//end constructor
  
        
    //Method = perimeter, return only the parameter OR empty array from the method.
    //call reduce method to turn return value into a single string
      
    perimeter() {
        if(this.sides.length > 0 && this.sides.length < 5){
        return this.sides.reduce((prev, curr) => prev + curr, 0)
    } else return []
      }// end perimeter method   
   
}; // end class


let shape = new Polygon([10, 30, 50, 90]);
console.log(shape.perimeter());



