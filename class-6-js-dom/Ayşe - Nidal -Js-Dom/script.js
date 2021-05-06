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

// Challenge 1
let header = document.querySelector(".DomAraay").innerHTML;
console.log(header)
let headerTwo = document.querySelector(".DomAraay").style.textAlign = "center";

// Challenge 2
let counterValue = document.querySelector(".span");
let numberValue = parseInt(counterValue.innerHTML)

let inputValue = document.getElementsByClassName("input")[0];
function increaseCounter() {
  if(inputValue.value == "") {
    counterValue.innerHTML = numberValue += 1;
  } else {
    counterValue.innerHTML = parseInt(inputValue.value) + numberValue;
    // console.log(inputValue.value);
  }
}

//Challenge 3
function showListOfElements(){
const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];

const namesList = document.querySelector(".ul");

  if(namesList.innerText == ""){
    for(let i = 0; i < TEAM_MEMBERS.length; i++){
    const li = document.createElement("li");
    li.innerHTML = TEAM_MEMBERS[i].toString();
    namesList.appendChild(li)
    }
  }
}