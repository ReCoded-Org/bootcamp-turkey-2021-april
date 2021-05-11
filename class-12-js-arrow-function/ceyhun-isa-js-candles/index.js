let candles = [4, 4, 1, 3];
let maxNumber = Math.max(...candles);
let count = 0

for (i = 0; i < candles.length; i++) {
  if (candles[i] === maxNumber) {
    count++
  }
}

console.log("Count Heighest Candle: ", count)



// Another Version
// let candles = [4,4,1,3];
// let maxNumber = Math.max(...candles);
// let lengthCandles = candles.filter(x => x === maxNumber).length
// console.log("Count Heighest Candle: ",lengthCandles)