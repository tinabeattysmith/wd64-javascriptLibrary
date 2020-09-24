let url = 'https://rickandmortyapi.com/api/character/';

// request
fetch(url)
        .then(function(result) { //promise returns object called result
            return result.json(); //function that JSON-ifies result
        })
        .then (function(json) { // promise that is a function that accepts the JSON-ified result
            displayResults(json);// fucntion that stores the JSON-ified result into variable called displayResults
        });

//     
function displayResults(json) { //accepts the results from the displayResults variable
    console.log("DisplayResults", json);  //displays the json.  This allows me to find my target.

    
let firstImage = '';
let secondImage = '';


};



