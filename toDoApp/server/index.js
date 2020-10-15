//const { request } = require("express");
const Express = require("express"); //constructor
const applicationControllers = require("./controllers/index"); // brings in the controllers
const applicationSequelizeObject = require('./db');

const expressApplicationObject = new Express(); // creating and holding an express instance

expressApplicationObject.use('/test', applicationControllers.test); 
        //because application is using the body.parse function to parse out text in the body, middleware (express.json())is being used.  Middleware requires the use of the application.use() function.  The app.use() function parameters tell if the route is parameter1 (in this case /test) then call (run) parameter2 (in this case applicationControllers)
expressApplicationObject.use('/users', applicationControllers.users);

expressApplicationObject.get('/', (request, response) => {// callback function.  if 1st parament is true, run the 2nd param
    console.log('[server]:  Root GET request received');
    console.log('TYPE:', request.method);
    console.log("URL:", request.url);
    console.log("[server]: Response being dispatched -->");
    response.send('Root Route Hit, hello from the toDo server');
 })
   
     // Challenge: Recieve a POST request at the route "/challenge"
     // Takes 2 values inside of the body:
     // Name -> A string for a name
     // Age -> A number for the age
     // Respond with this message:
     // If the user is 18 and older, the message will be:
     //    "<name>, you are an adult!"
     // Otherwise the message will be:
     //    "<name>, you will be an adult soon!"


     /* Group solution
     expressApplicationObject.use(Express.json());// tells the object to use express's middleware to parse the body information
     expressApplicationObject.post('/challenge', (request, response) => {
        console.log('[server]:  Root POST request received');
        console.log('TYPE:', request.method);
        console.log("URL:", request.url);
        console.log("BODY:", request.body);
       
        let name = request.body["name"];
        let age = request.body["age"];
            if (age < 18){
                response.send(name + " , you will be an adult soon.")
            } else {
                response.send(name + " , you are an adult!")}
         })*/

    //?JSON in a request is a STRING     
   
    // Class solution
    expressApplicationObject.use(Express.json());// this is telling the application object to use the middleware express.json().
    expressApplicationObject.post("/challenge", (request, response) => { //if rquest type is POST and endpoint matches, run the request-response cycle as defined below:
         let data = request.body; // declares variable to hold body.
         let message = data.age >= 18 ? `${data.name}, you are an adult!` : `${data.name}, you will be an adult soon!`;
            // this statement is a ternary.  it is an if/else statement.  after variable declarition, is the condition followed by ?, then the if statment followed by : then the else statment.
         response.send(message); //this is the response to the request with endpoint
        });

        
//  Startup procedure
//  Verify the connection to the Postgres Database
//  Synchronize the database to the Models
//  Listen on the specified port

                                
applicationSequelizeObject
    .authenticate()// authenticate() returns a promise
    .then(() => applicationSequelizeObject.sync())
    .then(() => {
        expressApplicationObject.listen(9001, () => {
            console.log("[server]: App is listening on port 9001"); // this tells the application to listen to the requests on a specified port.  It is logging a response so we know it is listening (true listening testing can be done in PostMan.)
        });
    })
    .catch((err) => {
        console.log(err);
    });



