var express = require('express');
// express.Router() allows routes to be broken in modular chunks
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello from the TODO's route!");
});

module.exports = router;
