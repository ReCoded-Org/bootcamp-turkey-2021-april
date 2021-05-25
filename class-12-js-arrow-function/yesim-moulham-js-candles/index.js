const candle = [3, 2, 1, 3]; 

function birthdayCakeCandles() {
  let freq = 0;
  let max = Math.max(...candle);
  console.log(max)

  for (let i = 0; i < candle.length; i++){
    if (candle[i] === max){
      freq++;
    } 
  }
return freq;
}
birthdayCakeCandles(candle)
