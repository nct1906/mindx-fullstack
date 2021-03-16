const express = require('express')
const fs = require('fs');
const app = express()
const port = 8080
const path = require('path')

// Body Parser Middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Questions API Routes
app.use('/create-question', require('./routes/api/questions'))

// Homepage Route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/home/index.html'))
})

app.listen(port, (err) => {
    if (err) throw err
    console.log('Server Started')
})