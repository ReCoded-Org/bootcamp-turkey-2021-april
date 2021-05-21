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
  let splitArr = rawStory.split(" ");
  console.log(splitArr)

  //getting words that are stick to pos "animal[n]". Blanks in other words
  // \w is to match any word character
  // \w+ to select multiple characters of the word before the next character
  // the first \[ is liteerally match the characters that follow
  // 
  // i to make the selction case senstive
  // | operator is for "or" characters
  const wordsAndPos = /\w+\[[a|n|v]]/i
//   //getting words
  const words = /[^\s]+/i;

  const arrayOfWords = [];

//   // create an object for pos to be reflected (replaced) as blank in the second section of the text (output copy)
  const posObj = {
    n: "noun",
    v: "verb",
    a: "adjective",
  }

  for (let i = 0; i < splitArr.length; i++) {
//     //variable that stores dot or comma
    let dotOrComma = splitArr[i][splitArr[i].length - 1];
    // console.log(dotOrComma)
//     //testing if pos exists in elements of array (splitArr in our case). .test() searches for a match
    if (wordsAndPos.test(splitArr[i])) {
//       //searches for a specific string (words and pos in this case). .exec() search for matches and return these matches
      const result = wordsAndPos.exec(splitArr[i]);
      // console.log(result)
//       //cuts off the pos part. the exec() method is returning an array of each wordAndPos element with an index of 0.
      // console.log(result)
      let pos = result[0][result[0].length - 2];
      // console.log (pos)
//       //push pos to an empty array without the part of speech symbole [a] or [n] or [v]
      arrayOfWords.push({
        word: result[0].slice(0, -3),
        //if n, then noun. if v, then verb. if a, then adjective
        pos: posObj[pos],
      });
//       // console.log(arrayOfWords)
//       //checks if there is dot or coma at the end of each element of an array
      if (dotOrComma === "." || dotOrComma === ",") {
        console.log(dotOrComma)
        arrayOfWords.push({
          word: dotOrComma,
        });
        // console.log(arrayOfWords)
      }
    } 
//     //checks if there is word among the elements of an array
    else if (words.test(splitArr[i])) {
      const result1 = words.exec(splitArr[i]);
      console.log("test this, too")
      console.log(result1)
      arrayOfWords.push({
        word: result1[0],
      });
    }
  }
//   //returns an array of words, dot or comma, and pos
//   // console.log(arrayOfWords)
  return arrayOfWords;
}




/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
    for (let word of processedStory) {
      //if word has pos
      if (word.pos) {
        const input = displayInput(word);
        const preview = displayPreview(`(${word.pos})`);
        input.addEventListener("input", (e) => {
          let inputValue = input.value;
          //if input does not have value, display in preview pos.
          if (inputValue === "") {
            preview.innerHTML = `(${word.pos})`;
            // preview.style.fontWeight = null;
          } else {
            //if input has value, display input in preview
            preview.innerHTML = inputValue;
            preview.style.fontWeight = "bold";
          }
          if (inputValue) {
            input.style.backgroundColor = "#deaf00";
            input.style.color = "white";
            input.style.fontFamily ="Comic Sans MS, Comic Sans, cursive";
          } else {
            input.style.backgroundColor = null;
          }
        });
      } else {
        //display value of name key in word object
        displayWord(word.word);
        displayPreview(word.word);
      }
    }
    //function for enter hotkey
    function tab(e) {
      var inputs = document.querySelectorAll("input");
      for (let i = 0; i < inputs.length; i++) {
        const nextELement = inputs[i + 1];
        const lastELement = inputs[inputs.length - 1];
        inputs[i].addEventListener("keypress", (e) => {
          if (e.key === "Enter" && nextELement) {
            e.preventDefault();
            nextELement.focus();
          } else if (e.key === "Enter" && lastELement) {
            inputs[0].focus();
          }
        });
      }
    }
    tab();
    //fucntion for displaying input
    function displayInput(input) {
      let inputBox = document.createElement("input");
      inputBox.setAttribute("type", "text");
      inputBox.placeholder = input.pos;
      inputBox.setAttribute("maxlength", "20");
      document.querySelector(".madLibsEdit").appendChild(inputBox);
      return inputBox;
    }
    //function for displaying words in madLibsEdit
    function displayWord(word) {
      let previewWord = document.createElement("p");
      previewWord.innerText = word;
      document.querySelector(".madLibsEdit").appendChild(previewWord);
    }
    //function for displaying words in madLibsPreview
    function displayPreview(word) {
      let previewWord = document.createElement("p");
      previewWord.innerText = word;
      document.querySelector(".madLibsPreview").appendChild(previewWord);
      return previewWord;
    }
  });
