// 1- How to make the variable `result` accessible outside the function `add`?


//let result;
// function add(a, b) {
  //  result = a + b;
 //   console.log(result);
 //}
// add(2, 4);

//2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// because the variable x was declared after the if condition
// The variable `x` is not yet defined
// 6
//let x ;
 //if(typeof x == 'undefined') {
   //console.log('The variable `x` is not yet defined');
   
 //}

 //console.log(x);

//3- What is the output of the following code? Why?

 //const a = 10;

//  const b = (function(){
//    const a = 2;
//   return function () {
//     console.log(a + c());
//   };
//  }());

// const c = function() {
//   return a;
//  }

// b();

//4- Explain which of the following loops will result in an error? Why not the other? the first loop works because we are declaring the const pronoun with the same value of const pronouns and in the it obviusly will be true ..
//in the second one we are trying to change a value of a const which is impossible 
// const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

// for(const pronoun of pronouns) {
// console.log(pronoun);
// }

// for(const i=0; i<pronouns.length; i++) {
//   console.log(pronouns[i]);
// }

//5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?

//  const m = 10;

//  function declateAnotherM() {
//    const m = 15;
//    logM();
//     function logM() {
//    console.log(m);
//  }
//  }

//  declateAnotherM();