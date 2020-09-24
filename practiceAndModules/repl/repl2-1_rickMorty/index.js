let url = 'https://rickandmortyapi.com/api/character/';
const body = document.getElementsByTagName('body');

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
    let imageOne = json.results[3].image;
    //.log(imageOne);
    let imageTwo = json.results[19].image; //? how do I get image from another page???
    //console.log(imageTwo);


    let show = document.createElement('img');
    show.setAttribute("src", imageOne);
    //console.log(show);
    document.body.appendChild(show);

    let show2 = document.createElement('img');
    show2.setAttribute("src", imageTwo);
    //console.log(show2);
    document.body.appendChild(show2);
};



