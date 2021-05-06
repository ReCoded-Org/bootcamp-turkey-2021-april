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
      let img =  document.createElement('img')
      let name = document.createElement('h2')
      let aTag = document.createElement('a') // create 'a' tag
      let repoTag = document.createElement('a') 

      img.src = user.avatar_url // set 'src' to image url
      name.innerText = user.login
      aTag.href = user.html_url // set 'href' to the url 
      aTag.innerText = `${userInput} profile`  
      console.log(user)


      list.id = user.id
      list.append(name, aTag, img )
      userUl.append(list)

      list.addEventListener("click", function(event){
          fetchReop(user.login) ;
       })
     })
   })    
})


function fetchReop(name){
  // console.log(name)
    fetch(`https://api.github.com/users/${name}/repos`)
          .then(r => r.json())
          .then(res => {
            console.log(res)
            userUl.innerHTML = '' 
            res.forEach(repo => {
      
              let listRepo = document.createElement('li')   
                listRepo.innerHTML = repo.name
                repoUl.append(listRepo)
             
           })
      
       })
}

