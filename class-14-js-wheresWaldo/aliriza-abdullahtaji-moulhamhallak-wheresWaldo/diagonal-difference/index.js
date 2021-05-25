
// Conclusion
function diagonalDifference(array) {

    let leftToRightSum = leftToRight(array);
    let rightToLeftSum = rightToLeft(array);
  
    if (leftToRightSum > rightToLeftSum) {
      return leftToRightSum - rightToLeftSum;
    }
    else if (rightToLeftSum > leftToRightSum) {
      return rightToLeftSum - leftToRightSum;
    }
  
};

// diagonalDifference(array);

//                              //                            //
  
// Get the sum of left to right diagonal 
function leftToRight(array) {

    let arrayToSum = [];

    let i = 0;
    while (i < array.length) {
        arrayToSum.push(array[0 + i][0 + i])
        i++;
    }

    let sum = arrayToSum.reduce((accumulator, currentValue) => accumulator += currentValue);
    return sum;
};
//                              //                                //

// Get the sum of right to left diagonal
function rightToLeft(array) {

    let arrayToSum = [];

    let i = 0;
    while (i < array.length) {
        arrayToSum.push(array[0 + i][array[0 + i].length - 1 - i])
        i++;
    }

    let sum = arrayToSum.reduce((accumulator, currentValue) => accumulator += currentValue);
    return sum;
};
//                              //                               //


let array = [
[11, 2, 4],
[4,  5,  6],
[10, 8, -12]
];