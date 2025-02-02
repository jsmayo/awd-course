// require express
var express = require('express'),
  // define var app to be express function as shortcut add.listen() ...
  app = express(),
  //c9 port for listening or localhost 
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'); // need body-parser to access POST data

// requiring the routes directory and have access to them due to exports!
var todoRoutes = require("./routes/todos.js");

// Tell app to use body-parser's json method and encoder method when handling data sent from POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));
// __dirname holds current directory, needed to send to index.html on load
app.use(express.static(__dirname + '/views'));


// inital request to the root route
app.get('/', function(req, res) {
  // res.send("Hello from the root route");
  res.sendFile("index.html");
});


/* making express prefix all routes with '/api/todos' formatting automatically
    SYNTAX: app.use("prefix/format", routesToFormat)
*/
app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, function() {
  console.log("App is listening on: " + port);
});
