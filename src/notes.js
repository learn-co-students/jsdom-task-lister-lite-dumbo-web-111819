// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// // Create a div
// var newDiv =  document.createElement('div');

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENT LISTENER


var button = document.getElementById('button')
var box = document.getElementById('box')
// .addEventListener("click",buttonClick);


// function buttonClick(e){
//     // console.log('Button Click');

//     // document.getElementById('header-title').textContent = 'Soner';
//     // document.querySelector('#main').style.backgroundColor = 'f4f4f4';
//     // console.log(e);

//     console.log(e.target);
//     console.log(e.target.id)
//     console.log(e.target.className)
//     console.log(e.target.classList);
//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>'+e.target.id+'</h3>';

// }
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// // box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');



//  itemInput.addEventListener('keydown', runEvent);
// select.addEventListener('change',runEvent);
form.addEventListener("submit",runEvent);



function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE'+e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML ='<h3>'+e.target.value+'</h3>'
    // document.body.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+",40)";
}






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