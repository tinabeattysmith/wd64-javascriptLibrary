let baseurl = 'https://api.airvisual.com/v2/';
//let city = "Indianapolis";
//let state = "Indiana";
let country = "USA";
let key = '88685f1b-f5be-478c-a063-f6ef94dfad42';
//cities endpoiont
//let url = `${baseurl}city?city=${city}&state=${state}&country=${country}&key=${key}`
//console.log(url)

//declaring variables
let urlState;
let selectedState;
let urlCity;
let selectedCity;


//targets the DOM element
let state = document.getElementById("states");
let cityList = document.getElementById("cities");


function changeState() {
    let selectedState = document.getElementById("states").value; 
    urlState = `${baseurl}cities?state=${selectedState}&country=${country}&key=${key}`
}

/*function submitCity() {
    console.log(selectedCity)
    let selectedCity = document.getElementById("cities").value; 
    urlCity = `${baseurl}cities?city=${selectedCity}state=${selectedState}&country=${country}&key=${key}`
} */  

/*cityList.addEventListener("change", fetchResultsB);*/



state.addEventListener("change", fetchResults);



function fetchResults(e) {
   fetch(urlState)
		.then(function (result) {
			return result.json();
		})
		.then(function (json) {
			//console.log("JSON: ", json);
			getCities(json)
		});
    };  // fetch results


	function getCities(json) {
        cities = json.data;
        
        //console.log(cities);
        const [{"city" : city, }] = cities
        //console.log(cityName)
        for (let i = 0; i < cities.length; i++) { 
           let current = cities[i]  
           console.log(current.city)
           let option = document.createElement("option")
            option.value = current.city
            option.innerHTML = current.city
            cityList.add(option)
        }   
    } 


 