const candles = [12, 12, 5, 7, 12, 2, 11, 12,]

function birthdayCakeCandles(candleObject) {
  const maxHeight = Math.max(...candleObject);
  console.log(maxHeight)
  let maxHeightCount = 0;  
    for(let i = 0; i < candleObject.length; i++){
        if (candleObject[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    return maxHeightCount;
}

birthdayCakeCandles(candles);
