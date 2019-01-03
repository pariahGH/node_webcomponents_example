# Walkthrough

This file goes over this repo file by file, (almost) line by line - I'm not going to pay too much attention to the HTML files as they are extremely straightforward and shouldn't be an obstacle - it's the Javascript and tooling stuff that gets hairy. 

I'm aiming to explain everything in a clear and concise manner that's easy for a complete beginner to understand. In pursuit fo this, there are going to be areas where I may use an analogy or are otherwise deliberately imprecise - this is because I'm aiming for a conceptual grasp rather than just repeating a textbook (after all isn't that why we have textbooks in the first place?). To truly grok a subject, you can't just know it - you have to *feel* it. 

We will start with the front end, then cover the backend, then take a brief look at the tooling (Webpack). 

For anyone who has *not* been in one of my EPICS workshops: I'm writing this for someone that either has already or is currently listening to me ramble about getting started with this stuff, so there are some assumptions made about existing knowledge. I can always expand on things or add reference for further reading, just reach out and let me know. 

## The Front End

The front end of a web application is what actually gets loaded into and runs in the users browser. Really, I think you can consider the user facing portion of *any* application, web based or otherwise, as a front end - it helps to conceptually separate user interaction vs program logic which is really important for organization, maintainability, and readability.

The front end of this application consists of four files (which actually get turned into one, but we will save that for the section on tooling): two JS files that describe our components and two HTML files that contain the layout of those components. 

The way our front end is setup, we've got our main application logic sitting inside of our todo-container (you can see this tag in the index.html file) which then holds all of our individual todo items inside of a div. We are encapsulating the todos within their own custom element because we have some functionality that each todo item needs to take care of itself (this is a hint for anyone thinking about implementing editing of todos!).

### todo_container.js

This file describes our top level container, which manages the todo items.
This is what we are instantiating in our index.html. 

The first line of this file is an import statement - this is using ES6 import syntax, where we use the `import` keyword. There are several different ways of handling imports, and it largely depends on what your tooling supports and how the libraries you are using are built. More on this in the tooling section - for now, all you need to know is that this line is what takes our HTML file with the layout and puts it into a variable called `templateString` (we can thank Webpack for this magic).

This next bit may look a little weird. If you go ahead and check at the bottom of the file, you will notice that this is a giant function definition that is wrapped in some parantheses, with another set of parans at the end. 

This function is what we call a self invoking function - wrapping the function
definition in parantheses gives us an object that represents a function and then we call that
function by then using that second set of parans (you will notice that we are passing in `document` as an arugment to the function). It's sort of the same as:
`
var fun = (args){ <function body> }
fun(args)
`
but with some extra benefits.

Wrapping the function definitions in the parantheses below allows us to skip the whole
naming thing and just get right to executing it. Another benefit is that this doesn't 
affect the global namespace - things we declare inside this body are kept inside the body 
unless we call an outside function like when we define the tag. We also don't have to worry
about making sure this only executes once, because after it's been executed there is 
no reference to this function - no accidental reinitializing of state! 

That being said, we can also actually return a value from this function and assign that to a variable, 
which can be useful for providing an interface to a bunch of functions without having those
defintions in the global namespace. This is actually how most if not all Javascript libraries were implemented back in the day, as self invoking functions that defined a bunch of functions and stuff inside of them, then expose functionality by returning an object containing references to those. 

Most of the syntax inside should be at least a little familiar to you - declaring a class, the concept
of a constructor, inheritance, and function definitions - so I'm going to try and focus on describing *what* exactly we are doing with all these bits without going too deep into the *how*. Knowing how to break a problem into chunks and encapsulate them is probably the most important skill you can have as an engineer, in any discipline.

Custom elements, and really every single HTML tag, are all subclasses of `HTMLElement`, so we define our class as such. In the constructor, the first thing we do is setup our shadow root and load our layout into it. A shadow root is like a second HTML page that, instead of having the browser as its top most level, uses an element on the page as its top most level. This shadow HTML can't see the HTML of the whole page - its neatly encapsulated! A great benefit of this is that we don't have to worry about conflicting styles.

The next thing we want to do is get references to all of our buttons and the input box. We do this by using normal HTML DOM functionality - the shadow root is still an HTML element so we can use all the normal tools of the browser to operate on elements inside it. 

