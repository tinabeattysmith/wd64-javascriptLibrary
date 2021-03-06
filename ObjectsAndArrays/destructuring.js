/*
* *********
! ARRAY DESTRUCTING
* *********

    - allow us to unpack values from arrays or properites from objects
    - similar symtax as arrays literals BUT is on the LEFT side of the assignment operator.
    great for pulling infor out of an array/object and assigning that data to it's own variable.
*/

const boardGames = ['Catan', 'Pandemic', 'Roll Player'];

//const gameOne = boardGames[0];
const [gameOne, gameTwo, gameThree] = boardGames;  // gameOne is being assigned the value in position 1, gameTwo is being assgined the value in position 2....
console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);

/*
 - within the brackets (on left of assignment operator), we have our desired variables names.  These coincide with each value within the array that is in the original variable.
*/

/*
* *********
! REST SYNTAX
* *********

    - Rest syntax looks exactly like spread syntax
        - spread expands an array into it elements
        - Rest collects mutiple elements and condenses into a single element
        - MUST be the last element definec when using destructuring
*/

const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Bable Fish', {day: 'Thursday', answer: 42}];
let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);

// Using the spread operator syntax like this is known as 'rest' syntax with Array Destructing.  Using it, we are packing up the REST of the values into a new array

hitchhikersGuide.push('Marvin','Deep Thought', 'Zaphod Beeblebrox');
[charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(otherInfo);

[charOne, charTwo, , , ...otherInfo] = hitchhikersGuide;
console.log('Skipped')
console.log(charOne);
console.log(charTwo);
console.log(otherInfo);


/*
* **********
! OBJECT DESTRUCTURING
* **********
*/
// const game = {
//     title: 'Fallout 76',
//     developer: 'Bethesda Game Studios',
//     platforms: [
//         'PC', 'PS4', 'XBoxOne'
//     ]
// };
// const {title, platforms} = game;
// console.log(`${title} is on ${platforms}`);
const games = [
    {
        title: 'Fallout 76',
        developer: 'Bethesda Game Studios',
        platforms: [
        'PC', 'PS4', 'XBoxOne'
        ]
    },
    {
        title: 'The Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: [
        'Nintendo Switch', 'Wii U'
        ]
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: [
        'PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintento Switch', 'PSVita', 'iOS', 'Android'
        ]
    },
];
const [{title: titleOne, developer: devOne}, ,{title: titleThree}] = games;
console.log(titleOne);
console.log(devOne);
console.log(titleThree);
for({title, developer} of games) {
    console.log(`${title} is developed by ${developer}`);
}
for({title, platforms} of games) {
    for(p in platforms) {
        console.log(`${title} is on ${platforms[p]}`);
    }
} 



//destructure


let weather = {
	"status":"success",
	"data":
		{"city":"Indianapolis",
		"state":"Indiana",
		"country":"USA",
		"location":
			{"type":"Point","coordinates":[-86.2147,39.7889]},
		"current":
			{"weather":
				{"ts":"2020-10-03T21:00:00.000Z",
				"tp":16,
				"pr":1021,
				"hu":41,
				"ws":2.1,
				"wd":0,
				"ic":"04d"},
			"pollution":
				{"ts":"2020-10-03T21:00:00.000Z",
				"aqius":23,
				"mainus":"p2",
				"aqicn":8,
                "maincn":"p2"}}}};
                



const {
	"status": status,
	"data":
		{"city": city,
		"state": state,
		"country": country,
		"location": 
			{"type": locationType,"coordinates": locationCoordinates},
        "current":{
        "weather":  {
            "ts": timestamp, 
            "tp": temperature,
				"pr":pressure,
				"hu":humidity,
				"ws":windspeed,
				"wd":winddirection,
				"ic":icon},
		"pollution": {
            "ts": pollTimeStamp,
				"aqius":aqius,
				"mainus":mainus,
				"aqicn":aqicn,
                "maincn":maincn}}}} = weather

             
function weatherNow ({
    "ts": timestamp, 
    "tp": temperature,
        "hu":humidity,
        "ws":windspeed,
        "wd":winddirection,
        "ic":icon})
    {   
       return({
        "ts": timestamp, 
        "tp": temperature,
            "hu":humidity,
            "ws":windspeed,
            "wd":winddirection,
            "ic":icon})}

console.log(weather.data.current.weather.ic)