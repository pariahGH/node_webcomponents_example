import templateString from './todo_item.html'
(function(document){
    var template = document.createElement('div')
    template.innherHTML = templateString

    class TodoItem extends HTMLElement {
        constructor(id, text){
            super()
            //perform any setup
            this.id = id
            this.text = text
        }
        connectedCallback(){
            //create all our content
            var shadowRoot = this.attachShadow({mode:"closed"})
            shadowRoot.appendChild(template)
            shadowRoot.getElementById('text').textContent = this.text

            shadowRoot.getElementById('button').addEventListener('click', evt=>{
                //tell the server to delete us
                //on success, delete ourselves from parent
            })
        }
    }
    window.customElements.define('todo-item',TodoItem)
})(document)