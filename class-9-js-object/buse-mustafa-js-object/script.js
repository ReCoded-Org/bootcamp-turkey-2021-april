// Entries should be an *array of objects*.
const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => { 
 

  let firstName = document.querySelector(".firstName").value
    let lastName = document.querySelector(".lastName").value
      let bio = document.querySelector(".bio").value
      
    
  const profile = {
       firstName : firstName,
       lastName : lastName,
        bio : bio,
       }
       
entries.push(profile);
e.preventDefault();
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

console.log(entries);
// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!

function renderPeople(pro) { 

  let list = document.createElement('li');
 
  for( i=0;i <pro.length; i++) {
    list.innerHTML = pro[i].firstName + " " + pro[i].lastName + " " + " " + pro[i].bio;
     document.querySelector(".output").appendChild(list);
   

  };

}