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


// parseStory
function parseStory(rawStory) {
 	let story = [];
	let noun = /n(?=])/;
	let verb = /v(?=])/;
	let adjective = /a(?=])/;
  let splitStory = rawStory.split(" ");

	for (i = 0 ; i < splitStory.length; i++) {
    let wordArr = splitStory[i];
    let dots = wordArr[wordArr.length-1]
    if (dots === ".") {
      wordArr = wordArr.slice(0, wordArr.length-1)
    }
    if (noun.test(wordArr)) {
    let finalStory = wordArr.replace('[n]','')
     	story.push({word: finalStory, pos: 'noun'})
    } else if (verb.test(wordArr)) {
    let finalStory = wordArr.replace ('[v]', '')
      story.push({word: finalStory, pos: 'verb'})
    } else if (adjective.test(wordArr)){
    let finalStory = wordArr.replace ('[a]', '')
    	story.push({word: finalStory, pos: 'adjective'})
    } else {
      story.push({word: wordArr})  
    }
    if (dots === ".") {
      story.push({word: dots})
    } 
  }
  return story; 
}


getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);

    // Print the editStory and previewStory
    let editStory = document.querySelector('.madLibsEdit');
    let previewStory = document.querySelector('.madLibsPreview');

    for (let wordObj of processedStory) {
      if (!wordObj.pos) {
        let editStoryText = document.createElement('span');
        let previewStoryText = document.createElement('span');
        editStoryText.innerText = `${wordObj.word} `;
        previewStoryText.innerText = `${wordObj.word} `;
        editStory.appendChild(editStoryText);
        previewStory.appendChild(previewStoryText);
        } 
        else {
        let input = document.createElement("input");
        input.setAttribute('placeholder', wordObj.pos);
        input.setAttribute('maxlength', 20);
    
        let review = document.createElement('span');
        review.innerText = `(${wordObj.pos}) `;
        editStory.appendChild(input);
        previewStory.appendChild(review);
        review.style.color='#ed4924';

        input.oninput = function (){
          if (input.value) {
            review.innerText = input.value + ' ';
          }
        }
      }
    }

    // Event listener for Enter
    let inputs = document.querySelectorAll("input");
    for (i = 0; i < inputs.length; i++) {
      const nextELement = inputs[i + 1];
      const lastELement = inputs[inputs.length - 1];
      inputs[i].addEventListener("keypress", (e) => {
        // if (e.keyCode === 13 && nextELement) {
        if (e.code === 'Enter' && nextELement) {
          nextELement.focus();
        } else {
          inputs[0].focus();
        }
      });
    }
});

