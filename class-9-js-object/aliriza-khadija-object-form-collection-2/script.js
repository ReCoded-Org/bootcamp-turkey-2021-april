// Entries should be an *array of objects*.

const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => {
  e.preventDefault()// We need this because of the default regulation of forms.
  /*
   * When the button is clicked, you should collect the first name,
   * last name, and bio and store them in an object with three keys:
   * first name, last name, and bio.
   * 
   * You should then add this object to the entries array.
   */
  let name = document.querySelector(".firstName");
  let nameValue = name.value;
  
  let surname = document.querySelector(".lastName");
  let surnameValue = surname.value;
 

  let bio = document.querySelector(".bio");
  let bioValue = bio.value;


  function appendObj() {
    let obj = {
    name: nameValue,
    surname: surnameValue,
    bio: bioValue
    }

    entries.push(obj);
    console.log(entries);
  }

  appendObj()

 
  
  
  // This function is called for you. You also have to implement it.
  renderPeople(entries);
});

// This function should modify the element with the .output class
// to render `people` however you want.
//
// THIS FUNCTION SHOULD NOT USE THE VARIABLE `entries`!


function renderPeople(people) {
  let div = document.querySelector(".output");
  let list = document.getElementById("list");

  
  if (entries.length >= 1) {
    let i = 0;
    while (i < entries.length){
      let turn = entries[i];
      let n = turn.name;
      let s = turn.surname;
      let b = turn.bio;
      let li = document.createElement("li");
      let content = document.createTextNode("Name: " + n + ", Surname: " + s + ", Bio: " + b + ".");
      entries.pop();
      li.appendChild(content);
      list.appendChild(li);
      //console.log(n);
      //console.log(s);
      //console.log(b);
      // div.innerText = "Name: " + n + ", Surname: " + s + ", Bio: " + b + ".";
      i++; 
    } 
  }

    
}