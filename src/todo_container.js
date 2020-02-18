// this imports our html file - the raw-loader will convert this to a string for us
import templateString from './todo_container.html'
// this is located inside of a self executing function - we define it and then immediately call it
(function(document){ // the document variable represents the webpage
    class TodoContainer extends HTMLElement { // class based syntax!
        constructor(){
            super();
            this.shadow = this.attachShadow({'mode':'closed'}); // creates our shadow dom root
            this.shadow.innerHTML = templateString; // sets the templateString to be our internal HTML
            // grab references to the buttons
            this.todoContainer = this.shadow.getElementById("todo_list_holder");
            let addTodoButton = this.shadow.getElementById("add_button");
            let clearTodosButton = this.shadow.getElementById("clear_button");
            let todoInput = this.shadow.getElementById("input");
            // assign event listeners to the buttons
            // note the use of async/await syntax here, with a try/catch
            addTodoButton.addEventListener("click", async ()=>{
                try{
                    let text = todoInput.value;
                    // the fetch api makes it super easy to make network requests
                    const res = await fetch("/todos/", {
                        method:"POST", 
                        body:JSON.stringify({text}), 
                        headers:{"Content-Type":"application/json"}
                    })
                    if(!res.ok) {
                        alert("Failed to reach server!\n" + res.status)
                    }
                    else {
                        resJson = await res.json();
                        // this here is a ternary - condition ? value if true : value if false;
                        // complicated dos can be wrapped in (), needed because this syntax expects values to return
                        resJson.success ? (
                            this.todoContainer.appendChild(this.buildTodo(text, resJson.data)),
                            todoInput.value = ""
                        ) : alert("Failed to add todo!\n" + resJson.err.message);
                    }
                }
                catch (e) {
                    alert(e)
                }
            });
            // which one is more readable - this or the above? this uses promise syntax
            clearTodosButton.addEventListener("click", ()=>{
                fetch("/todos/", {method:"DELETE"}).then((res)=>{
                    if(!res.ok) alert("Failed to reach server!" + "\n" + res.status)
                    else res.json().then((resJson)=>{
                        resJson.success ? this.clearTodoContainer() : alert("Failed to clear todo!\n" + resJson.err.message);
                    });
                })
            });
        }

        setupListeners(newTodo){
            newTodo.addEventListener("delete:success", ()=>{
                this.todoContainer.removeChild(newTodo);
            });
        }

        loadTodos(todos){
            for(var todoData of todos){
                let todo = this.buildTodo(todoData.text, todoData._id);
                this.todoContainer.appendChild(todo);
            }
        }

        buildTodo(text, id){
            let newTodo = document.createElement("todo-item"); // we can use our other custom elements the same way we would use any other
            newTodo.setTodo(text, id);
            this.setupListeners(newTodo);
            return newTodo;
        }

        clearTodoContainer(){
            let emptyClone = this.todoContainer.cloneNode(false);
            this.todoContainer.parentNode.replaceChild(emptyClone, this.todoContainer);
            this.todoContainer = emptyClone;
        }
        // this does not get called until our item is actually attached to the DOM and ready to go
        // important! there may be things that do not yet exist yet when the constructor is called
        // so it's better to perform dom modifications here
        connectedCallback(){
            fetch("/todos/", {method:"GET"}).then((res)=>{
                if(!res.ok) alert("Failed to reach server!" + "\n" + res.status)
                else res.json().then((resJson)=>{
                    resJson.success ? this.loadTodos(resJson.data) : alert("Failed to get todos!\n" + resJson.err.message);
                });
            });
        }
    }
    // this is what actually defines our custom tag
    window.customElements.define('todo-container',TodoContainer);
})(document)