let firstName = document.getElementsByClassName("firstName");
let lastName = document.getElementsByClassName("lastName");
let bio = document.getElementsByClassName("bio");
// Entries should be an *array of objects*.
const entries = [];
 

document.querySelector(".submitButton").addEventListener('click', (e) => {
  e.preventDefault()

  const entry = {
  firstName : firstName[0].value,
  lastName : lastName[0].value,
  bio : bio[0].value,
  }
  entries.push(entry);
  console.log(entries);

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



// function renderPeople(people) {
//   e.preventDefault()
// console.log(people)
//   let output = document.querySelector('.output');
//     for (let i = 0; i < people.length; i++){
//     let li = document.createElement("li");
//     let ul = document.createElement("ul")
//     ul.innerHTML = firstName + lastName;
//     // li.innerHTML = people[i];
//     list.appendChild(li);
//     output.appendChild.(ul);
//   }

//   // people[i].firstName
// // use the keys to return the value

// //   const list = document.querySelector('.output')



// }

function renderPeople(people) {
console.log(people)
    for (let i = 0; i < people.length; i++){
    
    let output = document.getElementById("output")
    let ul = document.createElement("ul")
    let li = document.createElement("li");
    li.innerHTML = `${people[i].firstName} ${people[i].lastName} ${people[i].bio}`
    ul.appendChild(li);
    output.appendChild(ul);
  }
  
}
// function renderPeople(people) {
// console.log(people)
//   const objectOnly = entries[0]
//   for (const property in objectOnly) {
//   const render = document.querySelector('.output'); 
//   let newElement = document.createElement("p");
//   console.log(`${property}: ${objectOnly[property]}`);
//   newElement.innerHTML = `${property}: ${objectOnly[property]}`;
//   }
  
// }



//  function renderPeople(pro) {
//   let list = document.createElement("li");
//   document.querySelector(".output").appendChild(list);



//   //let newList = list.innerText;
//   for(i=0;i <pro.length; i++) {
//     //for (j=0; j< profile[i].length; j++)
//        list.innerHTML += pro[i].firstName + " " + pro[i].lastName + " " + "Bio:" + pro[i].bio;


 