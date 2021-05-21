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

// Using this one we are removing spaces                    /\s+/g
// Using this one we are removing anything with []          /\[[a|v|n]\]/g

function parseStory(rawStory) {
  // Your code here.

  const typeObject = {
    '[a]': "Adjective",
    '[v]': 'Verb',
    '[n]': 'Noun'
  }

  const punctuation = /[,.“”"':!?]/g;                                 // Using this to check for punctuation marks.
  const word = /\w+/g;                                               // Using this to get all the word
  const type = /\[[a|v|n]\]/g;                                       // Using this to check for [n], [v], or [a]
  
  const outputArr = [];                                              // Declaring the array of objects. 

  let wordsArr = rawStory.split(/\s+/g);                             // Split the text

  for (let i = 0; i < wordsArr.length; i++) {                        // Iterating throught the array of Strings.
    const object = {};
    const puncObj = {};

    object.word = wordsArr[i].match(word)[0];                        // Assigning only the word to object.word

    if(punctuation.test(wordsArr[i])) {                              // Checking if the word has any punctuation
      puncObj.word = wordsArr[i].match(punctuation)[0];
      console.log(puncObj);
    }

    if(type.test(wordsArr[i])){                                      // Checking if the word has any type
      object.pos = typeObject[wordsArr[i].match(type)[0]]
    }
    
    outputArr.push(object);                                          // Pushing the object
    if (puncObj.hasOwnProperty('word')) outputArr.push(puncObj);     // if puncObj has a word key, then push it

  }
  console.log(outputArr);
  return outputArr;                                                 // Returning the array of objects.
}

/**
  * All your other JavaScript code goes here, inside the function. Don't worry about
  * the `then` and `async` syntax for now.
  * 
  * You'll want to use the results of parseStory() to display the story on the page.
*/

getRawStory()
.then(parseStory)
.then((processedStory) => {
 
  const madLibsEdit = document.getElementsByClassName('madLibsEdit')[0];        // Selecting the madLibsEdit div.
  const madLibsPreview = document.getElementsByClassName('madLibsPreview')[0];  // Selecting the madLibsPreview div.

  for (let i = 0; i < processedStory.length; i++) {                             // Iterating through the list of objects.
    const spanEdit = document.createElement('span');                            // Creating a span element for the items we want to add.
    const spanPreview = document.createElement('span');                         // Creating a span element for the text we get from inputs.

    if ('pos' in processedStory[i]) {                                           // Check if it has a pos, if yes create an input element.

      const input = document.createElement('input');                            // Creating an input element.
      input.setAttribute('type', 'text');                                       // Setting the inputs type to text.
      input.setAttribute('class', 'replace');                                   // Adding a class attribute of replace.
      input.style.textAlign = 'center';                                         // Adding a style to center text.

      spanEdit.innerText += " ";                                                // Adding a space before the input box.
      spanPreview.innerText += " ";                                             // Adding a space before the input box.
      spanPreview.innerText += `${processedStory[i].word} [${processedStory[i].pos}]`;
      spanPreview.style.color = 'red';
      spanPreview.style.fontWeight = 'bold';
      spanPreview.style.fontStyle = 'italic';
      
      input.setAttribute('placeholder', `${processedStory[i].word} [${processedStory[i].pos}]`);      // Adding a placeholder of the word and type.
      
      madLibsEdit.append(spanEdit);                                             // Appending spaces between the input and the next word.
      madLibsEdit.append(input);                                                // Appending the input box to the div.
      madLibsPreview.append(spanPreview);                                       // Appending spaces between the input text and the next word.

      input.oninput = e => {                                                    // An eventListener for printing the text realtime with some styling.
        if(input.value){
          spanPreview.innerText = " " + input.value + " ";
          spanPreview.style.color = 'red';
          spanPreview.style.fontWeight = 'bold';
          spanPreview.style.fontStyle = 'italic';
        }
        else {
          spanPreview.innerText = ` ${processedStory[i].word}[${processedStory[i].pos}]`;
          spanPreview.style.color = 'red';
          spanPreview.style.fontWeight = 'bold';
          spanPreview.style.fontStyle = 'italic';
        }
      };
    }

    else {                                                                      // If the object.word is (. , “ ” !) then don't add a space and add the word directly.
      if (processedStory[i].word === '.' || processedStory[i].word === ',' || processedStory[i].word === '!' || processedStory[i].word === '”') {
        spanEdit.innerText = processedStory[i].word;
        spanPreview.innerText = processedStory[i].word;
        madLibsEdit.append(spanEdit);
        madLibsPreview.append(spanPreview);
      }
      else if ((i != 0) && (processedStory[i].word != '')) {                    // If the object.word is just a word then add a space and add the word directly.
        spanEdit.innerText = " " + processedStory[i].word;
        spanPreview.innerText = " " + processedStory[i].word;
        madLibsEdit.append(spanEdit);
        madLibsPreview.append(spanPreview);
      }
      else {                                                                   // If the object.word is at the first position then add the word directly.
        spanEdit.innerText = processedStory[i].word + " ";
        spanPreview.innerText = processedStory[i].word + " ";
        madLibsEdit.append(spanEdit);
        madLibsPreview.append(spanPreview);
      }
    } 
  }

  const input = document.getElementsByClassName('replace');                    // Calling out all the buttons we have.
  for(let i = 0; i < input.length; i++){                                       // Adding an eventListener for when Enter is pressed.
    input[i].addEventListener('keypress', (e) => {
      if (i != (input.length - 1)) {
        if(e.key === 'Enter')input[i+1].focus();
      }
    });
  } 
});