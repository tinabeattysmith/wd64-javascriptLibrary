const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //declare the baseURL of the API. This is the required API endpoint for the New York Times data.
const key = 'WrC5nvQcIyuVQpMBiYlZDyfNpmNeuHLb'; //This will let the NYT know exactly what user is using their API
let url; // declaring the url variable use this to make a dynamic search url

// SEARCH FORM - declaring DOM elements as variable to be used to store data and will be manipulating;
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


nav.style.display = 'none'; // prevents the buttons from displaying when loading the page.  does not need to display because the data on the page does not require pagination.
let pageNumber = 0;  // sets page number to default of 0
//console.log('Page Number:', pageNumber) // checking page number
//let displayNav = false;  // never used

searchForm.addEventListener('submit', fetchResults);  ///when submit occurs, the function fetchResults will execute.
nextBtn.addEventListener('click', nextPage); // when click occurs, the function nextPage will execute
previousBtn.addEventListener('click', previousPage); // when click occurs, the function previousPage will execute

// fetchResults function
function fetchResults(e){// gathers information of form to 
    //console.log(e);
    e.preventDefault();  // default behavior of a form is to submit (post) data to the api.  Using e.preventDefault will prevent the submission.  Will also prevent refresh or redirects.
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

    fetch(url) //asynchronous request that returns promise to return 
        .then(function(result) { // callback function. Sends the request to the assembled url for the end point and creates promise containing the results
            //console.log(result)
            return result.json(); //method is asynchronous because unknown amount of data is returned.  String needs to be parsed into json.  returns a promise that 
        })
        .then (function(json) { // this function accepts json-ified data from completed promise.
            //console.log(json); 
            displayResults(json); //calls the displayResults function using the accepted data
        });
        }
    
    function displayResults(json) {
        let articles = json.response.docs; //this drills down in the JSON allowing us to find our target
        console.log("DisplayResults", json);
        while (section.firstChild) {
            section.removeChild(section.firstChild);  //this is checking to see if section already has child elements(results are populated.  If the resonse is true, then the removechild clears any existing child elements.)
            }  
            //below code is navigation button display during exercise and does not consider page information.
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
                for(let i = 0; i < articles.length; i++) { // this will step through the results array
                    //console.log(i); // checking to see loop is working

                    //each loop through array will create the following elements in the HTML
                    let article = document.createElement('article');
                    let heading = document.createElement('h2');
                    let link = document.createElement('a');
                    let img = document.createElement('img');
                    let para = document.createElement('p');
                    let clearfix = document.createElement('div');  //This add some spacing to prevent image overflow.
        
                    let current = articles[i]; // each time the index is incrememted, it is set as current.
                        //console.log("Current:", current);

                    link.href = current.web_url;// for the current index, drills into the array and populates the element with specified information
                    link.textContent = current.headline.main; //for the current index, drills into the array and populates the element with specified information
                    link.target = "blank";// sets tje link so that is opens in another window.

                    para.textContent = 'keywords: ';  //for the current index, drills into the array and populates the element with specified information

                    for(let j=0; j < current.keywords.length; j++) {  //for the current index, this loops through the keyword,sadds a span element to the HTML, adds the key words to the span element.
                        let span = document.createElement('span');
                        span.textContent += current.keywords[j].value + ' ';
                        para.appendChild(span);
                    }

                    if(current.multimedia.length > 0) { // for the current index, sets the image source and alt
                        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; // this idicates for the current index, drill into the mutlimedia array, if present, and select the zero index.  Then grab its url.
                        img.alt = current.headline.main;// for the current indes, set img.alt to the text found in the specified index key.
                     }

                    clearfix.setAttribute('class', 'clearfix');  // overrides the div element a class = clearfix.  This is for css styling 
                    //clearfix.classlist.add('clearfix');  // does not overwrite, just adds to the existin list class.
            
                    //This sections places the html elements to the bottom.
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
    pageNumber++; //when nextPage button clicked, increament the page by 1
    fetchResults(e);  // refetch the results and populate the page.
        //console.log('Page Number:', pageNumber);
};


function previousPage(e) {
    //console.log("Previous button clicked");  // checking to see button is connected
    if(pageNumber > 0) {
        pageNumber--;// when previous button is clicked and page > 0, decrement the page number
    } else {
        return; // if page number = 0, do nothing
    }
    fetchResults(e); // refetch the results and populate the page.
    //console.log('Page Number:', pageNumber);
};