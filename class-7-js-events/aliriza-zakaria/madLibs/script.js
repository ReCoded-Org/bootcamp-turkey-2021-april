
const button = document.querySelector('#lib-button')

button.addEventListener('click', function(){
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let name = document.getElementById("person").value;
  makeMadLib(noun, adjective, name);
})

function makeMadLib(noun, adjective, name) {
  const story = "This " + adjective + " " + noun + " is " + name + "'s " + noun + "." + " That " + noun + " is " + adjective + ".";
  console.log(story)
}
