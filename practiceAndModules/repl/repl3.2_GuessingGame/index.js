

let rNum; // randomingly generated number
let uNum; // user's guess
let aCount; // attempt count

let body = document.getElementsByTagName('body');
let btnSubmit = document.getElementById('submit');
let randomNum = document.getElementById('randomNum');
let userNum = document.getElementById('userNum');
let attemptCount = document.getElementById('attemptCount');
let winLose = document.getElementById('result');

// add event listener to button 
submit.addEventListener('click', play);

// generate random number
function genNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

// invokes generate number function and passes min/max paramters.
rNum = genNumber(1,10);
//display random number in DOM
randomNum.innerText = (`Randomly generated number is ${rNum}`);
//console.log(rNum);

function play() {
    //console.log("clicked");
    //display prompt to user
    uNum = parseInt(prompt('Enter a number greater than 0 and less than 11'));

    //response validation
    //empty //?null, NaN, outside of range -Comeback too
    console.log('User#: ', uNum);
        if(uNum = '') {
            alert(`Uhmm...you forgot the number.`);
            uNum = (prompt('Enter a number greater than 0 and less than 11'));
            } else {
            //display user number in DOM
            userNum.innerText = (`Your first guess is ${uNum}`)
            aCount=1;
            console.log("Count", aCount);
        //console.log('User#: ', uNum);
            }; 
        
    //! Still need to loop when aCount < 4
        if(uNum == rNum) {
            alert("Correct!  You win");
        };
        //! need to end the game. 
                    
        /*} else if (uNum > rNum) {
                alert("Incorrect. Try a lower number.");
                aCount++
                console.log("Count", aCount);
                nuNum = prompt('Enter a number greater than 0 and less than 11');
                
            } else if (uNum > rNum) {
                alert("Incorrect. Try a higher number.");
                aCount++
                console.log("Count", aCount);
                uNum = prompt('Enter a number greater than 0 and less than 11');
            }; /*else {
                alert("you lose") 
                //! need to end the game. 
            };*/

};  