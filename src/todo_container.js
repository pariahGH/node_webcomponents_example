import templateString from './todo_container.html'
import TodoItem from './todo_item.js'
(function(document){
    var template = document.createElement('div')
    template.innherHTML = templateString

    class TodoContainer extends HTMLElement {
        constructor(){
            super()
            //perform any setup
        }
        connectedCallback(){
            //create all our content
            var shadowRoot = this.attachShadow({mode:"closed"})
            shadowRoot.appendChild(template)
            this.input = shadowRoot.getElementById('input')
            this.button = shadowRoot.getElementById('button')
            this.list_holder = shadowRoot.getElementById('todo_list_holder')
            this.errorHolder = shadowRoot.getElementById('errors')
            this.button.addEventListener('click', evt=>{
                //make a new todo, tell the server to add, 
                //on success tell the element what its id is and 
                //add to DOM
                var text = input.text
                fetch(new Request("/todos",{
                    method: "POST",
                    body:JSON.stringify({text})
                })).then((res)=>{
                    res.json().then((data)=>{
                        console.log(data)
                        if(data.success){
                            var todo = new TodoItem(data.id,text)
                            list_holder.appendChild(todo)
                        }else{
                            this.errorHolder.textContent = "Error getting content"
                        }
                    });
                });
            })

            //get a list of all the todos and add them to holder
            fetch(new Request("/todos",{method: "GET"})).then((res)=>{
                res.json().then((data)=>{
                console.log(data)
                if(data.success){
                    for(var todoObj of data.data){
                        //add a todo to our holder
                    }
                }else{
                    this.errorHolder.textContent = "Error getting content"
                }
                });
            });
        }
    }
    window.customElements.define('todo',TodoContainer)
})(document)