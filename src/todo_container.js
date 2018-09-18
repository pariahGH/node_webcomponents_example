import templateString from './todo_container.html'
(function(document){
    class TodoContainer extends HTMLElement {
        constructor(){
            super()
        }
        connectedCallback(){
            //create all our content
            
        }
    }
    window.customElements.define('todo-container',TodoContainer)
})(document)