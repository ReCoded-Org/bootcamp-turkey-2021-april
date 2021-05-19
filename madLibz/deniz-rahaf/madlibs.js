/**
 * Partners Deniz and Rahaf
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
  const obj = {
    n: "noun",
    v: "verb",
    a: "adjective",
  };
  // Split the string into an array using spaces, get comma and dot as words as well
  const wordArray = rawStory.split(/(?=[\.,])|[ ]/g);

  //Create an array of word objects using the output of string split
  const arrayOfWords = [];

  for (element of wordArray) {
    // Check if any words contain [anv] inside square brackets
    const posTest = /\[[anv]\]/;
    if (posTest.test(element)) {
      //check if the element has a pos key
      //what type of word is it, extract the letter out of the square brackets
      const posValue = element.match(posTest)[0].charAt(1);
      //push the word into the container with the pos key and value
      arrayOfWords.push({ word: element.replace(`${element.match(posTest)[0]}`, ""), pos: obj[posValue] });
    } else {
      //Push word into container
      arrayOfWords.push({ word: element });
    }
  }
  return arrayOfWords; // This line is currently working :)
}
/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then(processedStory => {
    madLibsEditHtml(processedStory);
    //console.log(processedStory);
  });
// Create inner HTML code according to output of parseStory
function madLibsEditHtml(story) {
  const madLibsEdit = document.querySelector(".madLibsEdit");
  const madLibsPreview = document.querySelector(".madLibsPreview");
  let id = 1;
  story.forEach(element => {
    //If element is a regular word, just create a span and display it on madLibsPreview
    if (!element.pos) {
      const span = document.createElement("span");
      span.innerText = `${element.word} `;
      const spanPerview = document.createElement("span");
      spanPerview.innerText = `${element.word} `;
      madLibsEdit.appendChild(span);
      madLibsPreview.appendChild(spanPerview);
    //If element is a special word (noun,adjective or verb) then create an input and a span for it and display them in madLibsEdit and madLibsPreview respectively
    } else {
      const span = document.createElement("span");
      span.innerText = `(${element.pos}) `;
      span.style.fontWeight = 'bold';
      const input = document.createElement("input");
      input.placeholder = element.pos;
      input.autocomplete="off"
      //Set id's to every input element so we can switch between them using focus on their id's
      input.id = `${id}`;
      id++;      
      input.addEventListener("keyup", function (e) {
        //if pressed key is Enter, then focus on the next input
        if (e.keyCode == 13) {
          e.preventDefault();
          const count = parseInt(e.target.id) + 1;
          const nextInput = document.getElementById(`${count}`);
          if (nextInput) nextInput.focus();
        //Update preview box with the input content
        } else {
          span.innerText = `${e.target.value} `;
        }
      });

      madLibsEdit.appendChild(input);
      madLibsPreview.appendChild(span);
    }
  });
}
