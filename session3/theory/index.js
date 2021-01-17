console.log('hello')
//module npm library => tim trong node module (1)
const isOdd=require('is-odd')
let num=5
const isNumber=require('is-number')
num='hello'
console.log(isNumber(num))
//tu viet module (2)
const newOdd=require('./isOdd.js')
console.log(newOdd(8))
//file system code co san trong nodejs (3)
const fs=require('fs')
// fs.writeFile('text.txt','Hello web 46',(err)=>{
//     if(err) return console.log('loi roi',err)
//     console.log('ghi file thanh cong')
//     fs.readFile('text.txt', (err, data) => {
//         if (err) throw err;
//         console.log(data); //buffer
//         console.log(data.toString())
//       });
// })

// fs.readFile('text.txt',{encoding:'utf-8'}, (err, data) => {
//     if (err) throw err;
//     console.log(data); //buffer

// console.log(data)
//sync => dong bo hoa, theo thu tu cho nhau
// fs.writeFileSync('./doc/readme.md','Hi')   
// //   });
// console.log('hello2')
try{
    const data = fs.readFileSync('number.txt').toString()
} catch(error){
    console.log(error)
}

let output = ''
for(let char of data){
    if(isOdd(char)){
        output += char
    }   
}
fs.writeFileSync('output.txt',output) 
