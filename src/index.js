// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

const appendUl = document.querySelector("#list")
const formID = document.querySelector("#create-task-form")
formID.addEventListener("submit", (e) => {
  e.preventDefault()
  const taskInput = document.querySelector("#new-task-description")
  slapItOnTheDom(taskInput)
})

let slapItOnTheDom = (taskInput) => {
  const newLi = document.createElement("li")
  const button = document.createElement("button")
  button.innerText = "x"
  button.addEventListener("click", (e) => {
    newLi.remove()
  })
  newLi.innerText = taskInput.value
  newLi.append(button)
  appendUl.append(newLi)
}

