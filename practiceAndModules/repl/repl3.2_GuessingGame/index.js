let rNum; // randomingly generated number
let uNum; // user's guess
let aCount = 1; // attempt count
let min = 1;
let max = 10;

let winLose = document.getElementById('result');

// add event listener to button 
submit.addEventListener('click', play);

// generate random number
function genNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

// invokes generate number function, passes min/max parameters, stores the num, and prints to console.
rNum = genNumber(min,max);
console.log('Random Number: ',rNum);

function play() {

    //display prompt to user and store input in variable
    uNum = prompt('Enter a number greater than 0 and less than 11');
    //console.log(`Selection #${aCount} : `, uNum);
        //if guess is empty (click OK with input)
            while(uNum == '') {
                uNum = prompt('Uhmm...you forgot the number.  Please try again. Enter a number greater than 0 and less than 11');
                };
            //if guess less than min       
            while(uNum < min) {
                uNum = prompt(`The number must be greater than ${min}. Please try again.`);
                };  
             //if guess greater than max       
             while(uNum < min) {
                uNum = prompt(`The number must be less than ${max}. Please try again.`);
                };    
            
            //if guess is not a number
            let isNumber = Number.isInteger(uNum)
            console.log(isNumber);
                if(isNumber = 'false'){
                    prompt('Hhmmm...that is not a number.  Please try again.  Enter a number greater than 0 and less than 11'); 
                } ;
    
        // if count less than 3 and guess == random: alert win, return, display result in DOM
        // if count less than 3 and guess != random: alert incorrect, # too high/low, reprompt for input, increment counter
        for (; aCount < 3 ; aCount++) {
            if (uNum === rNum) { // guess is correct
            alert(`${uNum} is correct.  You win`);
            result.innerText = (`${uNum} is correct.  You win`);
            // add an alert to play again or quit????
            return
            } else if(uNum > rNum) { // guess too high
                        alert(`${uNum} is too high. Try again.`);
                        uNum = '';
                        uNum = prompt('Enter a lower number');
                    } else if (uNum < rNum) { // guess too low
                        alert(`${uNum} is too low. Try again.`);
                        uNum = '';
                        uNum = prompt('Enter a higher number');
                    };
        } ;
        //if count == 3 and guess != random: alert lose, return, and display result in DOM
        //if count == 3 and guess == random: alert win, return, and display result in DOM
    if(aCount == 3) {
        if (uNum != rNum) {
            alert('You lose!  Better luck next time.')
            result.innerText = (`You lose. Better luck next time!`);
            return
        } else if (uNum == rNum);
            alert(`${uNum} is correct.  You win`)
            result.innerText = (`${uNum} is correct.  You win`);
            return
    }; 
};
