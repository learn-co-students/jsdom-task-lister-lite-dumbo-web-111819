// // EVENT LISTENER


// What is the event listener?

// what are the steps for creating interaction with DOM?
// figure out which element is triggering the event 
// Decide what type of event we're handling 
// write a callback function that will run when the event happens.


// DOM

// on clicking any p tag, change the font to comic sans 
// this is the font family to use:"Coming Sans MS", cursive, sans-serif

// grab all The p tags 

const allPs = document.querySelectorAll("p")
// iterate thru them
// (kitten)        kitten
allPs.forEach(function (pTag){
  // add an event listener to each one 
  pTag.addEventListener ("click",handlePtagClick)

})

// }) CALLBACK:Like we call the function back like  we do in ruby 
// what ever blok is written what ever inside to array what ever functionality that ever collection  you want to add. 
// SYnatx is similiar to each method like ruby to loop argument in the array 
//   // array. each do |kitten|
//  puts kitten.name
//  end 

  


function handlePtagClick(event){
  event.target.style.fonFamily = '"Coming Sans MS", cursive, sans-serif'
  event.target.style.color = 'rebeccapurple'
}
// in the event listener, do tha thang 
//  this is like our controller action thios is what ever code we are writing here 
//  JS will run for us for reuquest for our route in Ruby in rails 
// ---------------------------------------------------------------------------------
  
// Another addEventListener example
// what are the steps for creating interaction with DOM?
// figure out which element is triggering the event 
// Decide what type of event we're handling 
// write a callback function that will run when the event happens.DOM

// DEFER
// Dont forget to write defer on html Script tag before you start ?
// or write on the top of your code. Be sure we have all right to access to all of our element.
//  If you do defer you dont need do write DOM content LOADED
document.addEventListener("DOMContentLoaded", function(){
// / SUMBITTING FORM IN JS : anytime you dealing with forms  you should be handling  submit event on the whole form

// DOM ELEMENTS
const pizzaButton = document.getElementById("pizza")
const emojiList = document.querySelector("#blobs")
// a)---------------------------------------------------------------------------------
const emojiForm = document.querySelector("#emoji-form")
// a)
// always #when we get id from html

// EVENT HANDLERS
function handlePizzaClick() {
  // <li></li>

  
  // 1.document.createElement 
  const newLi = document.createElement("li")
//   to add <li> create and <li> Element we are creating a listItem
// for this li we need to set some property that will set text content 
   newLi.textContent = "🍕" 
  // last thing we have add it to emoji list 
  emojiList.append(newLi)

  // 2.emeojiList.inner.HTML
  // 3.insertAdjacentHTML

console.log("you clicked yay")
  // callback function this is what function needs to do when we click on botton 
}
// a)-------------------------------------------------------------------------------
function handleEmojiFormSubmit(event){
  event.preventDefault()
  const newEmoji = event.target["emoji"].value
                     // grabbing input field of  value
  // if we go in console console.dir(event.target) 
  // we can see all the attributes of form
  // to get acces to inputs is particulary is since having  two inputs(submit field , text field ) as a part of form is which is important part of forms works)
  

  const newLi = document.createElement("li")
  emojiList.append(newLi)

  // if you are handle submit form *ALWAYS* have prevent default 
  console.log ("i submit")
  
}
// a)     when somebody submit this form thats 
// my clicking the button or hitting enter on the 
// form  field will be capturing that event we can handle emoji form submit

// EVENT LISTENERS
emojiList.addEventListener("submit",handleEmojiFormSubmit)
// a)   when somebody submit this form thats 
// my clicking the button or hitting enter on the 
// form  field will be capturing that event we can handle emoji form submit
// Event Listeners
// ------------------------------------------------------------------------------------
pizzaButton.addEventListener("click",handlePizzaClick)
// when somebody click this button do something 
// something what we need to do something is going to handle by callback function on bottom of event.addEventListener
})