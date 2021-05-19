const btn = document.querySelector('#submit')
btn.addEventListener('click', function(e){
let user = document.querySelector(`#term`).value
const url = "https://api.github.com/search/users";

fetch(`${url}?q=${user}`)
.then((response) => {
    return response.json(); 
  }).then(data => {
    const conatiner = document.querySelector('.results')
    conatiner.innerText = "";
    data.items.forEach((item, index) => {
     let avatar = item.avatar_url 
     let userName = item.login 
     const card = document.createElement('div')
      card.innerHTML = `
      <img style="border-radius: 50px;" height="70px" width="70px" src=${avatar}>
        <h4>${item.login}</h4>
      <a class="btn" target="_blank" href="${item.html_url}">link to profile</a>`
      conatiner.appendChild(card)
      card.addEventListener('click', function(){
        getRepos(userName);
      })
    })
  })
})

function getRepos(userName){
const url = 'https://api.github.com/users'
fetch(`${url}/${userName}/repos`)
.then((response) => {
    return response.json(); 
  }).then(data => {
   
    const conatiner = document.querySelector('.repos')
    conatiner.innerText = "";
    data.forEach((item, index) => {
     let avatar = item.avatar_url 
     let userName = item.login 
     const card = document.createElement('div')
      card.innerHTML = `<h3>${item.name}</h3>`
      conatiner.appendChild(card)
    })
  })
}