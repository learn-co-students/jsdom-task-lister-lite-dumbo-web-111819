const taskButton = document.querySelector("#create-task-form")
taskButton.addEventListener("submit", handleTaskFormSubmit)

function handleTaskFormSubmit(event){
    event.preventDefault()
    // debugger  
    // console.log('sup')
    let taskWord = event.target.querySelector("#new-task-description").value
    let tasks = document.querySelector("#tasks")
    console.log(tasks)
    const newLi= document.createElement("li")
    newLi.innerText = taskWord
    tasks.append(newLi)
}
// call or invoke()
// function handleEmojiFormSubmit(event){
//     event.preventDefault()
//     const newEmoji = event.target["emoji"].value