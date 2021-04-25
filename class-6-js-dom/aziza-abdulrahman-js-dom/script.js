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

/* Chanllenge 1 */
const h2 = document.querySelector(".challengeOne");
h2.style.textAlign = "center";
console.log(h2.innerHTML);


/* Chanllenge 2 */
function increaseCounter() {
let add =document.querySelector("#inc");
let valOfAdd= add.value;
let spanCount = document.querySelector("#spanCount");
//console.log(spanCount);
let valOfAddInt= parseInt(valOfAdd);
 if(valOfAdd == 0){
   valOfAddInt++;
   }
// console.log(valOfAdd + spanCount);
// console.log(valOfAdd);
  let allAddition = parseInt(spanCount.innerHTML)+ valOfAddInt;
  console.log(allAddition);
  spanCount.innerHTML= allAddition;
  console.log('hello');
  }


/* Chanllenge 3 */
function showListOfElements(){
const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
let ul = document.getElementById("list");
for(let i = 0; i < TEAM_MEMBERS.length ; i++){
console.log(TEAM_MEMBERS[i]);
let li = document.createElement("li");
li.appendChild(document.createTextNode(TEAM_MEMBERS[i]));
ul.appendChild(li);
} }
