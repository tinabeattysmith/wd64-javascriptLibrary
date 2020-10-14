//Controller with one get request that responds with a message that says "Hello from the test controller"

const { Router } = require('express'); // this will destructure the express object to only pull in route.
const testControllerRouter = Router();  //yanked the router and yeeted it over the testControllerRouter variable

testControllerRouter.get("/", (request, response) => {
    let message = "Hello from the test controller";
    response.send(message);
});  // if request type is GET and the specified endpoint matches, run the request-reponse cycle to respond withe the message.

module.exports = testControllerRouter; // exports the value of the testControllerRouter variable to the controllers index.js file.