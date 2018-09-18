var Todo = require('../models/todo_model.js')
module.exports = function(router){
    router.get('/todos',(req,res)=>{
        Todo.find({},(err,data)=>{
            if(err){
                return res.json({"success":false,err})
            }
            return res.json({"success":true,data})
        })
    })

    router.put('/todos/:todo',(req,res)=>{
        Todo.findById(req.params.todo,(err,todo)=>{
            todo.updateSelf(req.body.text,err=>{
                if(err){
                    return res.json({"success":false,err})
                }
                return res.json({"success":true})
            })
        })
    })

    router.post('/todos',(req,res)=>{
        var todo = new Todo(req.body)
        todo.save(err=>{
            if(err){
                return res.json({"success":false,err})
            }
            return res.json({"success":true,"id":this._id})
        })
    })

    router.delete('/todos/:todo',(req,res)=>{
        Todo.remove({"_id":req.params.todo},err=>{
            if(err){
                return res.json({"success":false,err})
            }
            return res.json({"success":true})
        })
    })
}