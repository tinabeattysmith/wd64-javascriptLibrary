/*
!Repl 1.1 code
*/

for(let num =0; num < 11; num ++)
{
  console.log(num);
  function oddEven () 
    {
      if (num % 2 === 0)
        console.log(`the number is even`);
        else console.log(`the number is odd`);
    }
  oddEven();
}
