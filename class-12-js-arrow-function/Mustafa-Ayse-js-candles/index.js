function birthdayCakeCandles (array) {
   let count = 0;
   let maxNumber = Math.max(...array)
   for (i=0;i<array.length;i++){
     if (array[i]===maxNumber){
       count++
     }
   
   }

  
   console.log(count)

}
birthdayCakeCandles([1,2,2,2,2,2,2,2,]);


// Another Version
// let candles = [4,4,1,3];
// let maxNumber = Math.max(...candles);
// let lengthCandles = candles.filter(x => x === maxNumber).length
// console.log("Count Heighest Candle: ",lengthCandles)


/////////////////////////////// By Mustafa/Ayşe