The next two triangles of code setup event listeners on our two buttons - you may not have seen this syntax before. The second argument of our `addEventLsitener` calls are anonymous functions. These are nameless functions that also preserve context. This is important because when we say `this` inside of that anonymous function, we want it to mean the same thing as using `this` higher up in the constructor, that is the instance of the class. 

What happens here is that when a `click` event is emitted by `addtodoButton`, this anonymous function we passed in will be called. Normally, we take the event itself as an argument for this function, but I'm not doing anything with the event in the function body so I'm ignoring the value.

The next cool bit is this `fetch` call inside of the anonmyous function. Making HTTP calls and loading stuff dynamically via Javascript used to be a ugly, scary mess back in the days of XMLHttpRequests, but JQuery came along with a nice simple AJAX function that we could use (which was really just a pretty wrapper around XMLHttpRequest). `fetch` takes this a step further by giving us direct support built into the browser for this nice, clean, gorgeous way of making requests. We use this by giving it a path and an object that contains some options. These options include things like the HTTP verb we are using and what data we are sending, if any. 

You may notice that we have another function call here, operating on the value returned by the `fetch` call. This is because `fetch` returns something called a `Promise`. `Promise`s are great and wonderful things, because they encapsulating asynchronous activity very niely. A `Promise` is literally that - a promise to return some data. We call `.then` on a `Promise` and we pass in the function that needs to be called when the `Promise` is done doing whatever it is we need it to do. We can also call `.catch` on the `Promise` (by chaining it with the `then` as in: `Promise.then((value)={}).catch((err)=>{})`) to provide a function for error handling. `Promise`s are extremely common, although in newer code you may see the use of `async/await` which is a different way of handling asynchronicty.

`
Ok! This is a lot so far to take in all at once - if you've been in one of my EPICS workshops then you may be already dealing with a huge amtestount of information overload. Go ahead and have a cookie or something, maybe a nice cup of tea or coffee. If you happen to have some Oreos and sotestme milk, I would highly reccomend combining them.test
`test
Alright, so now we have made a `fetch` request and we are assigning a function to be called when that data gets here. the next couple lines testare us transforming the raw data into a JSON object that we can conviniently access. This `fetch` call is actually a `POST` request - we are taking some data, sending it to the server, and the data we are expecting back is a status report that tells us how it worked out at the servers end.

But wait! Whats this? A question mark in the middle of our code? Yes!

This is called the ternary operator, and it is one of my favorite operators ever because you can so concisely express the concept behind an `if/else` when you're dealing with a simple condition. It is however reccomended that you avoid getting too fancy with them because it can get hard to read if you chaina  bunch of them together. 

The ternary operator can be interpreted as follows:

` condition ? (what to do if true) : (what to do if false)`

If you have multiple statements in a `(what to do)` block, separate them with a comma. If you only have one statement, you dont need commas or parans. If you do variable assignment inside of a `(what to do)` block, don't use `let` or `var`, just throw down a name and a `=`.

So this ternary statement here is pretty simple - if we succeed, build a todo and pass that into the `appendChild` function of our todo holder, otherwise we show an alert informing the user of what happened.

The next triangle doesn't do anything we haven't just seen - it's just another event listener that makes an HTTP reques, except this one handles clearing out ALL of the todos. Notice again the use of the ternary operator to concisely present our two options.

