// Entries should be an *array of objects*.
const entries = [];


document.querySelector(".submitButton").addEventListener('click', (e) => {
  /*
   * When the button is clicked, you should collect the first name,
   * last name, and bio and store them in an object with three keys:
   * first name, last name, and bio.
   * 
   * You should then add this object to the entries array.
   */
  e.preventDefault();
  const firstName = document.getElementById("firstName").value
  const lastName = document.getElementById("lastName").value
  const bio = document.getElementById("bio").value
  
  const family = {
    firstName : firstName,
    lastName : lastName,
    bio : bio
  }

  entries.push(family); 
  // console.log(entries)
 

  // This function is called for you. You also have to implement it.
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!


function renderPeople(people) {
  //loop
  
  for(let i = 0; i< people.length; i++ ){
    const ulList = document.createElement('ul')
    // console.log("people.length",people.length,"\n")
    // console.log("people[0]",people[0],"\n")
    // console.log("people[1]",people[1],"\n")
    let emptyHTML = ""
    document.getElementById("output").innerHTML = emptyHTML
    for(const properties in people[i]){
      // console.log("i: ", i,"\tpeople[i][properties]",people[i][properties],"\n")
     
      const list = document.createElement('li')
      list.appendChild(document.createTextNode(people[i][properties]));
      ulList.appendChild(list)
      // console.log("\n", ulList.innerHTML)
      // console.log("\n", list.innerHTML,"\n\n")
      document.getElementById("output").appendChild(list)
    }

  }
  
}