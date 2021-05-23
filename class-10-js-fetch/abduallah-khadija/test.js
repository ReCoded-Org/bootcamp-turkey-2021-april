const submit = document.getElementById('github-form');
const input= document.getElementById("search");


submit.addEventListener('submit',getRes);


function getRes(e){
  e.preventDefault();
  let user = input.value;
  fetch(`https://api.github.com/search/users?q=${user}`)
  .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      htmlMaker (json);
    })
}
//total_count
function htmlMaker(data){
  // TO:DO !! make if statement to clear the div.
  for (let i = 0; i < data.total_count; i++) {
    const list = document.createElement('li');
    const userList = document.getElementById('user-list');
    list.innerHTML = "<p> "+ data.items[i].login +" </p>" + "<br>"+ "<img src = " + data.items[i].avatar_url + ">" + "<br>"+ "<a href=\""+ data.items[i].html_url + "\"> link of the profile </a>"+ "<a href=\"https://github.com/"+ data.items[i].login + "\?tab=repositories\"> link of the profiles repo </a>"
    //https://github.com/ammaraskar?tab=repositories
    userList.appendChild(list);
  }
}
const listItem = document.querySelectorAll('li');