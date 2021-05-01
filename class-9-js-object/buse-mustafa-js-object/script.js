// Entries should be an *array of objects*.
const entries = [];

document.querySelector(".submitButton").addEventListener('click', (e) => { 
  e.preventDefault();

  let firstName = document.querySelector(".firstName").value
    let lastName = document.querySelector(".lastName").value
      let bio = document.querySelector(".bio").value
      //console.log(document.querySelector(".lastName").value);
      //profile.firstName1 = "firstName"
    
  const profile = {
       firstName : firstName,
       lastName : lastName,
        bio : bio,
       }
       //console.log(profile);
entries.push(profile);

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
  let list = document.createElement("li");
  document.querySelector(".output").appendChild(list);
  

  
  //let newList = list.innerText;
  for(i=0;i <pro.length; i++) {
    //for (j=0; j< profile[i].length; j++)
       list.innerHTML += pro[i].firstName + " " + pro[i].lastName + " " + "Bio:" + pro[i].bio;
       
       
    
    //}
  };
  
  
//console.log(document.querySelector(".output").innerText);
}


// for(i=0;i<contacts.length;i++){
//     document.getElementById("mydiv").innerHTML += contacts[i].fname+" "+contacts[i].lname;
// }
// }