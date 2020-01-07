document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form"); 
  const tasks = document.getElementById("tasks");

  const selectDiv = document.createElement("div");
  selectDiv.textContent = "choose importance"

  const textnode = document.createElement("select");
  textnode.id = "textnode"
  
  let op1 = new Option();
  op1.value = "1";
  op1.text = "super duper";
  textnode.options.add(op1);
  
  
  let op2 = new Option();
  op2.value = "2";
  op2.text = "meh";
  textnode.options.add(op2);
  
  selectDiv.append(textnode)
  form.append(selectDiv);

  function renderNewTodo (todo) {
    const newLi = document.createElement("li");
    newLi.innerText = todo;
    
    const button = document.createElement("button");
    button.addEventListener("click", function(){newLi.remove(); this.remove()})
    button.innerText = "clickme to delete yoooooo"

    tasks.append(newLi);
    tasks.append(button)
  };
  
  function handleTaskFormSubmit(event) {
     //debugger
    event.preventDefault();
    const newTodo = event.target["new-task-description"].value;
    renderNewTodo(newTodo);
    event.target.reset()
  };
  form.addEventListener("submit", handleTaskFormSubmit )
});

