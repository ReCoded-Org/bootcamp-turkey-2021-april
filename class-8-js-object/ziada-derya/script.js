// Entries should be an *array of objects*.
let entries = [];


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
  // console.log(entries)
  for (let i = 0; i < entries.length; i++) {
      const render = document.querySelector('.output'); 
      let newElement = document.createElement("p");
      console.log(entries);
      newElement.innerHTML = `<p> First Name: ${entries[i].firstName} </p>
      <p> Last Name: ${entries[i].lastName} </p>
      <p>  Bio: ${entries[i].bio} </p>`
      render.appendChild(newElement);
    }
    entries = [];
}


