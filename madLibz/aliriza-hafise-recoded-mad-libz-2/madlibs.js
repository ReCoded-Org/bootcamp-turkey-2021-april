
// Music code

window.addEventListener("load", function() {
  document.getElementById("audio").play();
  console.log("Page is loaded!")
})

//                                              //                                     //

// The function that parses the story.  
function parseStory(rawStory) {
  // Your code here.

  //Create an empty array
  let copyRawStory = rawStory.slice();
  let splittedRawStory = copyRawStory.split(" ");
  const arrOfStory = [];

  //Declare variables regular expressions

  let noun = /\[n\]/;
  let verb = /\[v\]/;
  let adjective = /\[a\]/;
  let name = /\[m\]/;

  //Take the words into the Objects

  for (let i = 0; i < splittedRawStory.length; i++) {
    let word = splittedRawStory[i];
    let lastLetter = word[word.length - 1];
    if (lastLetter === ".") {
      word = word.slice(0, word.length - 1);
      //Deleting the the last chracter if it's dot.
    }

    //Declare object for pushing inside of array of objects
    const wordObj = {
      word: word
    };

    //Push objects into arrOfStory
    arrOfStory.push(wordObj);

    if (word.match(noun)) {
      wordObj.word = splittedRawStory[i].replace("[n]", "");
      wordObj.pos = "noun";
    } else if (word.match(verb)) {
      wordObj.word = splittedRawStory[i].replace("[v]", "");
      wordObj.pos = "verb";
    } else if (word.match(adjective)) {
      wordObj.word = splittedRawStory[i].replace("[a]", "");
      wordObj.pos = "adjective";
    } else if (word.match(name)) {
      wordObj.word = splittedRawStory[i].replace("[m]", "");
      wordObj.pos = "name";
    }
    if (lastLetter === ".") {
      arrOfStory.push({ word: lastLetter });
    }
  }

  return arrOfStory;
}

//                                        //                                              //

// The function that displays the processed story.

function displayTheProcessedStory(processedStory) {

  console.log(processedStory);

  // Select the areas in HTML that we want to display stuff in
  let madLibsEdit = document.querySelector(".madLibsEdit");
  let madLibsPreview = document.querySelector(".madLibsPreview");


  processedStory.forEach(function(element) {
    // console.log(element)

    // If there's no pos, then execute the first block of code.
    if (!element.pos) { 
      // console.log(element)
      let editSpan = document.createElement("span");
      editSpan.innerHTML = element.word + "&nbsp";
      madLibsEdit.appendChild(editSpan);
      let prevSpan = document.createElement("span");
      prevSpan.innerHTML = element.word + "&nbsp";
      madLibsPreview.appendChild(prevSpan);
    } 
    // If there's pos, execute the else block of code, create input and assign the necessary attributes.
    else {
      let inputPlace = document.createElement("input");
      inputPlace.setAttribute("type", "text");
      inputPlace.setAttribute("maxlength", "20");
      inputPlace.setAttribute("placeholder", `${element.pos} `);

      // Set some styles for the appearence of inputs

      let inputValPreview = document.createElement("span");
      let x = document.createTextNode(`${element.pos}`);
      inputValPreview.appendChild(x);
      inputValPreview.style.color = "red";

      //Listen the changes on each input and when there's something changed, change the innerHTML of the spans in the page in order to display the changes.
      inputPlace.addEventListener("input", function () {
        if (inputPlace.value) {
          inputValPreview.style.color = "red";
          inputValPreview.innerHTML = `${inputPlace.value} &nbsp`;
         
        }
        // If there's no content in the inputs, then display this as default.
         else {
          inputValPreview.innerText = `(${inputPlace.placeholder})`;
        }
      });
      
      madLibsEdit.appendChild(inputPlace);
      madLibsPreview.appendChild(inputValPreview);
    }
  });
}

//                                            //                                          //

getRawStory()
.then(parseStory)
.then(displayTheProcessedStory);