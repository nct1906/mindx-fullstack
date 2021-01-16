import { updateHTML } from "./utils.js"


class NewTask extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({
            mode: 'open'
        })
    }
    connectedCallback() {
        this.value = this.getAttribute('value')
        this._shadowDom.innerHTML = `${this.value} <button id="delete" type="button">X</button>`
        this._shadowDom.getElementById("delete").addEventListener('click', async (e) => {
                e.preventDefault()
                alert("Delete Item?")
                let list = JSON.parse(window.localStorage.getItem("taskList"))
                const index = list.indexOf(this.value)
                list.splice(index, 1);
                updateHTML(list)
        }
        )
    }
}
    window.customElements.define('new-task', NewTask)