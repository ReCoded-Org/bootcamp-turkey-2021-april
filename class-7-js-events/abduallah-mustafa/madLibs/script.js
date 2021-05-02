let nounUsers = document.getElementById("noun");
let adj = document.getElementById('adjective');
let person = document.getElementById('person');


let button = document.getElementById("lib-button");
let parag = document.getElementById('parag')


 
button.onclick = function() {
  parag.innerText = nounUsers.value +"  " + adj.value +"  " + person.value ;
  
}


