let arr = [4, 9, 100, "I", 4, 100, 9, 1];
const point = "I";
const indexToSplit = arr.indexOf(point);

let arrA = arr.splice(0, indexToSplit);
let arrb = arr.splice(-indexToSplit);

console.log("arrA array ", arrA);
console.log("arrb array ", arrb);
console.log("\n");

let sumA = 0;
let sumb = 0;

function balancingScale() {
  // summiton process for the array element
  for (let i = 0; i < arrA.length; i++) {
    sumA = sumA + arrA[i]; // first array
  }

  for (let j = 0; j < arrb.length; j++) {
    sumb = sumb + arrb[j]; // second array
  }

  // condition for comparing  the result of sumA && sumb
  if (sumA < sumb) {
    console.log(`summiton of ${sumA} < ${sumb} so it will tip right `);
  } else if (sumA > sumb) {
    console.log(`summiton of ${sumA} > ${sumb} so it will tip left `);
  } else {
    console.log(`summiton of ${sumA} = ${sumb} so it will balanced`);
  }
}

// Calling the function
balancingScale();
