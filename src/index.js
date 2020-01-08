document.addEventListener("DOMContentLoaded",function(){
  const taskUl = document.querySelector('#tasks');
  const taskForm = document.querySelector('#create-task-form');
  // console.log(taskUl)
  // console.log(taskForm)
  taskForm.addEventListener("submit",function(e){
    e.preventDefault()
    //getting the input field through the name
    //value = user input
    //e exist inside the function
    console.log(e)
    console.log(e.target)
    const userInput = e.target["new-task-description"].value
    const newInput = document.createElement("li")
    newInput.innerText = userInput
    taskUl.append(newInput)
  })






  taskUl.addEventListener("click",function(e){
    
    // console.log(e.target.tagName)
    if(e.target.tagName === "LI"){
      
      e.target.remove()
    }
  })

});
