/*
* **********
! Conditionals
* **********


? Falsy Values:
    - false
    - 0 
    - "", '', ``
    - null
    - understand
    - NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of the 6 values, it is evaluted as "falsy"

    */


    /*
    * **********
    ! IF
        -"If" somethinbg is true, do "this thing"
    * **********

    */

    let light = 'on';
     if(light== 'on') {
            console.log('The light is on');
     };

     let weather = 68;
     if(weather < 70) {
         console.log("Wear a jacket.");
     };

     let rain  = true;
     if(weather < 70 && rain != false) {
        console.log("It is a little chilly and will possibly rain.");
    };

/*
   * **********
    ! If Else
   * **********
   If/Else statements allow us the ability to write a chain of events

*/

let today = 75;

if(today < 70) {
    console.log('It is ' + today + ', wear a jacket.');
}
else {
    console.log('It is ' + today + ', no jacket is needed.')
}

/*
! Challenge

    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log 'Hello, my name is <name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

/*Bronze:*/
 let name = 'Tina';

 if (name == 'Tina') {
     console.log(name);
 }
 else {
     console.log('Hello, what is your name?')
 };

/*Silver*/
if (name == 'Tina') {
    console.log('Hello, my name is ' + name + '.');
}
else {
    console.log('Hello, is your name ' + name + '?')}

/*Gold*/    
if (name != 'Tina') {
    console.log('Hello, is your name ' + name + '?');
};

/*
   * **********
    ! ELSE IF
   * **********
    Tis is a condition that would be checked if the above condition was not met.  Order is important!!!!

*/

let cookTime = 20;

if(cookTime === 45) {
    console.log('Let us feast!')
}else if(cookTime >= 30){
    console.log(`It has only been ${cookTime} minutes.  Wait another 5 - 15 minutes`); //String interpolation
}else if(cookTime >= 20){
    console.log(`It has only been ${cookTime} minutes.  Wait another 10 - 25 minutes`);
}else {
    console.log(`It has only been ${cookTime} minutes.  Perhaps at least try cooking it...`);
}      

// The end of the ELSE IF statement should have a simple "else" to finish it.

//!CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 90;
if (age >= 25){
    //console.log('You can rent a car!');
    console.log(`${age} is old enough to rent a car`);
    }
    else if(age >= 21){
        console.log('You can drink!');
    }
    else if(age >= 18) {
        console.log('You can vote!');
    }
    else {
        console.log('Sorry, you\'re too young to do anything.');
    }

    /*
       * **********
        ! TERNARIES
       * **********
        - This is a quick way of considering an if/else statement.  We are capable of writing out our conditional in a simple line.
    */
   let myName = 'Hope';

  /*if (myName == 'Tina') {
      console.log('Hello, my name is ' + myName + '.');
  }
  else {
      console.log('Hello, is your name ' + myName + '?');
  };*/

  // condition ? if true : else result
  
  //    (1)                                (2)                                              (3)
  myName === 'Tina' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

  /*  
    1:  Condition
    2:  True (if true)
    3:  False (else)
  */  

  /* After lunch challenge*/
  // Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;

// 1:  lampOn is false and daytime is false
//if(lampOn == true && daytime != true) {
//    console.log('The lamp is on during the night')

    //2:  lampOn is true, daytime false 
//} else if(lampOn != true && daytime != true) {
//    console.log('The lamp is off during the night')

    //3:  lampOn is false and daytime is true
//} else if(lampOn == true && daytime == true){
//    console.log('The lamp is on during the day')

    //4:  lampOn is true, daytime is true
//} else if(lampOn != true && daytime == true) {
//    console.log('The lamp is off during the day')

    //5:  end statement
//} else {
//    console.log('What lamp?')
//}

lampOn == true && daytime != true ? console.log('The lamp is on during the night') : 
lampOn != true && daytime != true ? console.log('TThe lamp is off during the night') : 
lampOn == true && daytime == true ? console.log('The lamp is on during the day') : 
lampOn != true && daytime == true ? console.log('The lamp is off during the day') : 
console.log('What lamp?');

/*
! SWITCH

  - executes a block of code depending on different cases.
*/

let instructor = "Adam";

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Teams.`);
        break;
        //Once each case has been evaluated and we return a result, we need to note a "break" out from our switch statement.
    case 'Zach' :
        console.log(`${instructor} is a part of the Web Dev Teams.`);
        break;
     case 'Josh' :
        console.log(`${instructor} is a part of the Software Dev Teams.`);
        break;
    default :
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
        //Need to use a default to help us catch those cases where none are true.
}


instructor = 'Amanda'

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor} is a part of the Web Dev Teams.`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is a part of the Software Dev Teams.`);
        break;
        default :
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
}