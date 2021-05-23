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
  // Your code here.
  // console.log(rawStory)
  // splitting punctuation of dots and commas
  const dot = /[.]/g;
  const comma = /[,] /g;
  rawStory = rawStory.replace(dot, " .");
  rawStory = rawStory.replace(comma, " , ");
  // console.log(rawStory)
  // splitting the story.txt
  const splitArray = rawStory.split(' ');
  // console.log(splitArray)

  const arrayOfObjects = []
  // console.log(newObject)

   // looping over the story.txt array
   for(let i = 0; i < splitArray.length; i++){
    const newObject = {}
    // checking if the word has [a]
    if (splitArray[i].includes ('[a]')) {
      // splitting the word from [a] and getting the word value of first index
      newObject.word = splitArray[i].split('[a]')[0];
      newObject.pos = 'adjective';
    }
    // checking if the word has [v]
    else if (splitArray[i].includes ('[v]')) {
       // splitting the word from [v] and getting the word value of first index
      newObject.word = splitArray[i].split('[v]')[0];
      newObject.pos = 'verb';
    }
    // checking if the word has [n]
    else if (splitArray[i].includes ('[n]')) {
       // splitting the word from [n] and getting the word value of first index
      newObject.word = splitArray[i].split('[n]')[0];
      newObject.pos = 'noun';
    }
    else {
      // else the word itself
      newObject.word = splitArray[i];
    }
    // pushing our object into our empty array
    arrayOfObjects.push(newObject)
   }
  // console.log(arrayOfObjects)
  // returns the array
  return arrayOfObjects; // This line is currently wrong :)
   
   
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */

/* PESUDOCODE
  1.display the story in the first div
    - iterate the story array
    - check if the story has pos 
     * if it has, create input
     * else the word itself
  
  2.display the story in the second div
    - iterate the story array
    - check if the story has pos
     * if it has, create span for blanks 
     * else the word itself
    - we need an event for live update here

  3.hotKeys
    - when the user presses enter the cursor will move to the next input. we need an event for this
*/
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
    madLibsEdit(processedStory);
    madLibsPreview(processedStory);
    hotKeys();

  // for displaying the story in the first div madLibsEdit, we crate a function
  function madLibsEdit(text) { 
    // console.log(text) 
    const madLibsEdit = document.querySelector('.madLibsEdit');
    let inP = document.createElement("p")
    madLibsEdit.appendChild(inP)
    let inputIdNumber = 0

      // text is our story here. so we are looping the story.txt array. it equals to our arrayOfObjects
      text.map(story => {
        // story equals to newObject. we are checking if we have pos in the object
        if(story.pos){
          // console.log(story) 
          let input = document.createElement("input")
            input.setAttribute("placeholder", `${story.pos}`)
            input.setAttribute("type", "text")
            input.setAttribute("maxlength", "20")
            input.setAttribute("class", "inputClass")
            input.id = `inputId${inputIdNumber++}`
            input.style.marginRight = "5px"
            input.style.marginBottom = "5px"
            inP.appendChild(input) 
        } else {
            inP.innerHTML += ` ${story.word} `
        }
      })
  }
    // for displaying the story in the second div madLibsPreview, we crate a function
    function madLibsPreview(text) {
      // we are selecting every input in the story
      const allInputs = document.querySelectorAll("input");
      const madLibsPreview = document.querySelector('.madLibsPreview');
      let outPre = document.createElement("p")
      madLibsPreview.appendChild(outPre)
      let spanIdNumber = 0

      // text is our story here. so we are looping the story.txt array. it equals to our arrayOfObjects
      text.map(story => {
          if(story.pos){
            // story equals to newObject. we are checking if we have pos in the object. we are replacing inputs with blansk if we have a pos. else the word itself.
            const span = document.createElement("span");
              span.id = `spanId${spanIdNumber++}`
              span.setAttribute("class", "spanClass")
              span.style.marginRight = "5px"
              // span.innerText = `(${story.pos}) `;
              span.innerText = "________";
              outPre.appendChild(span); 
            } else {
                outPre.innerHTML += ` ${story.word} `
            }
        })

      // we are looping our inputs in the story
      for (let i = 0; i < allInputs.length ; i++){
        const input = document.querySelector(`#inputId${i}`)
        const span = document.querySelector(`#spanId${i}`)
        // we are adding a keyup event son that we can get the value of the input whenever the input changes
        input.addEventListener("input", function(e) {
          if(input.value) {
            span.innerHTML = input.value
          } else {
            span.innerHTML = "______"
            }
          })
        }
    }
});

// if the user presses "enter", the cursor will move to the next input
function hotKeys() {
  // we are selecting every input in the story
  const allInputs = document.querySelectorAll("input");

  // we are looping our inputs in the story
  for (let i = 0; i < allInputs.length; i++) {
    const input = document.querySelector(`#inputId${i}`);

    input.addEventListener("keydown", function (e) {
      // if the user presses "enter", the cursor will move to the next input
      if (e.key === "Enter") {
        console.log(e.key)
        document.querySelector(`#inputId${i+1}`).focus()
      }
    })
  }
}






  

