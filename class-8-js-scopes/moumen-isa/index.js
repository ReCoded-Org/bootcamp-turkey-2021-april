// 1- How to make the variable `result` accessible outside the function `add`?


let result;
function add(a, b) {
  result = a + b;
}

add(2, 4);

console.log(result);

//2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// 
// The variable `x` is not yet defined
// 6

//We got an error because the code runs and return an error before we define the value of 'x' so when we change the orders with bringin the value of "x" to the top we get '6'


const x = 6;
if(typeof x == 'undefined') {
  console.log('The variable `x` is not yet defined');
}

console.log(x);

//3- What is the output of the following code? Why?
// at first we call b() which gives us a which is 2 then we call another function which gives us a =2 + c() which is a function, which gives us a = 10 global and that makes (a+c) 2+10 + 12


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
const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

for(const pronoun of pronouns) {
  console.log(pronoun);
}

for(let i=0; i<pronouns.length; i++) {
  console.log(pronouns[i]);
}
// answer: The first code works, the second code gives an error. The first value is not changing so we can use const for it. when it comes to the second it iterates so we have to use let for that.

// 5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?

const m = 10;

function declateAnotherM() {
  const m = 15;
  logM();
    function logM() {
      console.log(m);
    }
}
declateAnotherM();

// We need to put the "logM" function inside the "declateAnotherM" so the 'logM' can take the value from the "declateAnotherM" function.