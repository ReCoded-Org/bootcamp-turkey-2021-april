const elem = document.querySelector('h2');
const heading = elem.innerHTML;
console.log(heading);
document.getElementById("center").style.textAlign = "center";

const counter = document.getElementById("counter");
const value = document.getElementById("inputValue");

function increaseCounter() {
  let number = parseInt(counter.innerHTML);
  if (inputValue.value == "") {
    counter.innerHTML = number + 1;
  }else {
  counter.innerHTML = parseInt(document.getElementById("inputValue").value) + parseInt(counter.innerHTML);
}
}

function decreaseCounter() {
  let number = parseInt(counter.innerHTML);
  if (inputValue.value == "") {
    counter.innerHTML = number - 1;
  }else {
  counter.innerHTML = parseInt(counter.innerHTML) - parseInt(document.getElementById("inputValue").value);
}
}


let list = document.getElementById("teamMembers")
let ul = document.querySelector("ul");
function showListOfElements(){
  const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];
    for (let i = 0; i < TEAM_MEMBERS.length; i++){
    let li = document.createElement("li");
    li.innerHTML = TEAM_MEMBERS[i];
    list.appendChild(li);
  }
  document.getElementById('listButton').removeAttribute("onclick");
}
