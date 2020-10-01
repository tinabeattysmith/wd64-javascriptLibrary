let rNum; // randomingly generated number
let uNum; // user's guess
let aCount = 1; // attempt count

let body = document.getElementsByTagName('body');
let btnSubmit = document.getElementById('submit');
let randomNum = document.getElementById('randomNum');
let userNum1 = document.getElementById('userNum1');
let attemptCount1 = document.getElementById('attemptCount1');
let userNum2 = document.getElementById('userNum2');
let attemptCount2 = document.getElementById('attemptCount2');
let userNum3 = document.getElementById('userNum3');
let attemptCount3 = document.getElementById('attemptCount3');
let winLose = document.getElementById('result');

// add event listener to button 
submit.addEventListener('click', play);

// generate random number
function genNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

// invokes generate number function and passes min/max paramters.
rNum = genNumber(1,10);
//display the random number in DOM
randomNum.innerText = (`Randomly generated number is ${rNum}`);

function play() {
    //display prompt to user and store input in variable
    uNum = prompt('Enter a number greater than 0 and less than 11');
    console.log('1st number: ', uNum);
    if(uNum == '') {
        alert(`Uhmm...you forgot the number.`);
        uNum = prompt('Enter a number greater than 0 and less than 11');
    } else {
        aCount = 1;
         while(aCount < 3 ) {
            if (uNum == rNum) {
                alert(`${uNum} is correct.  You win`);
                result.innerText = (`You win!`);
                // add an alert to play again or quit????
                break
                } else if(uNum > rNum) {
                    aCount++
                    alert(`${uNum} is incorrect. Try a lower number.`);
                    console.log("Count after high alert: " , aCount); 
                    uNum = '';
                    uNum = prompt('Enter a number greater than 0 and less than 11');
                    console.log(uNum);
                    } else if (uNum < rNum) {
                        aCount++
                        alert(`${uNum} is incorrect. Try a higher number.`);
                        console.log("Count after low alert: ", aCount);
                        uNum = '';
                        uNum = prompt('Enter a number greater than 0 and less than 11');
                        console.log(uNum);
                        //!this is not working
                    } else {
                        alert('You lose!  Better luck next time.')
                        result.innerText = ('You lose!  Better luck next time');
                    } ;          
        };
        
    };
};
