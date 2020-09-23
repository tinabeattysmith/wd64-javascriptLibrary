const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1 - Here we declare the baseURL of the API. This is the required API endpoint for the New York Times data.
const key = 'WrC5nvQcIyuVQpMBiYlZDyfNpmNeuHLb'; //2 - This will let the NYT know exactly what user is using their API
let url; //3 - We'll use this to make a dynamic search url

// SEARCH FORM - DOM elements we will be manipulating
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION - DOM elements we will be manipulating
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// RESULTS SECTION - DOM elements we will be manipulating
const section = document.querySelector('section');


nav.style.display = 'none';
// sets page number to default of 0
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

// fetchResults function
function fetchResults(e){
    //console.log(e);
    e.preventDefault();
    //ASSEMBLE the FULL URL 
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log('URL:' , url);

    // conditional statements for the start and end dates
    if(startDate.value !== '') {
        //console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        //console.log(endDate.value)
        url += '&end_date' + endDate.value;
    };

    fetch(url)
        .then(function(result) {
            //console.log(result)
            return result.json();// promise containing the result object
        })
        .then (function(json) {
            //console.log(json);// promise to send the information received from the first function (result)
            displayResults(json);
        });
        }
    
    function displayResults(json) {
        //console.log("DisplayResults", json);
        while (section.firstChild) {
            section.removeChild(section.firstChild);  //this is checking to see if section already has child elements(results are populated.  If the resonse is true, then the removechild clears any existing child elements.)
        }
        let articles = json.response.docs;
            //console.log(articles);
            if(articles.length === 10) {
                nav.style.display = 'block'; // shows the navigation buttons if 10 items returned in the array.
            } else {
                nav.style.display = 'none'; // hides the navigation buttons if less than 10 items are returned in the array.
            }

            if(articles.length === 0) {
                console.log("No Results");
            }   else {
                    for(let i = 0; i < articles.length; i++) {
                        //console.log(i); // checking to see loop is working

                        let article = document.createElement('article');
                        let heading = document.createElement('h2');
                        let link = document.createElement('a');
                        let img = document.createElement('img');
                        let para = document.createElement('p');
                        let clearfix = document.createElement('div');
            
                        let current = articles[i];
                            //console.log("Current:", current);

                        link.href = current.web_url;
                        link.textContent = current.headline.main;

                        para.textContent = 'keywords: ';

                        for(let j=0; j < current.keywords.length; j++) {
                            let span = document.createElement('span');
                            span.textContent += current.keywords[j].value + ' ';
                            para.appendChild(span);
                        }

                        if(current.multimedia.length > 0) {
                            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                            img.alt = current.headline.main;
                        }

                        clearfix.setAttribute('class', 'clearfix');
                
                        article.appendChild(heading);
                        heading.appendChild(link);
                        article.appendChild(img);
                        article.appendChild(para);
                        article.appendChild(clearfix);
                        section.appendChild(article);
            }
        }
    };

function nextPage(e) {
    //console.log("Next button clicked");
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber); // ?only console logs after button is clicked.  Why?   
};

function previousPage(e) {
    //console.log("Previous button clicked");
    if(pageNumber > 0) {
        pageNumber--;
        fetchResults(e);    
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page Number:', pageNumber);
};

//! challenge
//Try to come up with a way to show the previousBtn even if there is less than 10 items in the array, while hiding the nextBtn in this situation.
//

//! Bonus challenge
//See if you can find a way to hide the previousBtn on first page of results!