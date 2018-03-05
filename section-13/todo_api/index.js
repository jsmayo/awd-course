// require express
var express = require('express'),
    // define var app to be express function as shortcut add.listen() ...
    app = express(),
    //c9 port for listening or localhost 
    port = process.env.PORT || 3000;
    
    
    
app.listen(port, function() {
    console.log("App is listening on: " + port);
})