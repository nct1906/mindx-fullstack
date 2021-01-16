export function updateHTML(list){
    let html=''
    if(list.length==0){
        html='No match'
    }
    else{
        window.localStorage.setItem("taskList", JSON.stringify(list))
        for (let item of list) {
            html+=`<new-task value=${item}></new-task><br>`
        }
    }
    document.getElementById('taskList').innerHTML=`${html}`
}