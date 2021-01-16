import {NewBook} from './newBook.js'
export function updateHTML(list){
    
    if(list.length==0){
        html='No match'
    }
    else{
        window.localStorage.setItem("bookList", JSON.stringify(list))
        for(let book of list){
           let newBook=new NewBook(book[0],book[1],book[2])
           newBook.showBook()
         
        }
    }
 
}