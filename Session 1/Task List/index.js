import './newTask.js'
import {
    updateHTML
} from './utils.js'
let list = JSON.parse(window.localStorage.getItem("taskList") || "[]")
const form = document.getElementById('postForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let value = form.toDo.value   
    list.push(value)
    updateHTML(list)
    form.reset()
})
const search = document.getElementById('search')
search.addEventListener('keyup', () => {
    console.log(search.value.length)
    console.log(search.value)
    if(search.value){
        const result = list.filter(item => item.includes(search.value))
        updateHTML(result)
    }
    else{
        updateHTML(list)
    }
})