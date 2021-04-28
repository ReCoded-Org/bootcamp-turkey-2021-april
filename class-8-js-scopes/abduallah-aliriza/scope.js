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
2-  Explain the error in the following code, and how 
will you fix it so that it will output:
6

The variable `x` is not yet defined */


const x = 6;

if(typeof x == 'undefined') {
  console.log('The variable `x` is not yet defined');
}
console.log(x)

/*
the varible x is not defined becase it is after the function
the solution is : 
declare x variable in goloble scope  */




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


const a = 10;

const b = (function(){
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

// 4- Explain which of the following loops will result in an error? Why not the other?

const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];
for(const pronoun of pronouns) {
  console.log(pronoun);
}

for(let i=0; i<pronouns.length; i++) {
  console.log(pronouns[i]);
}

/*
problem in second loop 
 We declared the i variable with the changable let keyword.
*/


// 5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?

const m = 10;

function declateAnotherMt() {
  const m = 15;
  logM();


  function logM() {
    console.log(m);
  }
}

declateAnotherMt();


/*
 Because it is not in the scope of the reassigned variable, it doesn't return the reassigned variables value. What we basically did was

 */ 
