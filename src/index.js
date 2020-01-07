document.addEventListener("DOMContentLoaded", () => {
  let taskCreator = document.querySelector('#create-task-form')
  taskCreator.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let newTask = e.target['new-task-description'].value
    let taskUl = document.querySelector('#tasks')
    let taskLi = document.createElement('li')
    let deleteButton = document.createElement('button')
    
    //Drop down menu
    let dropDownMenu = document.createElement('select')
    let red = document.createElement('option')
    let yellow = document.createElement('option')
    let green = document.createElement('option')
    
    red.textContent = 'Red'
    yellow.textContent = 'Yellow'
    green.textContent = 'Green'
    
    dropDownMenu.append(red,yellow,green)
    // Changes color of text
    dropDownMenu.addEventListener('change', (e)=>{
      if(e.target.value==='Red'){
        taskLi.style.color = 'Red'
      } else if(e.target.value === 'Green'){
        taskLi.style.color = 'Green'
      } else if(e.target.value === 'Yellow'){
        taskLi.style.color = 'goldenrod'
      }
    })


    taskLi.textContent = newTask

    // sets default color
    taskLi.style.color = dropDownMenu.value

    //creates delete button
    deleteButton.textContent = 'Delete Above Task'
    
    deleteButton.addEventListener('click', (e)=>{
      deleteButton.remove()
      taskLi.remove()
      dropDownMenu.remove()
    })
    
    taskUl.append(taskLi, deleteButton, dropDownMenu)
    
  })

    // sorting algorithmsß
    // create a button 
    // when button is pressed, the list is sorted by the color

})



// As a challenge, implement a sorting functionality that displays
//  the tasks ascending or descending order based on priority

// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks


;
