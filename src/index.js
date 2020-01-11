// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

//DOM Elements
const form = document.querySelector("#create-task-form");
const ul = document.querySelector("#tasks")
// Event Handlers
// this function will be executed when an event occers such as
// the submit button
function handleFormSubmit(event) {
  event.preventDefault()

}


//addEventListener
//when the event occurs first webpage will listen to interval

form.addEventListener("submit", handleFormSubmit)
