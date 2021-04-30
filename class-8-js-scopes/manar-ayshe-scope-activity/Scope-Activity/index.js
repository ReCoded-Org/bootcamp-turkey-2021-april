// 1- How to make the variable `result` accessible outside the function `add`?

// we don't need to declare the addition by let 

// function add(a, b) {
//    result = a + b;
// }

// add(2, 4);

// console.log(result);


//2-  Explain the error in the following code, and how 
// will you fix it so that it will output:
// 
// The variable `x` is not yet defined
// //6

// we sould declare the x valiable befor if condition

// const x = 6;

// if(typeof x == 'undefined') {
//   console.log('The variable `x` is not yet defined');
// }

// console.log(x);

//3- What is the output of the following code? Why?

// the output is 12 because inside the function a declared by 2 outside the funciton the c variable declared be function returned to a = 10

// const a = 10;

// const b = (
//     function  () {
//         const a = 2;
//         return  function  () {
//             console.log(a);
//             console.log(a + c()); 
            
//         };
//     }
//         ()
      
// );

// const c = function () {
//     return a; // 10
// }


// b();

//4- Explain which of the following loops will result in an error? Why not the other?

//the second loop is error because inside the loop we have a changeble variable souldn't declare by const

// const pronouns = ['I', 'YOU', 'SHE', 'HE', 'IT', 'WE', 'THEY'];

// for(const pronoun of pronouns) {
//   console.log(pronoun);
// }
// let i=0;
// for( i=0; i<pronouns.length; i++) {
//   console.log(pronouns[i]);
// }

// 5- What is the output of the following code? Why?
// What should be done to make it display the other
// value of `m` which is 15?

// the out put is 10 because the m variable value is 10 and it didn't change by the function because the funcyion didn't return

// we return m in the fuction then the valus is changed to 15

// const m = 10;

// function declateAnotherM() {
//   let m = 15;
//   return m;
// logM();
// }

// function logM() {
//   console.log(m);
// }

// declateAnotherM();
