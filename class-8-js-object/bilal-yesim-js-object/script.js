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
  
  let obj = {
    firstName: document.querySelector(".firstName").value,
    lastName: document.querySelector(".lastName").value,
    bio: document.querySelector(".bio").value,
  };

  entries.push(obj);
  e.preventDefault();

  // This function is called for you. You also have to implement it.
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!

function renderPeople(people) {
  const outputDiv = document.querySelector('.output');
  let nameSurnameP = document.createElement('p');
  let br1 = document.createElement('br'); 
  let br2 = document.createElement('br'); 
  let bioP = document.createElement('p');

  console.log(people);
  for(let i = 0; i < people.length; i++){
    nameSurnameP = people[i].firstName + " " + people[i].lastName;
    bioP =  people[i].bio;
    outputDiv.append(nameSurnameP);
    outputDiv.append(br1);
    outputDiv.append(bioP);
    outputDiv.append(br2);
  }
}
