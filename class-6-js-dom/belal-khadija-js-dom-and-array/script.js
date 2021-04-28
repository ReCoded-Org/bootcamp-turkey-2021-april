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

//  Partners: Khadija Hawa && Belal Awad

// Challange 1:
const header2 = document.getElementById("header");
console.log(header2.textContent);
header2.style.textAlign = "center";

// Challang 2:
const span = document.getElementById("spanCounter");
const input = document.getElementById("inputId");
const incButton = document.getElementById('increaseButton');

function increaseCounter() {
  if (input.value.length == 0){
    span.innerHTML = parseInt(span.innerHTML) + 1;
  }
  else {
    span.innerHTML = parseInt(span.innerHTML) + parseInt(input.value);
  }
}

// Bonus:
const decButton = document.getElementById('decreaseButton');

function decreaseCounter() {
  if (input.value.length == 0){
    span.innerHTML = parseInt(span.innerHTML) - 1;
  }
  else {
    span.innerHTML = parseInt(span.innerHTML) - parseInt(input.value);
  }
}

// Challange 3:
const ul = document.getElementById("bonus2");
let generateCount = 0; 
function showListOfElements(){
  if (generateCount == 0){
    const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
    for(let i = 0; i < TEAM_MEMBERS.length; i++){
      let li = document.createElement('li');
      li.innerHTML = TEAM_MEMBERS[i].toString();
      ul.appendChild(li);
    }

    generateCount++;
  }
}

