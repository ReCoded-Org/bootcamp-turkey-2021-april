/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  let outputStory = [];
  
  let storySplit = rawStory.split(' ');
  for (let i=0;i < storySplit.length;i++){
    let storyObject = {};
    
    if (storySplit[i].includes ('[a]')) {
      storyObject.word = storySplit[i].split('[a]')[0];
      storyObject.pos = 'adjective';
      
}
    else if (storySplit[i].includes ('[v]')) {
      storyObject.word = storySplit[i].split('[v]')[0];
      storyObject.pos = 'verb';
}
    else if (storySplit[i].includes ('[n]')) {
      storyObject.word = storySplit[i].split('[n]')[0];
      storyObject.pos = 'noun';
}   else if (storySplit[i].includes ("."))  {
      storyObject.word = ".";
}   else if (storySplit[i].includes ("!"))  {
      storyObject.word = "!";
}
    else  {
      storyObject.word = storySplit[i];
}

outputStory.push(storyObject);    
   
}

return outputStory;
 
}



/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
const previewDiv = document.getElementsByClassName('madLibsPreview')[0];
const editDiv = document.getElementsByClassName('madLibsEdit')[0];
for(i=0; i<processedStory.length;i++){
  if(processedStory[i].pos){
  const input= document.createElement('input');
  input.maxLength = "20";
  input.setAttribute("class", "democlass");
  const span = document.createElement('span');
 
  input.placeholder= processedStory[i].pos;
  span.innerText= "(" + processedStory[i].pos +")";
  span.style.color = "#0000CD";
  previewDiv.appendChild(span);
  editDiv.appendChild(input);
  input.onkeyup = function(e){
  span.innerText= input.value;
  }
  const inputs = document.getElementsByClassName('democlass');                    // All buttons.
  for(let i = 0; i < inputs.length; i++){                                       
    inputs[i].addEventListener('keydown', e => {
      if (i != (inputs.length - 1) && e.code === 'Enter') inputs[i+1].focus();
      //inputs.style.backgroundColor = "black";
    });
  }

  
  }
  else {

  const span = document.createElement('span');
  const spantwo = document.createElement('span');
  span.innerText= processedStory[i].word;
  spantwo.innerText= processedStory[i].word;
  previewDiv.appendChild(span);
  editDiv.appendChild(spantwo);
  }
const space = document.createElement('span');
space.innerText= " ";
const space2 = document.createElement('span');
space2.innerText= " ";
  previewDiv.appendChild(space);
  editDiv.appendChild(space2);
}
  console.log(processedStory);
});


// function validatefilledIn() {
//     //let arr = document.getElementsByName('input');
//     for(let i=0; i<inputs.length;i++){
//         if(isNaN(inputs[i].value) || inputs[i].value == "") {
//           (inputs[i]).val('').css( "border-color", "red" );
//         }
//     }
// } 

let footer = document.createElement("footer");
  footer.setAttribute("id", "myFooter");
  document.body.appendChild(footer);
  let y = document.createElement("p");
  y.setAttribute("class", "parag");
  let t = document.createTextNode("MadLibz created by Mustafa&Yesim");
  y.appendChild(t);
  document.getElementById("myFooter").appendChild(y);

