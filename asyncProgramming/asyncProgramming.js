//! ASYNCHRONOUS PROGRAMMING
/*
    - sychronous programming allows a program to do more than one thing at a time.

    - Asynchronous programming allows a program to do more than one thing at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.
    
*/

//? Synchronous Sample:  Execution Stack
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

//"First Hello" - then "Second Hello" - then "End".  Once the one before is completed, the next will execute.


//? Asychronous Sample
const networkRequest = () => 
{
    setTimeout(() => 
    {
        console.log('Async Code')
    }, 2000); // set timeout has two argurents, callback (our console log), and time measured in ms (millisecon)
};
    console.log('Hello World');
    networkRequest();
    console.log('The End');

    //Event Loop:  looks into the call stack and determins if it is empty or not.  If empty, it considers if there is any waiting callback that nees to be executed (our console.log('Aync Code))

    //!  API

    /*
        API:  Application Program Interface        
            - Way for applications to talk to on another

            - is NOT a database or server
            - Allows us access points to the server
                - comes in the form of ENDPOINTS
                - endpoints directs us to a set of data (in the url)

        ? REST API
            - Representational State Transfer
                - creates an object of requiested data by the client, send values in reponse to user.
            - Methods:
                CRUD
                    Create (POST)
                    Read (GET)
                    Update (PUT)
                    Delete (DELETE)        
    */

//! FETCH()
/*
    - the fetch() method is an Asynchrnous method.  
        - Part of the browser, NOT JS
    - the fetch() method starts the proces of "fetching" a resouce.  Will return a promise and respond ONCE that promise is fulfilled.

        Promise:
            - an unknown value when created
            - represents the eventual fulfilled value or rejection (error)
        *Promises always in one of three states:
            1. Pending:  Initial state, neither fulfilled or rejected
            2. Fulfilled:  Meaning the operation completed successfully
            3. Rejected:  Meaning the operator failed.
*/
