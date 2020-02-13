var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({
    text:{type: String, default:"None"}
})

todoSchema.methods.updateSelf = function(data,callback){
    this.text = data
    this.save(err=>{
        if(err){
            return callback(err)
        }
        return callback(null)
    })
}

module.exports = mongoose.model('Todo',todoSchema)