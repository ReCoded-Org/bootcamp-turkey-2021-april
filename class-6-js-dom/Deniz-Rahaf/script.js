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
console.log(document.querySelector('h2').innerHTML);
document.querySelector('div[class="challengeOne"]').setAttribute("align", "center");

//return an error if the input is anything else from an integer
//Check the input to be integer or not while accepting blank input
function numCheck(){
  let input = document.querySelector('input[type="text"]').value;
  let check = parseInt(input);
  if (isNaN(check) && input != ""){
    return false;
  } else {
    return true;
  }
}

//Implements numCheck() to check the input to be an integer or not, then increases the count by 1 if the input is blank, increases counter by input if input is integer.
function increaseCounter() {
let count = parseInt(document.querySelector('span').innerHTML);
let input = parseInt(document.querySelector('input[type="text"]').value);
/*console.log('hello');*/

if (numCheck()){
  if (input){
  count = count + input;}
  else{
  count++;}
}
else{
  alert("Please input a number!");}
document.querySelector('span').innerHTML = count;
}

//Implements numCheck() to check the input to be an integer or not, then decreases the count by 1 if the input is blank, decreases counter by input if input is integer.
function decreaseCounter() {
//console.log('hello');
let count = parseInt(document.querySelector('span').innerHTML);
let input = parseInt(document.querySelector('input[type="text"]').value);
if (numCheck()){
  if (input){
  count = count - input;}
  else{
  count--;}
}
else{
  alert("Please input a number!");}
document.querySelector('span').innerHTML = count;
}


/*
function showListOfElements(){
const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
for (let i = 0; i < TEAM_MEMBERS.length; i++){
  let ulList = document.getElementById('challenge');
  let liList = document.createElement("li");
  liList.appendChild(document.createTextNode(TEAM_MEMBERS[i]));
  ulList.appendChild(liList);
}
}*/

//without using id
//make the function generate the names only once
function showListOfElements(){
const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
let ulList = document.querySelector('div[class="challengeThree"] > ul');
ulList.innerHTML = '';
//write an if condition that checks if there are li inside ul?
/*let liCheck = document.querySelector('div[class="challengeThree"] > ul').hasChildNodes();
if (liCheck){*/
  console.log("if");
  for (let i = 0; i < TEAM_MEMBERS.length; i++){
  let liList = document.createElement("li");
  liList.appendChild(document.createTextNode(TEAM_MEMBERS[i]));
  ulList.appendChild(liList);
}
//}
}
