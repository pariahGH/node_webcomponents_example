var Todo = require('../models/todo_model.js')

module.exports = function(router){
    router.get('/',(req,res)=>{
        Todo.find({}, (err, todos)=>{
            if(err){
                return res.json({"success":false,"err":err});
            }
            return res.json({"success":true, "data":todos});
        })
    });

    router.post('/',(req,res)=>{
        let todo = new Todo(req.body);
        todo.save((err, savedTodo) => {
            if(err){
                return res.json({"success":false,"err":err});
            }
            return res.json({"success":true, "data":savedTodo._id});
        })
    });

    router.delete('/', (req,res)=>{
        Todo.deleteMany({}, (err)=>{
            if(err){
                return res.json({"success":false,"err":err});
            }
            return res.json({"success":true});
        });
    });
    
    router.delete('/:todo',(req,res)=>{
        Todo.findByIdAndDelete(req.params.todo, (err)=>{
            if(err){
                return res.json({"success":false,"err":err});
            }
            return res.json({"success":true});
        });
    });

    return router
}