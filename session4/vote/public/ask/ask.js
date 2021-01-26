const createForm = document.getElementById('form-question')
const textAreaQuestion = document.getElementById('create-textarea')

createForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const content = textAreaQuestion.nodeValue
    const question = {
        content
    } //{content:content}
    fetch('http://localhost:8080//create-question', {
        method: 'POST',
        body: new URL.SearchParams(question)
    }).then(res => res.json()).then(res => console.log(res))
})