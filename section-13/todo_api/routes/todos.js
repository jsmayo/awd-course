// will contain 5 routes 

var express = require('express');
// express.Router() allows routes to be broken in modular chunks
var router = express.Router();

//defining the /api/todos + '/' route. The /api/todos is prefixed in index.js
router.get('/', function(req, res) {
    res.send("Hello from the TODO's route!");
});

//export routes for access outside of this file
module.exports = router;
