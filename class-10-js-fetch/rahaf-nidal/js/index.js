document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("#search");
  const ul = document.querySelector("#user-list");
  const ulRepo = document.querySelector("#repos-list");

  document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault();

    if (name.value) {
      fetch(`https://api.github.com/search/users?q=${name.value}`)
        .then(response => response.json())
        .then(json => printNames(json, ul, ulRepo));
    } else {
      alert("please insert a value");
    }
  });
});
function printNames(json, ul, ulRepo) {
  ul.innerHTML = "";
  ulRepo.innerHTML = "";

  for (elem of json.items) {
    let li = document.createElement("li");
    li.innerHTML = `<p> <img src="${elem.avatar_url}" width="50"> <br/>${elem.login}</p>`;
    li.id = elem.login;
    ul.appendChild(li);
    li.addEventListener("click", function () {
      printRepos(event.currentTarget.id, ulRepo);
    });
  }
}
function printRepos(user, ulRepo) {
  ulRepo.innerHTML = "";
  fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(json => {
      for (elem of json) {
        let li = document.createElement("li");
        li.innerText = elem.name;
        ulRepo.appendChild(li);
      }
    });
}
