/*
link for repo: 
https://api.github.com/users/octocat/repos


link for all users :
https://api.github.com/search/users?q=octocat
*/

const gitForm = document.getElementById('github-form')
const search =  document.getElementsByTagName('search')
const submit =  document.getElementById('submit')
const userUl =  document.getElementById('user-list')
const repoUl =  document.getElementById('repos-list')




gitForm.addEventListener('submit',function(e) {
  e.preventDefault()
  
  let userInput = e.target.search.value    // search process in all users 
  fetch(`https://api.github.com/search/users?q=${userInput}`)
  .then(res => res.json())
  .then(response =>{
    response.items.forEach(user => {
      let list = document.createElement('li')
      let img = document.createElement('img')
      let name = document.createElement('h2')
      let aTag = document.createElement('a') // create 'a' tag

      img.src = user.avatar_url // set 'src' to image url
      name.innerText = user.login
      aTag.href = user.html_url // set 'href' to the url 
      aTag.innerText = `${userInput} profile`  

      list.id = user.id
      list.append(name, aTag, img)
      userUl.append(list)

      list.addEventListener("click", function(event){
        fetch(`https://api.github.com/users/${user.login}/repos`)
        .then(r => r.json())
        .then(res => {
            res.forEach(repo => {
                 
             })
           })
        })
     })
   })    
})



// fetch(`https://api.github.com/search/repositories?q=${user}`)

// function createNode(data) {
//   // display all users :
//   for (let i = 0; i < data.total_count; i++) {
//     let listst = document.getElementById('user-list');
//     let list = document.createElement('li');

//     //console.log(data.items[i].login)

//     list.innerHTML = "<p> " + data.items[i].login + " </p>" + "<br>" + "<img src = "
//       + data.items[i].avatar_url + ">" + "<br>" + "<a href=\""
//       + data.items[i].html_url + "\">  User Profile </a>" + "<br> <br>" + "<a href=\"https://github.com/"
//       + data.items[i].login + "\?tab=repositories\">  Repositories for this user  </a>"

//     listst.appendChild(list);


//   }
// }