The next four functions all define utility functions that you may have seen scattered throughout our event listeners. Most of these should be fairly easy to grasp, especially if you open up the [Mozilla Development Network](https://developer.mozilla.org/en-US/) and use that to look up things you don't know. BUT before you do that, a couple notes:

You will see `"delete:success"` mentioned in one of these functions, where we add an event listener to a todo item - don't worry about this until we get to the todo items definition.

You will also see us call `document.creatEelement("todo-item");` - we will also cover this in the todo items definition.

The last function here is a special one - it is part of the HTMLElement lifecycle, functions that are part of the HTMLElement and are called at various points in time in the life of an HTMLElement. Generally speaking, you don't want to make any edits to the DOM in the constructor. You will have noticed that in our constructor, we don't actually *execute* anything, we just add properties to objects. Modifications to the DOM should wait until the element is actually connected to the DOM, which is when our `connectedCallback` function gets called. You may or may not have seen something similar in older code, something like `$(document).on('loaded', ... )` - this is because you want to make sure that the DOM is actually ready for you to start making modifications to it. In this case, we are waiting until our element is connected and setup before we `fetch` any existing todos from the database and display them. 

The second to last line in this file is extremely important - this line is what lets us use this element in our HTML as a tag : `<todo-container>`. We call the `define` method on `window.customElements` and we give it the desired tag name and the name of the class represented by that tag name. 

And that's it for this file!

### todo_item.js

This file is *significantly* shorter than todo_container.js, because theres less functionality thats contained in it. Most of the content here is not new, it's just doing different things. Most importantly, a todo item handles its own delete button click, reaching out to the server to delete itself from there and then notifying the container that it can remove the todo item. 

One interesting thing to note - as far as I know, you can't really create an element in the document and then pass args to it, so we have a function here that is called by the todo container to tell this todo item what its text and database id area. 

Remember those two notes from up above? Take a look at line 16 - notice that we make a call `this.dispatchEvent(new Event("delete:success"))`. This is how we emit an event, which is then caught by the event listener we setup in the todo container! This is a good way of handling communication between a component and its parent. 

You will see that the second to last line of this file is another custom element definition - note that the name of the tag is the same as that seen in `document.createElement("todo-item")` back in our container - when you create a custom element, you can create and operate on instances of it just like any other HTML element!


And that concludes the front end! It really is not a lot of code, yet we have some pretty good functionality here. 

## The Back End

The back end is what interfaces with our data storage systems. In many cases it will also contain core program logic, depending on how complicated the system is and how simple the data storage interface is. We are using MongoDB to store our todos, because MongoDB not only has great native interoperability with NodeJS but its also well suited to the type of our data we are working, which is self contained documents - we don't neccessarily care too much about the relations between different todos, we just want a place to store them.

We have three components here - the file which defines our server (main.js), a file to describe how to handle different HTTP routes (todo_routes.js) and a file that describes our data model (todo_model.js)

### main.js

This file is what starts our server and sets up our request handling. Do note that we don't start up our database here - generally speaking a database service should already be running, but if you aren't in prod you probably don't have a database always running in the background. 

The first three lines handle importing and instantiating our Express service as well as another import we need, a utility for handling paths. 

The fourth line imports mongoose and tells it where to find our database. 

Line 6 tells our Express isntance that we want to use a json body parser for handling the bodies of requests - this is important because it will automatically parse our `req/body` into a JSON object for us (we will revisit this in todo_routes.js). 

Line 8 tells our Express instance where to go to handle requests for static files - this includes js files, images, css, anything that our server needs to deliver to make our app work. Generally speaking, for a high performance system you want this sort of thing to be handled by something like nginx or Apache because you don't want your API to be busy serving up static files you want it 100% dedicated to handling API requests, but for smaller projects it's ok to just handle it here. 

Line 10 is really important - this tells the Express instance that for any requests to `<our domain name>/todos`, we want it to use a router that we pass into our todo_routes.js file - we will take a second look at this when we go over that file. 

Lines 12-14 handle serving our index page whenever someone access our base URL (ie, accessing todoapp.com instead of todoapp.com/todos)

Lines 16-18 tell the Express instance to start listening to any incoming requests on port 8080, and we pass in a callback that, once our server has finished setting up its listener, will inform us via console that everything is good to go. 

Technically, ports 80 and 443 should be used for HTTP and HTTPS respectively, but its common for demos and other non public services to use 8080. 

### todo_routes.js

This is where the meat of the application is - this is where we define how we handle incoming requests. 

Our first line is an import - we are bringing into scope the model we are using for the todo items. 

On line 3, you will see `module.exports = <function>` - this is NodeJS export syntax, which says "whatever is assigned to this variable is what will be exported to anything that imports this file". In this case, we are exporting a function that takes as an argument an Express router instance - remember back in the main.js file where we assigned the routes? This is why we had an `express.Router()` on that line. The router gets passed into this function, which adds route handlers to it and then returns it for the Express app to use. 

3 of the 4 most common HTTP verbs are used here: GET, POST, and DELETE. It's not really mandatory, but the standard semantics for these are getting data, adding data, and deleting data, respectively. PUT requests, not used here, generalyl represent editing existing data. 

You will note that its really use to use these - the function calls are the names of the appropiate verbs. They take the path and a function as arguments, but can also support whats called "middleware" - functions that operate on the request body before it gets passed to your handling function. This includes stuff like authentication handlers or session managers. 

The handling function takes both a request and a response object. The request object represents every little bit of detail about the actual HTTP request, and the response object encapsulates all functionality related to responding to the incoming request. 

It's highly recommended that you read about how HTTP works in depth!

Most of this *should* be fairly self explanatory - I've tried to make the code as easy to read as possible here, and the functions we use for database operations should be self-explanatory. You should also be apply what we've already talked about regarding anonymous functions to see what these do - the important thing to note there is that all of the paths we define are going to be used in the context of the route we defined in main.js - we told express to use these handlers for anything on "todoapp.com/todos", so when we say `router.delete('/' ... )` that route is actually applied to DELETE requests on "todoapp.com/todos/", not "todoapp.com".

The last handler demonstrates an important feature. You will notice that the route for this is `'/:todo' - what this does is tell express that the text after that slash is actually a parameter, and we can access that parameter via `req.params.todo`. This feature can allow you to compose functionality with semantic routes. For example, lets say we had images associated with each todo. We could then define a route to add images to a todo as:

`router.post('/:todo/images', (req,res)=>{})`

which lets us easily see when looking at the route what its intended function is. This can help immensely with readability, but be careful not to over do it - if you have extremely nested functionality, you may want to rethink your design. 

### todo_model.js

This file is really small. All it does is define how our todos should look in the database, and defines some extra functionality - for anyone looking to implement editing, you will notice I have defined a function called `updateSelf` at line 7 - this function will be automatically defined for any todo that gets returned by our database queries or that we create ourself!

Lines 3-5 in this file are what define our actual todo object. We are creating a new mongoose schema, and we pass into the constructor an object that names each of the properties of the todo and provides additioanl information about each property. In this case, we have one property called `text` with the type `String` that has a default value of `"None"`. You can also describe arrays of objects, date objects, and much more!

The last line of this file exports a model with the schema. By calling `mongoose.model('Todo', todoSchema)` we tell mongoose to use a table called `todos` (which will be created if it doesn't already exist) to store our todos. 

## The Tooling

Javascript tooling has gotten pretty involved over the years. Since we can't really rely ona ny given use using an up to date browser, or browser vendors keeping up with new features, we have to do things like use shims or translate code to earlier styles in order to maintain usability. Luckily there are tools to do this for us!

This projects uses Webpack as its tool system. It uses Babel to transpile our code into code that *should* work on every browser in use. Webpack also neatly packages our files into one deliverable, so that we can avoid the overhead of sending multiple files to a client. 

We also use npm to maange packages and dependencies - it originally started out as being a package manager for NodeJS, but it was so darn useful that most front end libraries can also be managed through it as well as packages for our toolchain. npm is described in our package.json, and Webpack is configured through our webpack.config.js. 

### Webpack and webpack.config.js

The full power of Webpack is a bit beyond the scope of this. Suffice to say there is a LOT that can be done with it. All we are using it for here is to compile all of our code and our templates into one deliverable, with some minification and transpiling. 

If you look at the webpack,config.js file you can see that we define some imports at the top, and then we export an object with properties that define Webpacks' behaviour. We give it both of our front end js files as entry points, and then one output file. We also give it some rules for processing files. Again, a lot of what is in here is out of scope for this walkthrough. Webpack probably deserves its own semester long course. 

### npm and package.json

npm is a pretty decent package manager. The only downside is that downloaded libraries can't see each other - this means that if you are using package A, and you download package B that itself uses package A, package B will download its own second copy of package A and store that within its own node_modules folder. And this behaviour applies allllllllll the way down. node_modules folders can get big, and generally you should never, ever add one to a git repo. 

That aside, it still gets the job done pretty conviniently. The package.json file describes your project and what packages it depends on - npm can automatically detect this and install listed packages for you. 

There really isn't much to discuss in this file - it's a pretty straightforward json object. 

## The End

That's it! We've covered the whole thing. 

Again, there were a lot of assumptions about prior knowledge made - reach out and let me know if there is something that would be helpful to include, short of replicating my entire workshop. 