
const  candles = [3, 2, 1, 3, 5, 3, 5, 3 , 5]
//console.log(value)

// function to count hoe many time repate the maximum value // in the array 
function birthdayCakeCandles(candles){
  let maxValue = Math.max(...candles)
    let count = 0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] === maxValue){
             count++
        }
    }
    return count;
}

console.log(birthdayCakeCandles(candles))
