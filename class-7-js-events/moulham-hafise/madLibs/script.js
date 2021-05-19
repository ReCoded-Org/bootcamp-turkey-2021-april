const nounValue = document.getElementById("noun");
const adjValue = document.getElementById("adjective");
const nameValue = document.getElementById("person");


const button = document.getElementById("lib-button")
  button.addEventListener('click', function(){
    let div = document.getElementById('story');
    div.innerText = nameValue.value + ' really enjoys ' + 'the '+  adjValue.value + ' ' + nounValue.value;
    console.log(nounValue.value);
  })

