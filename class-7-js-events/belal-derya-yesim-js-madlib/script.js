// Partners: Belal Awad && Derya && Yeşim Nur Akar

const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const div = document.getElementById("story");
const button = document.getElementById("lib-button");


button.addEventListener('click', function (e){
  let paragraph = document.createElement('p');
  paragraph.innerText = person.value + " really likes " + adjective.value + " " + noun.value + ".";
  div.append(paragraph);
});
