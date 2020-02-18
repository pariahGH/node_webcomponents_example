// import our ORM
var mongoose = require('mongoose')

// create a new schema - this is basically imposing a structure on top of mongodb
// since mongodb does not really have table structure built in
var todoSchema = new mongoose.Schema({
    text:{type: String, default:"None"} // define the expected properties and some metadata
})
// we can add methods that will exist on all created or retrived instances of this schema
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