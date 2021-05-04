// Partners: Bilal Awad && Ayse Cimen Basar.

const userList = document.getElementById('user-list');
const reposList = document.getElementById('repos-list');
const submit = document.getElementById('submit');
const repoBtn = document.getElementById('repoBtn');
const search = document.getElementById('search');
const choice = document.querySelectorAll('input[name="choice"]');        // 0 index is users, 1 index is repos.

let selectedUser = "";

// Calling the users and using the function to display them.
submit.addEventListener('click', function(e) {
  while(userList.firstChild) userList.removeChild(userList.firstChild);    // To delete all existing search result after hitting search.
  while(reposList.firstChild) reposList.removeChild(reposList.firstChild); // To delete all existing search result after hitting search.

  e.preventDefault();
  if(choice[0].checked){
    fetch(`https://api.github.com/search/users?q=${search.value}`)     // Fetching data for the list of users.
    .then(response => response.json())                                 // Changing the files from txt to JSON.
    .then(json => displayUsers(json));                                 // Sending the JSON file to displayUsers function.
  }
  else if(choice[1].checked){
    fetch(`https://api.github.com/search/repositories?q=${search.value}`) // Fetching data for the list of repos.
    .then(response => response.json())                                 // Changing the files from txt to JSON.
    .then(json => displayRepoChoice(json));                            // Sending the JSON file to displayRepoChoice function.
  }
  
});

// Funciton that display the users.
function displayUsers(usersData){                                      // Function that will be used for adding users.
  
  for(let i = 0; i < usersData.items.length; i++){                     // Rotate throught the list of items.
    let li = document.createElement('li');                             // Creating an li element.
    let img = document.createElement('img');                           // Creating an img element.
    let a = document.createElement('a');                               // Creating an a element.
    let div = document.createElement('div');                           // Creating a div element.

    img.setAttribute('src', `${usersData.items[i]['avatar_url']}`);    // Adding user avatar image.
    img.style.width = '100px';                                         // Adjusting the size of the avatars.
    div.append(img);                                                   // Appending the image to div.

    li.innerText = usersData.items[i]['login'];                        // Adding the username to the li element.
    div.append(li);                                                    // Appending the username to the Div.
    
    a.setAttribute('href', `${usersData.items[i]['html_url']}`);       // Linking account URL to the a tag.
    a.setAttribute('target', '_blank');                                // Clicking on the link will open it in new tab.
    a.innerHTML = 'Open user profile';                                 // Adding the li as the pressable link.
    div.append(a);                                                     // Appending the link to the Div.

    userList.append(div);                                              // Appending the div to the appropriate location.

    li.addEventListener('click', function() {                          // Adding an event listener to each li.
      selectedUser = li.innerText;                                     // Changing the value of SelectedUser variable.

      fetch(`https://api.github.com/users/${li.innerText}/repos`)      // Fetching data for the repos.
      .then (response => response.json())                              // Changing the files from txt to JSON.
      .then((json) => displayRepos(json));                             // Sending the JSON file to displayRepos function.
    });
  }
}

// Function that display repositories
function displayRepos(reposData){                                      // Function that will be used for adding repos.

  const p = document.createElement('p');                               // Creating a p tag to seperate between repos.
  p.innerText = `The list of Repos for ${selectedUser} is:`            // Mentioning who this repos belong to.
  p.style.color = "skyblue";                                           // Styling the text.
  reposList.append(p);                                                 // Appending the p tag.
  const br = document.createElement('br');                             // Creating a break between lists of repos.
  
  for(let i = 0; i < reposData.length; i++){                           // Rotate throught the list of repos data.
    let li = document.createElement('li');                             // Creating an li element.
    let a = document.createElement('a');                               // Creating an a tag.
    a.setAttribute('href', `${reposData[i]['html_url']}`);             // Adding the link of the repos to the a tag.
    a.setAttribute('target', '_blank');                                // Making the a tag opens in a new tab instead. :)
    a.style.textDecoration = 'none';                                   // Removing the underline from the links. :)

    reposList.append(li);                                              // Appending the li to the appropriate Div.
    a.innerHTML = reposData[i]['name'];                                // Adding the name of the repos to the a tag.
    li.append(a);                                                      // Appending the a tag inside the li tag.
  }
  reposList.append(br);                                                // Adding a break between lists of repos.
}

// Bonus Chalenge
function displayRepoChoice(reposData){                                 // Function that will be used for adding repos.
  const br = document.createElement('br');                             // Creating a break between lists of repos.

  for(let i = 0; i < reposData['items'].length; i++){                  // Rotate throught the list of repos data.
    let li = document.createElement('li');                             // Creating an li element.
    let a = document.createElement('a');                               // Creating an a tag.

    a.setAttribute('href', `${reposData['items'][i]['html_url']}`);    // Adding the link of the repos to the a tag.
    a.setAttribute('target', '_blank');                                // Making the a tag opens in a new tab instead. :)
    a.style.textDecoration = 'none';                                   // Removing the underline from the links. :)

    reposList.append(li);                                              // Appending the li to the appropriate Div.
    a.innerHTML = reposData['items'][i]['name'];                       // Adding the name of the repos to the a tag.
    li.append(a);                                                      // Appending the a tag inside the li tag.
  }
  reposList.append(br);   
}