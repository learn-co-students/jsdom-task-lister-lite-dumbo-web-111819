document.addEventListener("DOMContentLoaded", () => {

  
  let taskForm = document.getElementById("create-task-form")
  let task = document.getElementById("new-task-description")
  let taskList = document.getElementById("list")
  let priority = document.getElementsByTagName("select")
  console.log(priority.target)

  let dropdown = document.createElement("select")
  dropdown.innerHTML = `
    <option id="Low">Low</option>
    <option id="Medium">Medium</option>
    <option id="High">High</option>
    `
  taskForm.appendChild(dropdown)

  taskForm.addEventListener("submit", addTask)

  function addTask(e){
    e.preventDefault()
    taskList.innerHTML += `<li value=${priority.value}>${task.value}<button>X</button></li>`
  }

  taskList.addEventListener("click", function(e){
    if (e.target.tagName === "BUTTON"){
      e.target.parentNode.remove()
    }
  })




});
