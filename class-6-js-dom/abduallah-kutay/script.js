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


// challenge 1 -------------------------------------------------------


const content = document.getElementById('challengeOne');
console.log(content.innerText);
content.style.textAlign ="center";




//challenge 2 ---------------------------------------------------------------


  let input = document.getElementById("input");
  let increase = document.getElementById("buttonInc");
  let decrease = document.getElementById("buttonDec");
  let counter = document.getElementById("count");
  let count = counter.innerHTML;
  

  increase.addEventListener("click", function() {
    if(input.value === ""){
      counter.innerHTML ++ ;
    }
    else {
      let total = parseInt(counter.innerHTML)+ parseInt(input.value);
      counter.innerHTML = total;
     }
  });

  decrease.addEventListener("click", function() {
      if(input.value === ""){
        counter.innerHTML -- ;
      }
      else {
        let total = parseInt(counter.innerHTML) - parseInt(input.value);
        counter.innerHTML = total;
      }
    });



// challenge 3 ------------------------------------------------------------------



  
function showListOfElements(){
  const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];

  let unorderedLi = document.getElementById('list');
  //unorderedLi.innerHTML = " ";

  if (unorderedLi.innerHTML !== " ") {
    unorderedLi.innerHTML = " ";
  }
  else {
    for(let i = 0; i< TEAM_MEMBERS.length; i++){
      let li = document.createElement('li');
      li.innerHTML = TEAM_MEMBERS[i] ;
      unorderedLi.appendChild(li) ;
    }
  }
}


