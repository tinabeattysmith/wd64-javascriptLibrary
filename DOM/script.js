let x= 10;
console.log(x);

//console.log(document);
//console.log(document.body);

//document.getElementById('testParagraph').style.color = 'blue';

let testPara = document.getElementById("testParagraph");
testPara.style.color = 'red';
console.log(testPara);

// Will only get the first id

//! 2 Query Selector All & inntertext/innerhtml

console.log(document.querySelectorAll('p.sampleclass'));
//querySelectorAll returns a node list
//nodes are items in HTML like elements and text.

document.querySelectorAll('p.sampleClass')[0].innerText = 'My Text has changed!';
//bracket notation to access the array of elements
// innerText allows us to reference or change the text in the element.

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    //pTag.innerText = 'My text changed using a forEach() method.'

    pTag.textContent = 'My text changed using a forEach() method.'

    //pTag.innerHTML = 'My text changed using a forEach() method.'
});


let showSpan = document.getElementById('spanTest');
console.log(showSpan.innerText); // will return text in first span (Hello)
console.log(showSpan.textContent); // will return the full text of the node; text in both spans (Hello World!)
console.log(showSpan.innerHTML);// will return text in first span and all of 2nd span including the styling (Hello<span style="display:none">World!</span>)

/*  - innerText simply rZferences or allows us to change the text of a specified element.  Will return only visible text in a 'node'
    
    - textContent does the same thing that innterText does, but will return the FULL text of a 'node'
    
    - innerHTML allows us to see text as well as HTML elements, which will be nested inside of the current HTML element we're referencing.
*/

//! 3:  ADDEVENTLISTENER - click

let btn = document.getElementById('clickThis')


/*btn.addEventListener('click', event => {
    event.target.style.backgroundColor = 'blue';
});
*/


/* 
? CHALLENGE
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/
let red = true;
    btn.addEventListener('click', event => {
        event.target.style.backgroundColor = red ? 'blue': 'red';
        red = !red;
        });

//! 4: ADDEVENTLISTENER - keyup

let input = document.getElementById('nameInput');
input.addEventListener('keyup', e => {
    console.dir(e.target.value);// target is the input field, value is the text being inputted into the field.
    document.getElementsByTagName('p')[0].innerText = 'Something Changed!';

    if(e.target.value == '') {
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed....'
    }
    else {document.getElementsByTagName('p')[1].innerText =
        `Everyone, say hello to ${e.target.value}`;
    }
});