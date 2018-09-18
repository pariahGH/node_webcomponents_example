var express = require('express')
var app = express()
var path = require('path')
require('mongoose').connect('mongodb://127.0.0.1/demo')

app.use(require('body-parser').json())

app.use(express.static(path.join(__dirname,'./build')))

app.use('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'./index.html'))
})

app.use('/todos',require('./routes/todo_routes.js')(express.Router()))

app.listen(8080)