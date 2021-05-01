// Partners: Ayse Cimen Basar && Belal Awad

const submitButton = document.getElementById('submit');
const searchText = document.getElementById('search');
const userListUl = document.getElementById('user-list');
const reposListUl = document.getElementById('repos-list');


submitButton.addEventListener("click", function(e){

  // This is used to fetch the github usernames.
  fetch(`https://api.github.com/search/users?q=${searchText.value}`)
  .then (response => response.json())
  .then((json) => listUser(json));

  // This function is used to make use of the returned data from the fetch function.
  function listUser (users){

    // For loop is used to iterate through the list of users and adding them to the user-list ul element
    for (let i = 0; i < users.items.length; i++){
      let li = document.createElement('li');
      li.innerText = users.items[i]['login'];
      li.setAttribute('class', 'list');   // Adding a class named list for all li elements to add an event Listener to it.
      userListUl.append(li);
    }

    // Calling the created list of user-list to be used and making it clickable.
    const listOfUsersButton = document.querySelectorAll('.list');

    // Making a loop of the length of users to make them clickable using event listener.
    for (let i = 0; i < listOfUsersButton.length; i++){

      listOfUsersButton[i].addEventListener("click", function(){

        // Creating a variable to be used in the fetching process.
        let selectedUser = listOfUsersButton[i].textContent;
        console.log(selectedUser);    // This is used to make sure of the selection

        // This is used to fetch the github selectedUser repos.
        fetch(`https://api.github.com/users/${selectedUser}/repos`)
        .then (response => response.json())
        .then((json) => reposList(json));

// i just added this loop and now it works:
        // This function uses the data returned from the previous fetch function.
        function reposList(repos){

          // The following code is for Aesthetics wise of the website:
          const p = document.createElement('p');
          p.innerText = `The list of Repos for ${selectedUser} is:`
          p.style.color = "skyblue";
          reposListUl.append(p);
          const br = document.createElement('br');

          console.log(repos);     // To check what does repo data contains in order to know how to deal with it.
          // This loop will iterate through the repos and select each array and get the name of the repository then assigning it to the list and appending it under repos-list ul list.
          for(let i = 0; i < repos.length; i++){
            console.log(repos[i]['name']);
            let li = document.createElement('li');
            li.innerText = repos[i]['name'];
            reposListUl.append(li);   
          }
          reposListUl.append(br);
        }
      })
    }
  }
  e.preventDefault();
})