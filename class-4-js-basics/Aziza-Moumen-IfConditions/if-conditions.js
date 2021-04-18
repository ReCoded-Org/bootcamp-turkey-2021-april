function challenge1(a){
const number = parseInt(a)
//random number is bigger than 10 and less than 20
if (number>10 && number<20) {
console.log(number)
}
//random number is less than 100, lets make result divided to two
else if (number<100){
return (number/2);
}
//random number is less than 20, lets make result multiply to itself
else if (number>20){
console.log(number*number)
}
//random number is bigger or equal than 100 and less than 200
else if (number>=100 && number<200){
return number;
}
//random number is bigger or equal than 100, lets make result multiply to two
else if (number>=200){
return (number*2);
}}


/*. Challenge 2 */
function challenge2(a, b){
let number = parseInt(a)
let wordLength = b.length;
//if the word is less than number
if (wordLength < number){
console.log("String was too short.");
return false;
}
//if the word is equal to number
else if (wordLength === number){
console.log("Exact match.");
return number;
}
// of the word is bigger than number
else if (wordLength > number){
return -1;
}}
// lets put random numbers and words
let caseone = challenge2(1,"xxx");
let casetwo = challenge2(2,"xx");
let casethree = challenge2(3,"x");
// lets see the results below
console.log(caseone);
console.log(casetwo);
console.log(casethree);
// addind codes switch case
function extracode(b){
switch (b){
case "RED":return 0;
case "BLUE": return 1;
default: return 2;
}}
