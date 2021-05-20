// Get the elements that is gonna be needed

let input = document.querySelector(".search");

let button = document.querySelector(".submit");

let output = document.querySelector(".output");



// STAGE ONE //

button.addEventListener("click", function(e) {
  e.preventDefault();

  let inputValue = input.value;


  fetch("https://api.github.com/search/users?q=" + inputValue)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (json) {
      // console.log(json);
      return json.items;
    })
    .then(function (items) {
      // console.log(items);
      loopOver(items);
      return items;
    })
});

function loopOver(items) {

  // First, delete if there's any other unordered lists. This will provide us a clean interface because we don't want the searches to pile up.

  let firstUlCount = document.querySelectorAll(".output > ul").length;
  // console.log(firstUlCount);

  if (firstUlCount >= 1) {
    output.removeChild(output.childNodes[0]);
  }

  // After deleting the previous search, add another unordered list that contains the results of search.

  let firstUl = document.createElement("ul");
  output.appendChild(firstUl);

  // Just get the first ten people's name for the sake of simplicity.
  items.splice(10);

  let i = 0;
  while (i < items.length) {
    // Create the first depth listed items that contains the information and put them inside the unordered list one by one.
    let firstLi = document.createElement("li");
    let username = document.createElement("a");

    // Add onclick event each of them because we want to select the element whenever we click on it by "this" keyword.
    firstLi.setAttribute("onclick", "getElement(this)");

    firstLi.appendChild(username);
    firstUl.appendChild(firstLi);

    username.href = items[i].html_url;
    username.target = "_blank";

    // Add class named disable to the element
    username.classList.toggle("disable");

    username.innerText = items[i].login;
    i++;
  }

}


// STAGE TWO //

function getElement(element) {

  let username = element.firstElementChild;
  username.classList.toggle("disable")
  

  // Show the element that has been clicked on in the console
  let selectedLi = element;
  // console.log(selectedLi);



  // Show the element's content
  let firstLiContent = element.innerText;
  // console.log(firstLiContent);



  // Get the repository names of the selected person
  fetch("https://api.github.com/users/" + firstLiContent + "/repos")
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    loopOver1(json);
  })

  
  // Before creating the unordered list inside the listed item that has the name of the user, we check all the listed items if they have any unordered lists inside and we delete them to get a cleaner user interface. 


  // THIS IS IMPORTANT

  const currentUl = document.querySelectorAll('li > ul');
  // console.log(currentUl)
  currentUl.forEach(ul => {
    ul.remove();
  })



  // Create the second depth unordered list, nest it inside the listed item that has the name of the user. After that put the names of repositories inside listed items and put those listed items inside the unordered list.
  let secondUl = selectedLi.appendChild(document.createElement("ul"));
  // console.log(secondUl);

  // TEST TEST TEST

  secondUl.classList.add("none");
  element.classList.add("firstLi")
  secondUl.classList.add("flexForSecondUl");

  secondUl.classList.toggle("none")

  console.log(secondUl.classList)
  

  // secondUl.classList.toggle();
  // console.log(secondUl.classList)



  function loopOver1(json) {

  // Just get the first ten repositorie's names for the sake of simplicity.
    json.splice(10)

    let j = 0;
    while (j < json.length) {
      let secondLi = document.createElement("li");

      secondUl.appendChild(secondLi);
      secondLi.innerText = json[j].name;
      j++;
    }

  }


} 