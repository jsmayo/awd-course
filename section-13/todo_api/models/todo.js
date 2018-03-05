var mongoose = require("mongoose");

// I want the todo api to include a TASK-NAME, COMPLETED(BOOL), and CREATION_DATE
// Schema requires an object parameter.
var todoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: "Name cannot be blank!"
        },
        completed: {
            type: Boolean,
            default: false
        },
        created_date: {
            type: Date,
            default: Date.now
        }
    });
    
/* Compile the Schema into a model and save to a variable:
        mongoose.model("ModelName", schemaName);
            * Model name is Todo (capital by default).
            * Schema is what I defined above.
*/
var Todo = mongoose.model('Todo', todoSchema);

/* When requiring the todo.js, what is actually sent out is the Todo variable
    defined below, which is just the Todo Model that was compiled from the 
    todoSchema.
*/
module.exports = Todo;