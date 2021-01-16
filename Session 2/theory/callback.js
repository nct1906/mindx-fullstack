// function doAsync(url,onSuccess,onError){
//     const xhr=new XMLHttpRequest();
//     xhr.open('GET',url)
//     xhr.onload=()=>onSuccess(xhr.responseText)
//     xhr.onerror=()=>onError(xhr.statusText)
//     xhr.send()
// }
// doAsync('https://apigithub.com/users/anhtbok92',value=>{
//     console.log(value)
// },error=>{
//     console.log(error)
// })
var promise_pending = new Promise((resolve, reject) => {

})
console.log("Trang thai Promise ban dau: ", promise_pending)
var promise_fulfilled = new Promise((resolve, reject) => {
    resolve()
})
console.log('Trang thai Promise khi resolve: ', promise_fulfilled)
var promise_reject = new Promise((resolve, reject) => {
    reject('xay ra loi')
})
console.log('trang thai promise khi reject', promise_reject)
var promise_method2 = new Promise((resolve, reject) => {
    const jsonData = {
        "name": "hello",
        "age": 18,
        "title": "web fullstack"
    };

    const arrayCourse = [{
        "course name": "lap trinh node js",
        "price": 180
    }];
    
    resolve(arrayCourse)
})
promise_method2.then(function (data) {
    console.log("Data get when resolve called:", data)
})
.catch(function(){
    console.log("Promise method then called when reject called: ", 'failure')
})
.finally(function () {
    console.log("Promise method then called in case both resolve or reject: ", 'done');
})