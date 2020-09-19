/*
!Repl 1.1 code
*/

/*for(let num =0; num < 11; num ++)
{
  console.log(num);
  function oddEven () 
    {
      if (num % 2 === 0)
        console.log(`the number is even`);
        else console.log(`the number is odd`);
    }
  oddEven();
}*/
// comments are loop and function should be seperated


/*1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2). 

2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below. 
  After you've successfully console.logged 0-10 (as pictured above), move on to step 3. 

3. Inside of the function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.
*/
 // Submit # 3
      //Step 1
      for(let num = 0; num < 11; num ++){
        count(num);
    }
    //Step 2
    function count(num){
      console.log(num);
    //Step 3
        if (num % 2 === 0) {
            console.log(`the number is even`) }
        else { 
          console.log(`the number is odd`)
        }
    }