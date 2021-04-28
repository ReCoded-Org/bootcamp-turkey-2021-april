const btn = document.getElementById("lib-button");
  btn.addEventListener('click', function makeMadLibs(e) {
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value; 
    const story = document.getElementById("story");
    story.innerText = `${person} ${adjective} ${noun}`;
});
