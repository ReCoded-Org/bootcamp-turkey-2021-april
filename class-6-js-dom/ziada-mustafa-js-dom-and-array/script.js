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


// let challenge1 = document.getElementsByTagName('h2');
// challenge1.setAttribute("class", "apple");
// apple.style.text-align= center;


// challenge1
let header = document.getElementsByTagName('h2')[0];
header.style.textAlign = "center";



// challenge2
let input = document.querySelector("input");
let count = document.querySelector("span");
let button = document.querySelector('button');

function increaseCounter() {
  console.log(count.innerHTML);
  let number = parseInt(count.innerHTML);
  if (input.value === "") {
        count.innerHTML = number + 1;
  }
  else {
      count.innerHTML = number + parseInt(input.value);}
    };

function decreaseCounter() {
  console.log(count.innerHTML);
  let number = parseInt(count.innerHTML);
  if (input.value === "") {
        count.innerHTML = number - 1;
  }
  else {
      count.innerHTML = number - parseInt(input.value);}
};




// challenge3
let ul = document.querySelector("ul");
function showListOfElements(){
const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
  for (let j = 0; j < TEAM_MEMBERS.length; j++) {
    let li = document.createElement("li")
    li.innerHTML = TEAM_MEMBERS[j];
    ul.appendChild(li);
    }
  document.querySelector('div.challengeThree button').removeAttribute("onclick");
}
