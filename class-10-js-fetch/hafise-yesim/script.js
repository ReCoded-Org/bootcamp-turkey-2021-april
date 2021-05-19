document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const searchInput = document.getElementById('search');
   
  button.addEventListener('click', function (e){
  e.preventDefault();
  console.log('you clıcked',searchInput.value)
  const ulone = document.getElementById('user-list');
  const ultwo = document.getElementById('repos-list');
  ulone.innerHTML=" ";
  ultwo.innerHTML=" ";
  fetch(`https://api.github.com/search/users?q=${searchInput.value}`)
  .then((response) => {
    return response.json(); 
  })
  .then((json) => {

  const count= json.total_count;
  
  for (i = 0; i < count; i++) {
    
  const image = document.createElement('img');  
  image.src = `${json.items[i].avatar_url}`;
  image.style.display = "block";
  image.style.height = "150px";
 
  const li = document.createElement('li');
  let userLogin = json.items[i].login;
  let reposLogin = json.items[i].repos_url;
  
  let nodeUser = document.createTextNode(userLogin);
  let nodeRepo = document.createTextNode(reposLogin);
  const line = document.createElement('br');
 const buttonRepo = document.createElement("button");
buttonRepo.style.padding = "15px",
buttonRepo.innerText = "repositories";
  li.appendChild(nodeUser);
  li.appendChild(line);
  li.appendChild(nodeRepo);
  li.appendChild(image);
  li.appendChild(buttonRepo);
  ulone.appendChild(li);
 
 buttonRepo.addEventListener('click', function (e){
  e.preventDefault();
  console.log('you clıcked',searchInput.value)
  const ultwo = document.getElementById('repos-list');
  ultwo.innerHTML=" ";
  fetch(`https://api.github.com/users/${userLogin}/repos`)
  .then((response) => {
    return response.json(); 
  })
  .then((json) => {
    console.log(json.length)
  for (j = 0; j < json.length; j++) { 
  const listtwo = document.createElement('li');
  let reposLogin = json[j].html_url;
  let nodeRepo = document.createTextNode(reposLogin);
  const line = document.createElement('br');

   listtwo.appendChild(nodeRepo);
  listtwo.appendChild(line);
  ultwo.appendChild(listtwo);
 
    }
    });
})
}
  })})})

