// Partners: Bilal && Khadija.

function birthdayCakeCandles(candles){            // Taking an array of candles
        
        let max = Math.max(...candles);                 // Locating the tallest
        //console.log(max);
        let count = 0;                                  // Declaring counter.

        for (let i = 0; i < candles.length;i++){        // Iterating through candles list
                if (candles[i] == max) count++;               // increasing counter.
        }

        return count;                                   // Returning count.
}

candles = [4,4,1,3];
console.log(birthdayCakeCandles(candles));
console.log(birthdayCakeCandles([3,2,1,3]));