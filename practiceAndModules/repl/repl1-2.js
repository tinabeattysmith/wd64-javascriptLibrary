//create object
let myFavMovies = {
    nameOfMovie: 'Outbreak',
    runTime: '2h 7min',
    
    //characters is an array
    characters: {
     character1: {
        name: "Sam Daniels",
        age: 45,
        
        //items is an array
        items:{
          items1:"Played by Dennis Hoffman",
          items2:"Originally, the role was intended for Harrison Ford."
        },
     },
     character2:{
        name: "Jimbo Scoot",
        age: 25 ,
        items:{
          items1: "Played by Patrick Dempsey.",
          items2: "Was Patient 0."
         },
       },
     },
    genre:'Action'
   };

console.log(myFavMovies.nameOfMovie);
console.log(myFavMovies.runTime);
console.log(myFavMovies.characters);
console.log(myFavMovies.characters.character1.name);
console.log(myFavMovies.characters.character1.items.items2);


// Solution in class
//create object
let myFavMovies1 = {
  nameOfMovie: 'Outbreak',
  runTime: '2h 7min',
  
  //characters is an array
  characters: [
    {
    character1:    
      name: "Sam Daniels",
      age: 45,
    //items is an array
      items:[
              {items1:"Played by Dennis Hoffman"},
              {items2:"Originally, the role was intended for Harrison Ford."}
          ],
   
    character2:
      name: "Jimbo Scoot",
      age: 25 ,
      items:[     
        {items1: "Played by Patrick Dempsey."},
        {items2: "Was Patient 0."},
      ],
   },
  ],
  genre:'Action'
 };

console.log(myFavMovies1.nameOfMovie);
console.log(myFavMovies1.runTime);
console.log(myFavMovies1.characters);
console.log(myFavMovies1.characters[0].name);
console.log(myFavMovies1.characters[0][0]);