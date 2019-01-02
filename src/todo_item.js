import templateString from './todo_item.html'

(function(){
    class TodoItem extends HTMLElement {
        constructor(){
            super()
            this.shadow = this.attachShadow({'mode':'closed'});
            this.shadow.innerHTML = templateString;
            this.textDisplay = this.shadow.getElementById("text");

            let button = this.shadow.getElementById("button");
            button.addEventListener("click",()=>{
                fetch("./todos/"+this.id, {"method":"DELETE"}).then((res)=>{
                    if(!res.ok) alert("Failed to reach server!" + "\n" + res.status)
                    else res.json().then((resJson)=>{
                        resJson.success ? this.dispatchEvent(new Event("delete:success")) 
                            : alert("Failed to delete todo!\n" + resJson.err.message);
                    });
                });
            });
        }

        setTodo(text, id){
            this.textDisplay.textContent = text;
            this.id = id;
        }
    }
    window.customElements.define('todo-item',TodoItem);
})()