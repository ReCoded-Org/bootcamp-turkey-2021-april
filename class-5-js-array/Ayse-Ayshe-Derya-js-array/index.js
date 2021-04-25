
// Challenge 1
function reverseCase (string){
  let newString = "";
  for (let i = 0; i < string.length ; i++){
    if (string[i] == string[i].toUpperCase()){
      newString += string[i].toLowerCase();
    }else{
      newString += string[i].toUpperCase();
    } 
  }  
return newString;  
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));
console.log(reverseCase("sPoNtAnEoUs"))


// Challenge 2
// let members = ["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"];

function onlineMembers (member){
  if (member.length === 0){
    return "no one online"
  } else if (member.length === 1) {
    return (member[0] + " " + "online")
  } else if (member.length === 2) {
    return (member[0] + " and " + member[1] + " " + "online")
  } else if (member.length > 2) {
    return (member[0] + ", " + member[1] + " and " + (member.length - 2) + " more online")
  }
}

onlineMembers(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]);