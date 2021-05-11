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

// Challange 1:
let header = document.getElementsByTagName("h2")
header[0].style.textAlign = "center";

 
// Challange 2:
let display = document.querySelector('#count');

function increaseCounter() {
  let cmp = parseInt(document.querySelector('span').innerHTML);
  let input = parseInt(document.querySelector("#userInput").value);
  if (input){
    cmp = cmp + input;  
  } else {
   cmp++;
  }
    display.innerHTML = cmp;
} 

function decreaseCounter() {
  let cmp = parseInt(document.querySelector('span').innerHTML);
  let input = parseInt(document.querySelector("#userInput").value);
  if (input){
    cmp = cmp - input;
        
  } else {
   cmp--;
  }
    display.innerHTML = cmp;
} 


//Challange 3:
function showListOfElements(){
  let list =  document.getElementById('myNameList');
  const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
  for (i = 0; i < TEAM_MEMBERS.length; ++i) {
    let listItem = document.createElement('li');
    listItem.innerHTML = TEAM_MEMBERS[i].toString();
    list.appendChild(listItem);   
    }
  document.getElementById("myButton").disabled = true;
}