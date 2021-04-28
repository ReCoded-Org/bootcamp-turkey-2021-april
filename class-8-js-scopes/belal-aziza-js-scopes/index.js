// Partners: Belal Awad && Aziza iliasova

// 1- How to make the variable `result` accessible outside the function `add`?
// move it outside :)

let result;           // The moved item from the function
function add(a, b) {
   result = a + b;
}
add(2, 4);
console.log(result);

// 2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// 
// The variable `x` is not yet defined
// 6
// we just move const x ubove the function to be declared

const x = 6;         // The moved item from below the function        
if(typeof x == 'undefined') {
  console.log('The variable `x` is not yet defined');
}
console.log(x);


//3- What is the output of the following code? Why?
// output is 12. 
// in the first function a local variable has been declared for a, while in the second one it takes the global variable since there fail to exist any local variable a in that funciton so the output is 12;

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

//4- Explain which of the following loops will result in an error? Why not the other?
// the second one because for loop takes a variable and keeps changing that variable to satisfy the loop, and using const wont help us do that :)

const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

for(const pronoun of pronouns) {
  console.log(pronoun);
}

for(let i=0; i<pronouns.length; i++) {    // Changed const i to let i
  console.log(pronouns[i]);
}


// 5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?
// 10, in order o print 15 we should declare const m = 15; in the other function instead! :)
const m = 10;

function declateAnotherM() {
  const m = 15;
  logM();
}

function logM() {
  const m = 15;                 // Added this line to make it print 15, otherwise delete it
  console.log(m);
}

declateAnotherM();