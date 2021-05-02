const form = document.getElementById('github-form');
const query = document.getElementById('search');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(`https://api.github.com/search/users?q=${query.value}`)
  .then (resp => resp.json())
  .then (json => {
    renderDate(json) //call back function defined next
  })
})


function renderDate(user) {
  const list = document.getElementById('user-list');
  list.innerHTML = " ";
  for(let i = 0; i <user.items.length; i++) {
    // creating a new variable for each of the users' details
    
    const li = document.createElement('li');
    const username = document.createElement('h2');
    const image = document.createElement('img');
    const url = document.createElement('a');
    const line = document.createElement('br');


    // create a button to show all repos of a specific user
    const showRepos = document.createElement('button')


    //linking the details of the users as json to the created element
    username.innerText = `${user.items[i].login}`;
    url.href = `${user.items[i].url}`
    url.innerText = `${user.items[i].url}`
    url.target = "_blank"
    image.src = `${user.items[i].avatar_url}`
    image.style.display = "block";
    image.style.height = "200px";
    showRepos.innerText = "show repositories";
    showRepos.style.marginTop = "20px";
    showRepos.style.marginBottom = "50px";


    // append the elements(users) to the page
    li.appendChild(username);
    li.appendChild(image);
    li.appendChild(url);
    li.appendChild(line);
    li.appendChild(showRepos)
    list.appendChild(li);


    // addEventListener to each h2 to show repositories
    showRepos.addEventListener('click', (e) => {
      fetch(`https://api.github.com/users/${username.innerText}/repos`)
      .then (repos => repos.json())
      .then (json => {
        displayRepos(json)
      })
      })
    }

    function displayRepos(repositories) {
      const repoLis = document.getElementById('repos-list');
      repoLis.innerHTML = " ";
      for (let j = 0; j < repositories.length; j++) {
        const repoItem = document.createElement('li');
        const repoUrl = document.createElement('a');


        repoUrl.href = `${repositories[j].html_url}`
        repoUrl.innerText = `${repositories[j].html_url}`
        repoUrl.target = "_blank"


        repoItem.appendChild(repoUrl);
        repoLis.appendChild(repoItem);
        console.log(repoLis.innerHTML)
      }
    }
}



//     })





// function 


// 3. Clicking on one of these users should send a request to the
//    [User Repos Endpoint](#user-repos-endpoint) and return data about all the
//    repositories for that user.
// 4. Using the response from the Users Repos Endpoint, display all the
//    repositories for that user on the page.

