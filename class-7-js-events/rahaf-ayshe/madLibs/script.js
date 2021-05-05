document.getElementById("lib-button").addEventListener("click", makeMadLib);


function makeMadLib (){
  let story = document.getElementById("story");
  let noun = document.getElementById("noun").value;
  let adj = document.getElementById("adjective").value;
  let name = document.getElementById("person").value;
  let node = document.createElement("p");
  let text = document.createTextNode(name + " really like " + adj + " " + noun);
  node.appendChild(text)
  story.appendChild(node)
 /* story.innerHTML = name + " really likes " + adj + " " + noun;*/

}

