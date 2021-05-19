const society1 = ["Adam", "Sarah", "Malcolm"];
const society2 = ["Harry", "Newt", "Luna", "Cho"];
const society3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];

function societyName (nameLetters){
  let name1 = "";
  let name2 = "";
  let name3 = "";

  society1.sort();
  society2.sort();
  society3.sort();

  for (i = 0; i < society1.length; i++){
    name1 += society1[i].charAt(0);
  }
  for (i = 0; i < society2.length; i++){
    name2 += society2[i].charAt(0);
  }
  for (i = 0; i < society3.length; i++){
    name3 += society3[i].charAt(0);
  }

  if (nameLetters == name1){
    return society1;
  }
  else if (nameLetters == name2){
    return society2;
  }

  else if (nameLetters == name3){
    return society3;
  }
}

console.log(societyName("AMS"));
console.log(societyName("CHLN"));
console.log(societyName("CJMPRR"));