/*

 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
 "Core Interfaces in the DOM"
 
 The following is a brief list of common APIs in web and XML page scripting using the DOM:

document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
document.querySelector(selector)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
window.scrollTo()
 */


//challenge 1//
let x = document.getElementById("myHeader");
console.log(x);
function headerProperty() {
  x.style.color = "red";
  x.style.textAlign = 'center';
  
}

headerProperty();
//challenge 1 end//


//challenge 2//
let minusButton = document.querySelector('.counter-minus');
let plusButton = document.querySelector('.counter-plus');
let span = document.querySelector('.counter-display');

function increaseCounter() {
  console.log('hello');
  let spanValue = parseInt(document.querySelector('span').innerHTML);
  let inputValue = parseInt(document.getElementById('numberInput').value);

if(inputValue) {
   
   spanValue = spanValue + inputValue;
 }
 else {
  spanValue++;
 } 
 document.querySelector('span').innerHTML = spanValue;

}

function decreaseCounter() {
  let spanValue = parseInt(document.querySelector('span').innerHTML);
  let inputValue = parseInt(document.getElementById('numberInput').value);
  console.log("bye");
  if(inputValue) {
   
   spanValue = spanValue - inputValue;
 }
 else {
  spanValue--; 
 }
document.querySelector('span').innerHTML = spanValue;
}

// Challange 2 Ends


//challenge 3//


function showListOfElements() {
const ul = document.getElementById("list"); 
const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
tLen = TEAM_MEMBERS.length;
for (i = 0; i < tLen; i++) {
let li = document.createElement('li'); 
li.innerHTML= TEAM_MEMBERS[i].toString();
ul.appendChild(li);
}
document.querySelector('div.challengeThree button').removeAttribute("onclick");
}

