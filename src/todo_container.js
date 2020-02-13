import templateString from './todo_container.html'

(function(document){
    class TodoContainer extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({'mode':'closed'});
            this.shadow.innerHTML = templateString;
            this.todoContainer = this.shadow.getElementById("todo_list_holder");
            let addTodoButton = this.shadow.getElementById("add_button");
            let clearTodosButton = this.shadow.getElementById("clear_button");
            let todoInput = this.shadow.getElementById("input");
            
            addTodoButton.addEventListener("click",()=>{
                let text = todoInput.value;
                fetch("/todos/", {
                    method:"POST", 
                    body:JSON.stringify({text}), 
                    headers:{"Content-Type":"application/json"}
                }).then((res)=>{
                    if(!res.ok) alert("Failed to reach server!\n" + res.status)
                    else res.json().then((resJson)=>{
                        resJson.success ? (
                            this.todoContainer.appendChild(this.buildTodo(text, resJson.data)),
                            todoInput.value = ""
                        ) : alert("Failed to add todo!\n" + resJson.err.message);
                    });
                });
            });

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
            let newTodo = document.createElement("todo-item");
            newTodo.setTodo(text, id);
            this.setupListeners(newTodo);
            return newTodo;
        }

        clearTodoContainer(){
            let emptyClone = this.todoContainer.cloneNode(false);
            this.todoContainer.parentNode.replaceChild(emptyClone, this.todoContainer);
            this.todoContainer = emptyClone;
        }

        connectedCallback(){
            fetch("/todos/", {method:"GET"}).then((res)=>{
                if(!res.ok) alert("Failed to reach server!" + "\n" + res.status)
                else res.json().then((resJson)=>{
                    resJson.success ? this.loadTodos(resJson.data) : alert("Failed to get todos!\n" + resJson.err.message);
                });
            });
        }
    }
    window.customElements.define('todo-container',TodoContainer);
})(document)