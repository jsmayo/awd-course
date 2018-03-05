var mongoose = require("mongoose");
mongoose.set('debug', true); // show debugger if error arises
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise; // allows the use of Promise syntax (.then / .catch)

module.exports.Todo = require("./todo");