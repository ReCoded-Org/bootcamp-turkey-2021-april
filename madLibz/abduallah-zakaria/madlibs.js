/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are requigreen (please read this carefully):
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
    n: 'noun',
    v: 'verb',
    a: 'adj'
  }
  // split string into array using spaces get comma and dot as word as well 
  const wordArray = rawStory.split(/(?=[\.,])|[ ]/g)
  // console.log(wordArray)

  // create an array of word objects by using the output of split method
  const arrayOfWords = []

  for (element of wordArray) {

    const postTest = /\[[anv]\]/;
    // check if the element has pos key 
    if (postTest.test(element)) { // if it is true
      const postValue = element.match(postTest)[0].charAt(1);
      // console.log(postValue)
      // push the words into container  with the pos key and value
      arrayOfWords.push({ 'word': element.replace(`${element.match(postTest)[0]}`, ""), "pos": obj[postValue] })
    } else {
      arrayOfWords.push({ "word": element })
    }
  }

  // console.log(arrayOfWords)
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

  // call divs of class 
  const madLibsEdit = document.getElementsByClassName('madLibsEdit')[0]
  const madLibsPreview = document.getElementsByClassName('madLibsPreview')[0]

  for(let i = 0 ; i < processedStory.length ; i++){
    // create new HTML tags
    const spanEdit = document.createElement('span')
    const spanPreview = document.createElement('span')
    
    // Cheack if Pos is existed in the array 
    if('pos' in processedStory[i]){
      
      // if it is existed create input HTML tag
      const inputPos = document.createElement('input')
      inputPos.setAttribute('type','text')
      inputPos.setAttribute('class','replace')
      inputPos.style.textAlign = 'center' 
      
      // adding space befor the input box 
      spanEdit.innerHTML += " "
      spanPreview.innerHTML += " "
      // ${processedStory[i].wrod}
      spanPreview.innerHTML += `[${processedStory[i].pos}]` 
      // css part 
      spanPreview.style.color = 'green'

      // adding a placeholder of the word and type
      // ${processedStory[i].wrod}
      inputPos.setAttribute(`placeholder` , `[${processedStory[i].pos}]`)


      // append spaceing between input word and next word 
      madLibsEdit.appendChild(spanEdit)
      madLibsEdit.appendChild(inputPos)
      madLibsPreview.appendChild(spanPreview)


      // create EventListner on to input 
      // inputPos.addEventListener('oninput' , function(e){
      //   if(inputPos.value){
      //     spanPreview.innerHTML = " " + inputPos.value +  " " 
      //     spanPreview.style.color = 'green'
         
        
      //   }else{
      //     spanPreview.innerHTML = `${processedStory[i].word} [${processedStory[i].pos}]`
      //     spanPreview.style.color = 'green'
        
      //   }

      // })

      inputPos.oninput = event =>{
        if(inputPos.value){
          spanPreview.innerHTML = " " + inputPos.value +  " " 
          spanPreview.style.color = 'green'
         
        
        }else{
          spanPreview.innerHTML = `${processedStory[i].word} [${processedStory[i].pos}]`
          spanPreview.style.color = 'green'
        
        }
      }

    }else{
      
      if(processedStory[i].word === "," || processedStory[i].word === '.'){
        
        spanEdit.innerHTML = processedStory[i].word
        spanPreview.innerHTML = processedStory[i].word
        madLibsEdit.appendChild(spanEdit)
        madLibsPreview.appendChild(spanPreview)
      } 
      else if((i != 0 ) && (processedStory[i].word != "")){ 
        
        spanEdit.innerHTML = " "+ processedStory[i].word
        spanPreview.innerHTML =" "+ processedStory[i].word
        madLibsEdit.appendChild(spanEdit)
        madLibsPreview.appendChild(spanPreview)

      }else{
       // if the object at the begaing of text then add it directly 
        spanEdit.innerHTML = processedStory[i].word + " "
        spanPreview.innerHTML = processedStory[i].word +" "
        madLibsEdit.appendChild(spanEdit)
        madLibsPreview.appendChild(spanPreview)
      }

    }

  }



});
