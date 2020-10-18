/******************
 * POST - /createuser 
*******************/
/*function userSignUp(){
    //grab the value of the user/password data from the createuser input field in the index.html file
    let userName = document.getElementById('userSignUp').value;
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    //The variables used to store the sign up info from the DOM get passed into the values of the username and password properties. We package everything up in a user object.
    let newUserData = {user: { username: userName, password: userPass}};
    fetch('http://localhost:3000/user/createuser', 
    {
        method: 'post',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData) //we pass in the newUserData variable to be sent off in the body of our request to the server.
       
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response)
        console.log(response.sessionToken);
        let token = response.sessionToken; //We get the sessionToken from the response and store it in a token variable.
        localStorage.setItem('SessionToken', token); //This will keep our token safely stored in our local window
    });
}*/

function userSignUp(){
    let userName = document.getElementById('userSignUp').value;
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass );

    let newUserData = {user : {username: userName, password : userPass }};
    fetch('http://localhost:3000/user/createuser', {
        method: 'post',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })    
    .then(response => response.json())
    .then(function (response){
        console.log("sessionToken: ", sessionToken)
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}