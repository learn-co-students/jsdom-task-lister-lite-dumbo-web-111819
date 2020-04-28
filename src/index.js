document.addEventListener("DOMContentLoaded", function(){
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")
  taskForm.addEventListener("submit",function(event){
    event.preventDefault()
    // console.log(event)
    const taskLi = document.createElement("li") //create li tag
    const userInput = event.target["new-task-description"].value  //input to accept user input
    taskLi.textContent = userInput //set the textContent of newly created li(tasksLi) to userInput
    taskList.append(taskLi) //add the taskLi(li tag and content) to the taskList (ul parent of li)



    // taskLi.addEventListener("click", function(){  //bind an event listener to taskLi(li tag and content)
    //   taskLi.remove() //remove taskLi on click
    // })
    //console.dir(event.target)
    //event.target.reset()
  })

    // DELEGATION
  // 1) Find a stable parent on the index.html
  // 2) Add Event Listener
  // 3) Use an if statement
  // 4) Execute event listener

    taskList.addEventListener("click", function(event){
    // evt.stopPropagation()
    console.log(event.target.tagName)
    if (event.target.tagName === "LI") {
      // Inside here, evt.target -> <li>
      event.target.remove()
    }
  })


  //let taskUl=document.querySelector("#tasks")
});
