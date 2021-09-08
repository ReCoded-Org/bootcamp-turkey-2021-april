// Entries should be an *array of objects*.
  /*
   * When the button is clicked, you should collect the first name,
   * last name, and bio and store them in an object with three keys:
   * first name, last name, and bio.
   * 
   * You should then add this object to the entries array.
   */

  // This function is called for you. You also have to implement it.
const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => {
  e.preventDefault()
  const firstName = document.querySelector(".firstName")
  const lastName = document.querySelector(".lastName")
  const bio = document.querySelector(".bio")

const userInfo = {
  userName: firstName.value,
  userLastName: lastName.value,
  userBio: bio.value,
}
console.log(userInfo)
entries.push(userInfo)
console.log(entries)
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!
function renderPeople(people) {
  console.log(people)
  output.innerHTML = " ";

  for(let i = 0; i < people.length; i++){
    const output = document.querySelector("#output")
    let motherList = document.createElement("ul");
    let motherText = document.createTextNode("First User:")
    let node = document.createElement("li");
    let ul = document.createElement("ul")
    ul.innerHTML = ` <li> User Name: ${people[i].userName} </li> <li> User Last Name: ${people[i].userLastName} </li> <li> User Bio: ${people[i].userBio} </li>`;
    motherList.appendChild(node);
    node.appendChild(ul);
    output.appendChild(motherList)
  }
}   