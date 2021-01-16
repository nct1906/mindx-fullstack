import {NewBook} from './newBook.js'
import {updateHTML} from './utils.js'
let list = JSON.parse(window.localStorage.getItem("bookList") || "[]")
//window.localStorage.removeItem("bookList")
const form = document.getElementById('postForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let book = []
    book=[form.title.value,form.author.value,form.isbn.value]   
    list.push(book)
    updateHTML(list)
    form.reset()
 
})
const search = document.getElementById('search')
search.addEventListener('keyup', () => {
    if(search.value){
        const result = list.filter(item => item.includes(search.value))
        updateHTML(result)
    }
    else{
        updateHTML(list)
    }
})