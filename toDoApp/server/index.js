const { request } = require("express");
const Express = require("express"); //constructor
const applicationControllers = require("./controllers/index"); // brings in the controllers

const expressApplicationObject = new Express(); // holding the express instance

expressApplicationObject.use('/test', applicationControllers.test);


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
    expressApplicationObject.use(Express.json());
    expressApplicationObject.post("/challenge", (request, response) => {
         let data = request.body;
         let message = data.age >= 18 ? `${data.name}, you are an adult!` : `${data.name}, you will be an adult soon!`;
         response.send(message);
        });
    
expressApplicationObject.listen(9001, () => {
    console.log("[server]: App is listening on port 9001");
});
