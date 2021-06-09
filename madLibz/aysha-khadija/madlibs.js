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

///First Fun.
function parseStory(rawStory) {

  const arr = rawStory.split(" ");

  let arrofObj = [];

  for (let i=0 ; i < arr.length ; i++){

    let aRegex = /\[a\]/g;
    let nRegex = /\[n\]/g;
    let vRegex = /\[v\]/g;

    let testAdj = aRegex.test(arr[i])
    let testNoun = nRegex.test(arr[i])
    let testVerb = vRegex.test(arr[i])

    let comma = /,$/g;
    let dotOFadj = /\[a\]\./g;
    let dotOFnoun = /\[n\]\./g;

    let testDotofNoun = dotOFnoun.test(arr[i]);
    let testComma = comma.test(arr[i]);
    let testDot = dotOFadj.test(arr[i]);

  ////test for noun


    if (testNoun == true && testComma != true  && testDotofNoun != true){
      let aourtest = arr[i].replace(/(\W)(n)(\W)/g,'');
      arrofObj.push({word: aourtest, pos: "noun"});

    }else if (testNoun == true && testComma == true && testDotofNoun != true){
      aourtest = arr[i].replace(/(\W)(n)(\W)\,/g,'');
      arrofObj.push({word: aourtest, pos: "noun"}, {word:","});

    }else if (testNoun == true && testDotofNoun == true && testComma != true ){
      aourtest = arr[i].replace(/(\W)(n)(\W)\./g,'');
      arrofObj.push({word: aourtest, pos: "noun"}, {word:"."});
       
    }

///////test for verb
    else if (testVerb == true){
      aourtest = arr[i].replace(/(\W)(v)(\W)/g,'');
      arrofObj.push({word: aourtest, pos: "verb"});

/////////test for adj
    } else if (testAdj == true && testDot != true){
      aourtest = arr[i].replace(/(\W)(a)(\W)/g,'');
      arrofObj.push({word: aourtest, pos: "adj"});
        
    }else if (testAdj == true && testDot == true ){
      aourtest = arr[i].replace(/(\W)(a)(\W)\./g,'');
      arrofObj.push({word: aourtest, pos: "adj"}, {word:"."});
    }
    else {
      arrofObj.push({word: arr[i]});
    }
  }
  console.log(arrofObj)
  displayedit(arrofObj)
}

///////////////Scond Fun.

function displayedit(arrofObj){
///// Fisrst Paragraph
  let edit = document.querySelector(".madLibsEdit");
///// Second Paragraph
  let result = document.querySelector(".madLibsPreview");
  
  let editPargraph = arrofObj.map(sentence => {
//////First Paragraph
    let nodeWithoutPos = document.createElement("span");
    nodeWithoutPos.innerHTML = ` ${sentence.word} `
    let inputWordOfPos = document.createElement("input");
    inputWordOfPos.setAttribute("type", "text");
    inputWordOfPos.placeholder = ` ${sentence.pos} `;
    inputWordOfPos.style.textAlign = "center";

//////Second Paragraph
    let word_Without_Pos = document.createElement("span");
    word_Without_Pos.innerHTML = nodeWithoutPos.innerHTML;
    
    let word_With_Pos_after = document.createElement("span");
    word_With_Pos_after.innerHTML = ` (${sentence.pos}) `;
   
    const inputHandler = function(e) {
      word_With_Pos_after.innerHTML = `${e.target.value} `;
    }
    
    if('pos' in sentence === true ){
      //////First Paragraph
      edit.appendChild(inputWordOfPos);
      //////Second Paragraph
      inputWordOfPos.addEventListener('input', inputHandler);
  
      result.appendChild(word_With_Pos_after);
    }else if ('pos' in sentence !== true ){ 
      //////First Paragraph
      edit.appendChild(nodeWithoutPos);
      //////Second Paragraph
      result.appendChild(word_Without_Pos);
     // 
    }

    ////style//set class name
    edit.className = "underEditPar"
    result.className = "afterEditPar"

    inputWordOfPos.className = "inputWord"
    nodeWithoutPos.className = "norWord"

    word_Without_Pos.className = "secondNorWord"
    word_With_Pos_after.className = "outputWord"
  })
  return editPargraph
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the
 *  page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory); 
});



     