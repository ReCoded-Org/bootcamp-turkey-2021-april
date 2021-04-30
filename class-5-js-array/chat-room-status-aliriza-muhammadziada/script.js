

members = ["Ammar", "Halit", "Muhanned", "Ali", "Ziada"];


function numberOfMembers(num) {
  if(num.length == 0) {
    return "no one online"
  }
  else if(num.length == 1) {
    return num[0] + " online";
  }
  else if(num.length == 2) {
    return num[0] + " and " + num[1] + "online";
  }
  else if(num.length > 2) {
    return num[0] + ", " + num[1] +  ", and " + (num.length - 2) + " more online"
  }
}

console.log(numberOfMembers(members));

// If there are n>2 people, return the first two names and add "and n-2 more online".
