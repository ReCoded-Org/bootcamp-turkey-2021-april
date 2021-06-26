// 1- How to make the variable `result` accessible outside the function `add`?
// ctrl + k + c

/*
function add(a, b) {
  let result;
  result = a + b;
  return result
}

add(2, 4);
*/
// console.log(result);





//2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// 
//The variable `x` is not yet defined
// 6
/*
if(typeof x == 'undefined') {
  x = 6;
  console.log('The variable `x` is not yet defined');
}
console.log(x);
*/





//3- What is the output of the following code? Why?
/*
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
*/
// C func uses global scope a value -10- in line 34 a var is local scope



//4- Explain which of the following loops will result in an error? Why not the other?

const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

for(const pronoun of pronouns) {
  console.log(pronoun);
}

for(const i=0; i<pronouns.length; i++) {
  console.log(pronouns[i]);
}
// bc const is reassigned in the second loop, which throws an error. using let would do the trick




//5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?
/*
const m = 10;

function declateAnotherM() {
  const m = 15;
  logM();
    function logM() {
    console.log(m);
  }
}

declateAnotherM();
*/
//Executing in local scope