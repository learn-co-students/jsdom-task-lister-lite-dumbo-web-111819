document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Get DOM Elements
  const newTaskForm = document.getElementById('create-task-form')

  const newTaskUl = document.getElementById('tasks')

  // Create UL for to-do's

  // Event listeners

  newTaskForm.addEventListener('submit', submitNewTaskForm)

  function submitNewTaskForm(event) {
    event.preventDefault()
    const newTask = event.target['new-task-description'].value
    const newLi = document.createElement('li')
    newLi.innerText = newTask

    newTaskUl.append(newLi)

    newLi.addEventListener('click', function(event) {
      event.target.remove()
    })
  }

});
