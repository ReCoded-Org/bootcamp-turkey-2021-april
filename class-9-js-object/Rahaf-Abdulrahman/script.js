// Entries should be an *array of objects*.
const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => {
  e.preventDefault();
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const bio = document.querySelector(".bio");
  /*
   * When the button is clicked, you should collect the first name,
   * last name, and bio and store them in an object with three keys:
   * first name, last name, and bio.
   * 
   * You should then add this object to the entries array.
   */
  const person ={
    "first_name": firstName.value,
    "last_name": lastName.value,
    bio:bio.value
  }

  entries.push(person)

  // console.log(entries);
  // This function is called for you. You also have to implement it.
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!
function renderPeople(people) {
  const output = document.querySelector(".output");
  output.style.display="block";
  output.innerHTML = '';

  for(person of people){
    for (const key in person) {
        output.innerHTML+="<b>"+key +":</b> "+person[key]+"<br/>";
      }
  }
    

 }