// Partners: Yeşim Nur Akar && Belal Awad

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
  entries.firstName = document.querySelector(".firstName").value;
  entries.lastName = document.querySelector(".lastName").value;
  entries.bio = document.querySelector(".bio").value;
  e.preventDefault();

  // This function is called for you. You also have to implement it.
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!

function renderPeople(people) {
  console.log(people);
  let peopleP = document.createElement('p');
  peopleP.textContent = people.firstName + " " + people.lastName + "\n" + people.bio;
  document.querySelector(".output").append(peopleP);
  console.log(peopleP.textContent);
}
