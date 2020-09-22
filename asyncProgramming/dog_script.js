const baseURL = 'https://random.dog/woof.json';

 const searchForm = document.querySelectorAll('form');
 const dogPics = document.querySelectorAll('ul');

//create eventlistener
searchForm.addEventListener('submit',fetchDogs);

//addEventListener('submit', fetchDogs);

 function fetchDogs(e)
 {
     e.preventDefault();
     console.log('Clicked!');


     fetch(baseURL)
        .then(results => {
            return results.json()
        })
        .then(json => {
            displayDogs(json);
        });
 }

