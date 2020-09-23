let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) { 
    return response.json();
})
.then(function(json) {
    //console.log(json)
    let people = json.results;

for(p of people) {
    //console.log(p);
    
    // creates the li element for each iteration through the loop
    let listItem = document.createElement('li'); 
    
    //replaces the text within the p tags with name from the API for each loop iteration
    listItem.innerHTML = '<p>' + p.name + '</p>';

    //adds each iteration to the bottom of the list
    starWarsPeopleList.appendChild(listItem);   
  }


});