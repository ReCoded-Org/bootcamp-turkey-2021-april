//Partners Deniz and Moumen
document.addEventListener("DOMContentLoaded", () => {
  //First event listener function that searches the users with the input from #search value. Fetches data from github api and sends it to userProperty to display in the page 
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let search = document.querySelector("#search").value;
    fetch(`https://api.github.com/search/users?q=${search}`)
    .then(response => response.json())
    .then(json => userProperty(json));
  })   
  //Second event listener to fetch the repos, uses the repo list UL to listen targets in, then selects the repo URL's saved in button href attributes to fetch, sends the result to userRepository to display in the page
  document.querySelector("#user-list").addEventListener("click", () =>{
    const buttonId = event.target.id;
    const reposUrl = document.querySelector(`#${buttonId}`).getAttribute("href");
    fetch(`${reposUrl}`)
    .then( response => response.json())
    .then( json => userRepository(json));
  });
}); 
//Takes first 10 elements so the result list is not too long, the result list is cleared on execution
function userProperty (obj){
  const user = document.querySelector("#user-list");
  user.innerHTML = "";
  for (i = 0 ; i< 10 ; i++){
    const name = obj.items[i].login;
    const avatar = obj.items[i].avatar_url;
    const url = obj.items[i].html_url;
    const reposUrl = obj.items[i].repos_url;
    const liName = document.createElement("li");
    liName.innerHTML = `<img src=${avatar} width=20% ></img><a href=${url}>${name} Profile Link</a> <button id=${name} href=${reposUrl}>Show ${name} Repo</button>`;
    user.appendChild(liName);       
  }  
}
//The result list is cleared on execution
function userRepository (obj){
  const repo = document.querySelector("#repos-list");
  repo.innerHTML = "";
  for (i = 0 ; i< obj.length ; i++){
    const language = obj[i].language;
    const name = obj[i].name;
    const owner = obj[i].owner.login;
    const liName = document.createElement("li");
    liName.innerText = `Repo Number: ${i}; Repo Name: ${name}; Repo Owner: ${owner}; Repo Language: ${language}`
    repo.appendChild(liName);
  }
}



