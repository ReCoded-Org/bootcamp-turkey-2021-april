## Instructions For MAP Exercises


1) Write a function capitalize that takes a string and uses .map to return the same string in all caps. 

Example
```
capitalize('whoop') // => 'WHOOP'
capitalize('oh hey gurl') // => "OH HEY GURL"
```
```
const capitalize = function(string){
  // code code code!
}
```

2) Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() function to return a string where every other word is in all caps. 
Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 

example 
```
swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
```
```
const swapCase = function(string){
  // Codeeeee
}
```
3) Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() and see if you can use Ascii code to accomplish this.

```
shiftLetters('hello') // => 'ifmmp'
shiftLetters('abcxyz') // => "bcdyz{"

const shiftLetters = function(string){
  // code!
}
```