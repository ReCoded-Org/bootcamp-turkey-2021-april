//Partners Deniz and Nidal
const button = document.getElementById("lib-button");

button.addEventListener('click', function(){
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  document.querySelector("#story").innerText = `${person} ${adjective} ${noun}` ;
})