//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/
 
let grade = 'A';
switch(true){

    case (grade >= 89 && grade <= 100):
        console.log(`Great Job! Your grade is an A.`);
        break;
    case (grade < 89 &&  grade >= 79):
        console.log(`Good Job! Your grade is a B.`);
        break;
    case (grade < 79 &&  grade >= 66):
        console.log(`Keep going! Your grade is a C.`);
        break;
    case (grade < 66 &&  grade >= 59):
        console.log(`Keep trying, you can do this! Your grade is a D.`);
        break;
    case (grade < 59):
        console.log(`I believe in you! Let's talk. Your grade is a F.`);
    default: console.log(`You didn't bother showing up to class!`);
}
