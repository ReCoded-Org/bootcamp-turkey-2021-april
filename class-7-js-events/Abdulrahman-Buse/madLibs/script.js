


let button = document.querySelector("#lib-button");
console.log(button);
button.addEventListener('click', function makeMadLib (){
  let noun = document.querySelector("#noun").value;
  let adjective = document.querySelector("#adjective").value;
  let person = document.querySelector("#person").value;
  let story = document.querySelector("#story");

  story.innerHTML = person + " likes " + adjective + " " + noun + " .";
});
//