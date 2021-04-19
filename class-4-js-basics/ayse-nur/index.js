
//1

function compareNumbers(num){
if (num > 10 && num < 20){
  console.log(num);
}
else if (num<100) {
  return num/2;
}
else if (num>20){
  // console.log(num^2) 
  console.log(num*num);
}
else if (num>=100 && num<200){
return num;
}
else {
  return num*2;
}
}

//2

function stringNumber(num,string){
 let len = string.length;
 if(len<num){
   console.log("String was too short.")
   return false
 }
 else if(len===num){
   console.log("Exact match.")
   return num
 }
 else if (len>num) {
   return -1
 }
}
let stringOne = stringNumber(12,"adsx")
let stringTwo = stringNumber(4,"adsx")
let stringThree = stringNumber(3,"adsx")

console.log(stringOne)
console.log(stringTwo)
console.log(stringThree)

//3

function myColors(color) {
  switch (color) {
    case "RED":
      return 0;
      break;
    case "BLUE":
      return 1;
      break;
    case "GREEN":
      return 2;
      break;
  }
}

myColors("BLUE");
myColors("RED");
myColors("GREEN");
