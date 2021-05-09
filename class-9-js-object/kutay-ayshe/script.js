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

    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;
    let bio = document.querySelector(".bio").value;
    

    const object = {
      firstName : firstName,
      lastName : lastName,
      bio : bio,
    };

    entries.push(object);

// This function is called for you. You also have to implement it.

  renderPeople(entries);
  
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!
function renderPeople(people) {
  
  
  const displayDiv = document.querySelector(".output");
  displayDiv.innerHTML = " ";
  

  for (let i = 0; i<people.length; i++){
  
    let paragraph = document.createElement("p");
    
    let text = " " + people[i].firstName + " " + people[i].lastName + " " + people[i].bio;
    paragraph.innerHTML = text;
    displayDiv.appendChild(span);
  }
  
}