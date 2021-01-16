
export function NewBook(title,author,isbn) {
    this.title=title
    this.author=author
    this.isbn=isbn
}

NewBook.prototype.showBook = function() {
    
        let book = document.createElement('p')
        book.textContent = `${this.title} ${this.author} ${this.isbn}`
        const list=document.getElementById('bookList')
        list.appendChild(book)
  
}

