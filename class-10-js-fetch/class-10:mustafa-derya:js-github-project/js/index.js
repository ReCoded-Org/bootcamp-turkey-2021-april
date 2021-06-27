
document.querySelector("#button").addEventListener("click", function(e) {
  e.preventDefault();
  let inputUsers = document.querySelector("#search").value;
  fetch(`https://api.github.com/search/users?q=${inputUsers}`)
.then((response) => {
    return response.json(); 
  })
  
  .then((json) => {
    // console.log(json)
  const itemsArray = json.items
  for (let i=0;i<itemsArray.length; i++) {
   const render = document.querySelector('#user-list'); 
   let newElement = document.createElement("li");
   //console.log(itemsArray[i].avatar);
  //  console.log(itemsArray[i].login);
   //console.log(itemsArray[i].url);
   
   newElement.innerHTML = '<br>'+ '<h1>'+itemsArray[i].login + '</h1>' + itemsArray[i].url +'<br>'+  '<img src="'+itemsArray[i].avatar_url+'" />' +'<br>';
   render.appendChild(newElement);
   let userName = itemsArray[i].login;
   console.log(userName);
   newElement.addEventListener ('click', function () {
     repoGet(userName);
   })
  }
  function repoGet(userName) {
// e.preventDefault();

  fetch(`https://api.github.com/users/${userName}/repos`)
  .then((response) => {
    return response.json(); 
  })
  .then((json) => {
    // console.log(json)
    for (element of json) {
   const renderRepos = document.querySelector('#repos-list'); 
   let reposList = document.createElement("li");
   reposList.innerHTML = '<br>'+ element.name + '<br>';
   renderRepos.appendChild(reposList);

  }
  })
  }
  })

  })
 
// userName.addEventListener("click",repoGet());

// function repoGet() {
//   e.preventDefault();
//   fetch(`https://api.github.com/users/{userName}/repos{?type,page,per_page,sort}`)
// .then((response) => {
//     return response.json(); 
//   })
  
//   .then((json) => {
//     console.log(json)
// })
//   // .then ((json) => {
//   // return json.login;
//   // console.log
// };
  // console.log(document.querySelector("#search")

// fetch(`"https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"`)
// .then((response) => {
//     return response.json(); 
//   })
  
//   .then((json) => {
//     console.log(json)

// // const entries = [];
// // const username = json.login
// // let object = { 
// //    firstName: firstName, 
// //    lastName: lastName,
// //    bio: bio,
// //  }

// //  entries.push(object);


// ;
//   fetch(`https://api.github.com/search/users?q=${inputUsers}`)
// .then((response) => {
//     return response.json(); 
//   })
  
//   .then((json) => {
//     console.log(json)
//   const itemsArray = json.items;
//   for (let i=0;i<itemsArray.length; i++) {
//    const render = document.querySelector('#repos-list'); 
//    let newElement = document.createElement("li");
//    //console.log(itemsArray[i].avatar);
//    //console.log(itemsArray[i].login);
//    //console.log(itemsArray[i].url);
   
//    newElement.innerHTML = '<br>'+ '<h1>'+itemsArray[i].login + '</h1>' + itemsArray[i].url +'<br>'+  '<img src="'+itemsArray[i].avatar_url+'" />' +'<br>';
//    render.appendChild(newElement);
//    let userName = itemsArray[i].login;
//    console.log (userName)
// }

//   })