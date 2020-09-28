/*
* ******
! SYNTAX
* ******
keyword varName = [....arrayName];
*/

const nameOne = ['eric', 'winebrenner'];
const nameTwo = ['zach', 'maynard'];
//nameOne.unshift('Mr');
const copiedNames = ['adam', 'jayne', ...nameOne, ...nameTwo];
console.log(copiedNames);

const copiedNamesDiff = ['adam', 'jayne', nameOne, nameTwo];
console.log(copiedNamesDiff);

/*
    Since the spread operator is pulling out all items of an array.  we need to make sure we use the spread operator within a new array.  This is so the values that were pulled out gets placed into our new array.

    ...arrName (if not within array, with throw error)

    - we can add to our original array without altering our copied array
        -dependent on what data types we are using
    
*/

nameOne.unshift('Mr');  // add string to beginning of the array and re-indexes
console.log('Altered: ', nameOne, 'Spread: ', copiedNames)  // altered only the nameOne array.  The spread remains the same.

/*
* ******
! ...Numbers
* ******
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices));  // expects numbers, not an array
console.log(Math.min(...prices));  // Spread Op pulls elements out of the prices array to allow the min method to work.

/*
* ******
! ...Objects
* ******
*/

const persons = [
    {
        name: 'Lore',
        species: 'Android' 
    },
    {
        name: 'Picard',
        species: 'Human'
    },
];

const copiedPersons = [...persons];
persons.push({name: 'worf', species: 'Klingon'});
console.log('Obj', persons, 'SO', copiedPersons); // we are only changing the orginal array

/*
    - primitive variable = primitive value  // pass by value
        ex:
            let x = 10
            let y = 'abc';
            let z = null;
    - JS stores to memory both variable and values;
        Variables       Values
        x               10
        y               'abc'
        z               nul;

        ex:  
        let a = x;
        let b = y;
        console.log(x, y, a, b) -> 10, 'abc, 10, 'abc'    

    - Altering one wouldn't affect the previous
        a = 5
        b = 'xyz'
        console.log(x, y, a, b) -> 10, 'abc, 5, 'xyz'

    - 3 Data Types that are passed by reference:  Array, Functions, and Objects
        - technically objects.
        - non primitive variables are given a reference to the value - the reference points to the location in memory.

        * pretend datatype: address - denated by <>

        let arr = [];
        arr.push(1);

        - how our code would look in memory:

            VARIALBLES  VALUES  ADDRESS OBJECT
            arr         <#001>  #001    []
            arr         <#001>  #001    [1]

            let ref = [1];
            let refCopy = ref;

            VARIALBLES  VALUES  ADDRESS OBJECT
            ref         <#001>  #001    [1]
            refCopy     <#001>

            ref.push(2)
            console.lot(ref, copy) -> [1,2], [1,2]
*/


copiedPersons[0].name = "Data";
console.log('obj: ', persons, 'SO: ', copiedPersons);


/*
* ******
! ... & AVOIDING CHANGING BOTH THE ORIGINAL & COPIED ARRAY
* ******
*/

const comics = [
        {title: 'Spiderman', year: 1962}, {title: 'Dective Comics', year: 1939} // arry with two object- title and year
        ];
        console.log(comics);

const copiedComics = comics.map(comics => ({ // method to loop over
    title: comics.title,
    year: comics.year
}));
comics.push({title: 'Calivin and Hobbes', year: 1985}); // adding another title, year to the end of the array
console.log('Before Altering: ', copiedComics);
copiedComics[1].title = 'Dective Comics #27'; // replaces title, year at index[1]
console.log('After Altering: ', comics, copiedComics);

