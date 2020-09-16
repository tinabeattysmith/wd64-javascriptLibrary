/*
! Objects
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

//? DOT NOTATION
//WHile we use bracket notation with arrays, we use something called DOT NOTATION for objects.

//console.log('All Data', netflix);
//console.log('Just Season Info: ', netflix.season1.seasonInfo);
//We are capable of utilizing bracket notation as well
console.log('Episode', netflix.season1.seasonInfo.episodeInfo[3].episodeName);//hover over each step to see the next step.

//?JSON objects
/*
    - JSON stands for Javascript Object Notation
    - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only.
    - JSON exists as a string - useful when you want to fetch data froma server.
    - JSON needs to be converted to a native JS object if you want to access it.

jsonformatter.org
*/

let spaceJam = {
    toonSquad: {
        human: 'Micheal Jordan',
        rabbit1: 'Bugs',
        rabbit2: 'Lola',
        duck: 'Daffy',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky'
    }
}
// object.keys() will return an aray of strings that represent the properties of that object
console.log(Object.keys(spaceJam.toonSquad)); // String of keys

console.log(Object.keys(spaceJam.toonSquad.tDevil)); // String of the index numbers of that string.  tDevil is a key in toonSquad.  This is the index number of the letters in the name "Tasmania Devil"

console.log(Object.values(spaceJam.toonSquad));  //returns the values of the keys in the object called toonSquad.

//? Object Bracket Notation

/*
    - object bracket notation can also allow us to fina a valud in an object.
    - using object bracket notation can be handy if we want to store a key in a variable and then use that variable to parse through and object
    - this workd becasuse ALL keys in an object are STRINGS.
*/
// beow is an object called garden, with keys vegetable, flower, fruit, water, sun and size.  Each key has a value.
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let test = Object.keys(garden);  // this is a variable that displays an array of strings of the keys of my object, garden
console.log(test);
console.log(typeof test[0]);

//Dot Notation
console.log(garden.vegetable);

//bracket notation
let flowerType = garden['flower'];
console.log(flowerType);

let baking = {}; //an empty object
baking['zucchini'] = 'better make some bread'; //targeting the empty object, adding a key 'zucchini' and giving it a value of '...bread'
//console.log(baking);
// we have teh abliity to set NEW key/value pairs using square bracket notation

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

console.log(baking[garden['vegetable']]); //here we are saying the same thing as we did above, except we are passing information from our object. garden['vegetable'] is the same as 'zucchini' above.

let testObj = {
    'Spaces Here': true,
    noSpaces: 'Value Returned'
}
console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]) //becauase of the space in the Key Spaces Here, dot notation is not possible.  THis needed to use brackets to find what it is looking for.

