const express = require('express')
const { fstat } = require('fs')
const app = express()
const port = 8080
const path = require('path')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/ask/index.html'))
})

app.post('/create-question', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json'))
    const newQuestion = {
        _id: data.length + 1,
        content: req.body.content,
        yes: 0,
        no: 0,
    }
    
    const newData = [...data, newQuestion]
    fs.writefileSync('data.json', JSON.stringify(newData))
    res.send({
        success: 1,
        data: newQuestion
    })
})
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './public/404/index.html'))
// })


app.listen(port, (err) => {
    if (err) throw err
    console.log('Server Started')
})