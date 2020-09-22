let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) { 
    return response.json();
})
.then(function(json) {
    console.log(json)

});