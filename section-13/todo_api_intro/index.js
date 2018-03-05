// package.json: install express, node, npm, etc...
// require express and set app variable to run express commands like app.listen()...
var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

// add a route of '/' and display a message by working with the response variable
app.get('/', function(request, response) {
    response.send("Hi there from Express!");
});

// add a route of /happy to display a smile when a user visits
app.get('/happy', function(request, response) {
    response.send(":)");
});


// define server port and callback function.
// Use C9's process.env.PORT, otherwise 3000 / localhost is used.
app.listen(port, function() {
    console.log("App is running on port: " + process.env.PORT);
});