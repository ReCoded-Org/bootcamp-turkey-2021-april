// 1- How to make the variable `result` accessible outside the function `add`?

let result;
function add(a, b) {
return result = a + b;
}

add(2, 4);

console.log(result); 
//2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// 
// The variable `x` is not yet defined
6

if(typeof x == 'undefined') {
   console.log('The variable `x` is not yet defined');
 }
{ 
const x = 6;

console.log(x);
} 

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
// Function C uses global scope a value as 10 so c() is 10. a is 2 in local scope so a+c() will be 12. 

//4- Explain which of the following loops will result in an error? Why not the other?
 const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

 for(const pronoun of pronouns) {
   console.log(pronoun);
 }

 for(let i=0; i<pronouns.length; i++) {
   console.log(pronouns[i]);
 }  //const should be let.

//5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?

 const m = 10;

 function declateAnotherM() {
  const m = 15;
  logM();
  }

  function logM() {
    console.log(m);
 }

 declateAnotherM();
 //the output will be 10 because of the global scope, logM(); will give output of 10. If we put const m = 15 as a global scope, or if we write const m =15; inside of the function logM(), the output will  be 15. 