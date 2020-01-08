document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formId = document.querySelector('#create-task-form')
  const emptyList = document.querySelector('ul#tasks')
  const allLi = emptyList.querySelectorAll('li')

  function renderInput(input){
    const newLi = document.createElement('li')

    newLi.textContent = input
    emptyList.append(newLi)
  }
  
  function handleFormSubmit(event){
    event.preventDefault()
    const newInput = event.target["new-task-description"].value

    renderInput(newInput)

    event.target.reset()
  }

  // allLi.forEach(li){

  // }

  formId.addEventListener("submit", handleFormSubmit)


});
