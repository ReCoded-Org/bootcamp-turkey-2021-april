//Partners Aziza and Deniz
// Entries should be an *array of objects*.
const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => {
  event.preventDefault();
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let bio = document.querySelector(".bio").value;
  const object = {
    firstName : firstName,
    lastName : lastName,
    bio : bio,
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
  let ulList = document.querySelector(".ulList");
  let liList = document.createElement("li");
  // for(let i = 0; i< people.length; i++){
    for (const property in people[0]){
    liList.appendChild(document.createTextNode(`${people[people.length-1][property]},`));
    ulList.appendChild(liList); 
    }
  // }
}

// liList.appendChild(document.createTextNode(newTask.value + " "));
