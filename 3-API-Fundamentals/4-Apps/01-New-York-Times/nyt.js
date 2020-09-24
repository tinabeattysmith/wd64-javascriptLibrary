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


nav.style.display = 'none'; // prevents the buttons from displaying when loading the page
let pageNumber = 0;  // sets page number to default of 0
//console.log('Page Number:', pageNumber) // checking page number
//let displayNav = false;  // never used

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

// fetchResults function
function fetchResults(e){
    //console.log(e);
    e.preventDefault();
    //ASSEMBLE the FULL URL 
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    //console.log('URL:' , url);

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
        let articles = json.response.docs;
        console.log("DisplayResults", json);
        while (section.firstChild) {
            section.removeChild(section.firstChild);  //this is checking to see if section already has child elements(results are populated.  If the resonse is true, then the removechild clears any existing child elements.)
            }  
            /*if(articles.length === 10) {
                /*nav.style.display = 'block'; //shows the nav display if 10 items are in the array.  
                } else {
                    nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array.
                };     */ 
        
        // Only display next button when response includes 10 and pageNumber = 0.
        if(articles.length === 10 && pageNumber == 0) {
                nav.style.display = 'block';
                previousBtn.style.display = 'none';        
            }
        
        // Display both next and previous buttons when response includes 10 and pageNumber > 0.
        if(articles.length === 10 && pageNumber > 0) {
                nav.style.display = 'block';
                previousBtn.style.display = 'block';        
            }
         
        //Display only previous buttons when response includes < 10 and pageNumber > 0.   
        /*if(articles.length < 10 && pageNumber > 0) {
            nav.style.display = 'block';
            nextBtn.style.display = 'none';
            }*/
            //? This is working until the next button disappears.  Then it remains gone.  future challenge for myself.

        if(articles.length === 0) {
            console.log("No Results");
            } else {
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
                    link.target = "blank";

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
    //console.log("Next button clicked");  // checking to see button is connected
    pageNumber++;
    fetchResults(e);
        //console.log('Page Number:', pageNumber);
};


function previousPage(e) {
    //console.log("Previous button clicked");  // checking to see button is connected
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    //console.log('Page Number:', pageNumber);
};