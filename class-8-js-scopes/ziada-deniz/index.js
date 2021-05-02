// 1- How to make the variable `result` accessible outside the function `add`? Need to declare on the global scope

let result;
function add(a, b) {
   result = a + b;
   return result
}

add(2, 4);

console.log(result);

//2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// 
// The variable `x` is not yet defined
// 6


// the error happens because the variable x wasn't declared yet. so we need to declare it in the global scope and keep it unassigned, and then assign it inside the function. 
let x;

if(typeof x == 'undefined') {
  console.log('The variable `x` is not yet defined');
}

x = 6;

console.log(x);


//3- What is the output of the following code? Why?
// on line 38 c() equals to 10 since it returns a=10 from the global scope, a=2 in the const b function scope and the output is 12.
const a = 10;

const b = (function(){
  const a = 2;
  return function () {
    console.log(a + c());
  };
}()); //what about all these parenthases.

const c = function() {
  return a; //a=10
}

b();

//4- Explain which of the following loops will result in an error? Why not the other?
const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

for(const pronoun of pronouns) {
  console.log(pronoun);
}
// in the next line, i should be varibale (let) because we are reassigning it incrementally by one.
for(let i=0; i<pronouns.length; i++) {
  console.log(pronouns[i]);
}

//5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?
//Function should be declared inside declateAnotherM function scope.
const m = 10;


function declateAnotherM() {
  const m = 15;
  logM();
  function logM() {
  console.log(m);
}
}
declateAnotherM();