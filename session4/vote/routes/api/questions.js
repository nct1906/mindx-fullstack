console.log('hello4')
const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs');

router.use(express.static('../../public'))
//const questions = require('../../questions.json')


router.get('/', (req, res) => {
    console.log('hallo')
    res.sendFile(path.resolve(__dirname, '../../public/ask/index.html'))
})

router.post('/', (req, res) => {
    console.log('hello2')
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data.json')))
    const newQuestion = {
        _id: data.length + 1,
        content: req.body.content,
        yes: 0,
        no: 0,
    }
    const newData = [...data, newQuestion]
    fs.writeFileSync(path.resolve(__dirname, '../../data.json'), JSON.stringify(newData))
    res.send({
        success: 1,
        data: newQuestion
    })
})

module.exports = router