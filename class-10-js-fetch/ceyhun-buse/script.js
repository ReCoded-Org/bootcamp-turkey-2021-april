document.getElementById('submit').addEventListener("click", function (e) {

  e.preventDefault();
  let user = document.getElementById('search').value;

  fetch(`https://api.github.com/search/users?q=${user}`)
    .then((response) => {
      //Clears HTML
      let emptyHTML = ""
      document.getElementById("user-list").innerHTML = emptyHTML
      return response.json();
    })
    .then((json) => {
      //console.log("JSON:\n",json);
      // console.log("\n\njson.items\n", json.items)
      // console.log(typeof ("\n\nTypeof json.items:\n",json.items))
      let jsonItems = json.items;
      // let login = jsonItems[0].login
      // console.log("\n\njsonItems:\n", jsonItems, typeof (jsonItems), "\n\njsonItems[1].login\n", jsonItems[1].login, "\n\njsonItems[1]\n", jsonItems[1], "\n\n Length jsonItems", jsonItems.length)
      // document.getElementById("user-list").innerHTML = login

      for (let i = 0; i < jsonItems.length; i++) {
        const ul = document.querySelector('#user-list');

        let newLiName = document.createElement("li")
        newLiName.setAttribute("id", "nameArea")
        let newLiElement = document.createElement("li")
        newLiName.innerHTML = "<p>" + "Username: \t" + jsonItems[i].login + "</p>" + "<br>"

        newLiElement.innerHTML = "URL:\t" + "<a href=" + `"${jsonItems[i].html_url}">` + `${jsonItems[i].login}` + "</a>" + "<br><br>" + "<img src='" + `${jsonItems[i].avatar_url}` + "'/>" + "<br><br>"

        ul.appendChild(newLiName);
        ul.appendChild(newLiElement);
        let login = jsonItems[i].login
        document.getElementById("nameArea").addEventListener("click", function (e) {
          fetch(`https://api.github.com/users/${login}/repos`)
            .then((response) => {

              return response.json();
            })
            .then((json) => {
              let repos = json;
              // console.log("JSON:\n", repos);
              // console.log("REpos namefalan: ", repos[0].name)
              //console.log(repos[0].svn_url)


              for (let i = 0; i < repos.length; i++) {
                const reposUl = document.querySelector('#user-list');
                let userRepos = document.createElement("li");
              
                userRepos.innerHTML = "<p>" + "Username: " + login + "<br>" + "Repositories: " + "<a href=" + `"${repos[i].svn_url}">` + `${repos[i].name}` + "</a>"
                reposUl.appendChild(userRepos);
              };

            })

        });
      }



    });

})