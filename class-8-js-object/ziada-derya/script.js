// Entries should be an *array of objects*.
const entries = [];


document.querySelector(".submitButton").addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = document.querySelector('.firstName').value
  const lastName = document.querySelector('.lastName').value
  const bio = document.querySelector('.bio').value

let object = { 
  firstName: firstName, 
  lastName: lastName,
  bio: bio,
}

entries.push(object);
// console.log(objectOnly)


  /*
   * When the button is clicked, you should collect the first name,
   * last name, and bio and store them in an object with three keys:
   * first name, last name, and bio.
   * 
   * You should then add this object to the entries array.
   */

  // This function is called for you. You also have to implement it.
  
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!

function renderPeople(people) {
  const objectOnly = entries[0]
  for (const property in objectOnly) {
  const render = document.querySelector('.output'); 
  let newElement = document.createElement("p");
  console.log(`${property}: ${objectOnly[property]}`);
  newElement.innerHTML = `${property}: ${objectOnly[property]}`;
  render.appendChild(newElement);
} 
}


