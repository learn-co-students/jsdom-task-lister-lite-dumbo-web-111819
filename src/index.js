const main =document.querySelector("#main-content")
console.log(main)


let taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")


taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    //have the user input
    const newTask = document.querySelector("#new-task-description").value
    
//slap it on th DOM
//Where i should put it ?


taskList.innerHTML += `
<li> ${newTask} 
<button data-action= "delete" data-matt="PowerFULL" data-charlie="downfield">X for delete </button>
</li>
`

// const taskItem = document.createElement("li")
// taskItem.innerText = newTask
// taskList.appendChild(taskItem)
taskForm.reset();


})
taskList.addEventListener("click", function(e){
    if (e.target.dataset.action ==="delete"){
        e.target.parentElement.remove()
    }
    

})


