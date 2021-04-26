const button = document.getElementById('lib-button');

button.addEventListener('click', function(makeMadLib) {
  let story = document.getElementById('story');
  let noun = document.getElementById('noun').value;
 
  let adjective = document.getElementById('adjective').value;

  let someonesName = document.getElementById('person').value;

  let string = document.createElement('p');
  string = `${someonesName} really likes ${adjective} ${noun}`;
  console.log(string);
  
  story.innerHTML = (string);

  // Pamela really likes pink cucumbers.


})

  