/* Challenge */

let insideDiv = document.getElementById("story")
function displayStory(){
  
  let noun = document.getElementById("noun").value 
  let adjective = document.getElementById("adjective").value 
  let someonesName = document.getElementById("person").value 
  let sentence = `${someonesName} ${adjective} like ${noun}`
  insideDiv = sentence
  console.log(insideDiv) //just to show in console 
  return document.getElementById("story").innerHTML = insideDiv;
}
 document.getElementById("lib-button").addEventListener("click", displayStory);
