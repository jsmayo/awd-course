// will contain 5 routes 

var express = require('express');
// express.Router() allows routes to be broken in modular chunks
var router = express.Router();
// database requirement
var db = require("../models");

//defining the /api/todos + '/' route. The /api/todos is prefixed in index.js
router.get('/', function(req, res) {
  // res.send("Hello from the TODO's route!");
  // send all todo's
  db.Todo.find() // find() with no params will find all entries
    // using Promise syntax
    .then(function(todos) {
      res.json(todos);
    })
    .catch(function(err) {
      res.send(err);
    });

});

router.post('/', function(req, res) {
  //   response.send("this is the post route");
  // console.log(req.body); // testing object post
  db.Todo.create(req.body)
  .then(function(newTodo) {
    res.status(201).json(newTodo);
  })
  .catch(function(err) {
    console.log(err);
  })
});

//export routes for access outside of this file
module.exports = router;
