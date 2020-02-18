// note the different import syntax - this runs in the node environment and uses nodejs import syntax
var express = require('express'); // this framework allows us to easily write handlers for http routes
var app = express(); // construct an instance of the framework
var path = require('path'); // again, handy dandy path handling
require('mongoose').connect('mongodb://127.0.0.1/demo'); // import and configure our ORM in one neat line

app.use(require('body-parser').json()); // this tells our express app to use this plugin - this plugin automagically handles converting http request bodies into json obhjects

app.use(express.static(path.join(__dirname,'./build'))); // this configures our static directory. 
// basically, the static directory just serves files, where a single route points to the folder they are in. 
// this is in contrast to our other routes, which actually execute code (and are thus 'dynamic' instead of static)

app.use('/todos',require('./routes/todo_routes.js')(express.Router())); // this configures our routes by importing a function that takes an express router as a param.
// this is one of several different patters that could be used - the imported module could just return an object, it could construct the router itself...etc

// note the syntax below - we are still calling app.use, but now we are passing an anonymous function in 
// instead of the router object used above - the express API is extremely flexible. line 13 and line 20 
// are telling express what to use for a specific route - lines 7 and 9 are general use for all routes.
// this function we use here takes two parameters: the incoming request object and the outgoing response object
app.use('/',(req,res)=>{ // this pattern is valid, but there are many ways of handling serving your initial file. 
                        // normally, your nginx or apache service would handle serving this and other static files, 
                        // but i want to demonstrate how sending specific files would work in a route. 
    return res.sendFile(path.join(__dirname,'./index.html'));
})
// this tells our app to start listening for connections on the given port, and we can provide a callback function
// to do extra stuff once the server has finished setting up its network connections
app.listen(8080, ()=>{
    console.log("Application listening on 8080");
});
