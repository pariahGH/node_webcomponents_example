// import our Todo model - we get some handy dandy database utility functions
var Todo = require('../models/todo_model.js')
// takes an instance of express router as argument and returns it with modifications
module.exports = function(router){
    router.get('/',(req,res)=>{
        // Todo.find will find all todos that match an object we pass in - there is a lot of power here
        // an empty one returns all todos
        Todo.find({}, (err, todos)=>{
            if(err){
                // there is a bug here: can you find it? hint: it occurs several times and is related to the expected structure on the client end
                // also take note of what keys exist in the object seen client side
                return res.json({success:false, err}); // the res.json() function will automagically return a response with the arguments converted to a json string
            }// there are two different ways of formatting keys - if you have no special characters, you dont need to put the key in quotes
            return res.json({success:true, "data":todos});
        })
    });
    // note the convinient direct method functions
    router.post('/',(req,res)=>{
        console.log(req.body) // this statement will dump the request body to whatever our std out is, usually the terminal where it is running
        let todo = new Todo(req.body);
        todo.save((err, savedTodo) => {
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true, "data":savedTodo._id});
        })
    });

    router.delete('/', (req,res)=>{
        Todo.deleteMany({}, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });
    });
    
    router.delete('/:todo',(req,res)=>{
        Todo.findByIdAndDelete(req.params.todo, (err)=>{
            if(err){
                return res.json({success:false, err});
            }
            return res.json({success:true});
        });
    });

    return router
}