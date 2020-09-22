//console.log("Test");

const baseURL = 'https://api.spacexdata.com/v2/rockets';
//rockets is the ENDPOINT

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

//create eventlistener.  Listen for a submit and will call a fetch() function
searchForm.addEventListener('submit', fetchSpace);

//FETCH FUNCTION called fetchSpace
function fetchSpace(e) 
{
    e.preventDefault();  // this method allows us to cancel a default action by the browser
        
    //console.log('Clicked!');

    fetch(baseURL)  // starts the process of fetching our resource. 
        .then(results => {
            // consolelog(results) // shows our reponse
            
            return results.json() // This method takes in a response (results), reads to completion and returns the results as a json format
        })
        .then(json => {
        //    console.log(json)   // testing connected and data is displaying
                displayRockets(json); 
           
        });
}


// DISPLAY FUNCTION  //? play around with display...create table....
function displayRockets(data) {
    //console.log('DisplayRocket: ', data);

    let rockets = data.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li'); 
        // creates an <li> tag for each iteration or position of the array.
        
        //rocket.innerText = r.name  //steps into the object, finds the key (name) and places the value of name of each iteration of rocket

        rocket.innerText = `${r.name} is in the county ${r.country}.`;
        // steps into the object, finds the key (name) and places the value of both name and country of each iteration of rocket
        spaceShips.appendChild(rocket); // adds each iteration of rocket to the ul element in html code
    });
}
