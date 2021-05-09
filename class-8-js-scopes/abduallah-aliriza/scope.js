// 1- How to make the variable `result` accessible outside the function `add`?
let result;
function add(a, b) {
  result = a + b;
}
add(2, 4);
console.log(result);  
/*
description : 
- we need to declear a result variable outside the function wich is glopel variable 
*/
/*
2-  Explain the error in the following code, and how will you fix it so that it will output: 6
The variable `x` is not yet defined */
const x = 6;
if(typeof x == 'undefined') {
  console.log('The variable `x` is not yet defined');
}
console.log(x)
/*
the varible x is not defined becase it was after the function called so there were no x variable when function was running.
Solution: Declare x before the function runs at global scope. */
//3- What is the output of the following code? Why?
const a = 10;
const b = (function(){
  const a = 2;
  return function () {
    console.log(a + c());
  };
}());
const c = function() {
  return a;
}
b();
let a = 10;
let b = (function(){
  const a = 2;
  //console.log(a)
  return function () {
    console.log(a + c());
  };
}());
const c = function() {
  return a;
}
b();
/* First, the function inside the b variable called. Then the function inside b reassigned the value of b to 2 and returned a value inside of a function which sums up a and c function and as a result of this, the function inside c variable called and that function returnd the value of global value of a which is 10. So what happened was we summed up the global vlaue of a and the function scope value of a which is 10 and 2. The result is 12. */
// 4- Explain which of the following loops will result in an error? Why not the other?
const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];
for(const pronoun of pronouns) {
  console.log(pronoun);
}
for(let i = 0; i < pronouns.length; i++) {
  console.log(pronouns[i]);
}
/*
The initialiazion variable needs to get reassigned while loop proceeds. That's why we need to change the variables keyword to let in order to make it change as loop proceeds.
*/
// 5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?
const m = 10;
function declareAnotherMt() {
  const m = 15;
  logM();
  function logM() {
    console.log(m);
  }
}
declareAnotherMt();
/*
 Because it is not in the scope of the reassigned variable, it doesn't return the reassigned variables value. What we basically did was get that reassigned variable in the same function scope with declareAnotherMt.
 */