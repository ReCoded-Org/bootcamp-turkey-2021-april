// Partners: Bilal && Khadija.

function scaleTip(weights){
  
        let left = 0, right = 0;
      
        for (let i = 0; i < weights.length; i++){       // Iterating throught the list of wights
          if (weights[i] === 'I'){                      // If we see "I" do the following
            for (let j = 0; j < i; j++){                // Rotate from the begining of the array until "I"
              left += weights[j];                       // Sum up the left side.
            }
            for (let j = i+1; j < weights.length; j++){ // Rotate from after "I" to the end of weights array.
              right += weights[j];                      // Sum up the right side.
            }
          }  
        }
      
        if(left < right) return `${left} < ${right} the scale is tipping right`;      // checking if left < right
        else if(right < left) return `${left} > ${right} the scale is tipping left`;  // Checking if left > right
        else return `${left} = ${right} the scale is balanced`;                       // Checking if left == right.
}

console.log(scaleTip([0, 0, "I", 1, 1]));
console.log(scaleTip([1, 2, 3, "I", 4, 0, 0]));
console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]));