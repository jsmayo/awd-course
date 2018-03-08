// will contain 5 routes 

var express = require('express');
// express.Router() allows routes to be broken in modular chunks
var router = express.Router();
// database requirement
var db = require("../models");

//defining the /api/todos + '/' route. The /api/todos is prefixed in index.js

// INITIAL SHOW OF ALL TODO'S IN THE DB
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

// POSTING DATA TO THE DB FOR A NEW TODO ENTRY
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


/* SHOW A SPECIFIC TODO
    - The :todoId is essentially a parameter name that's used to represent
        whatever is passed in after .../api/todos/DATAHERE/
    - if /:todoId/:mood then access data  using req.params.mood which would be
        here .../api/todos/firstRouteData/MOODDATAHERE
*/
router.get("/:todoId", function(req, res) {
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo) {
    res.json(foundTodo); // parse promise into json and return
  })
  .catch(function(err){
    res.send(err);
  });
});

// UDPATE A TODO ENTRY USING A PUT REQUEST
router.put('/:todoId', function(req, res){
  /* - findOneAndUpdate(objectToUpdate, newInformation, {new: true})
      use 3rd param if you want to return new object, instead of the default old.
     - This method returns a promise, so work off of the response object.
  */
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  // findOneAndUpdate returns a promise, so define fn()s for then & catch.
  .then(function(todo) {
    res.json(todo); // send a json object back within the res (OLD info by default)
  })
  .catch(function(err){
    res.send(err);
  });
});

//export routes for access outside of this file
module.exports = router;
