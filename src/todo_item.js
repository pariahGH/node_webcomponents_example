import templateString from './todo_item.html'
(function(document){
    class TodoItem extends HTMLElement {
        constructor(){
            super()
        }
        connectedCallback(){
            //create all our content

            //Challenge for students: figure out a graceful way to handle editing!
        }
    }
    window.customElements.define('todo-item',TodoItem)
})(document)