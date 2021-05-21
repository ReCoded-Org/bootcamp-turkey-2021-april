//1)
const capitalize = (string) => {
return string.split(" ").map(word => {
return word.split("").map(letter => {
return letter.toUpperCase();
}).join('')
}).join(' ')
}
// capitalize('whoop');
// capitalize('oh hey gurl');


//2)
// const swapCase = (string) => {
// return string.split(" ").map((word, index) => {
// return (index % 2 === 0) ? capitalize(word) : word
// }).join(' ');
// }

const swapCase = (string) => {
return string.split(" ").map((word, index) => {
if (index % 2 === 0) {
return capitalize(word) 
} else {
return word 
}
}).join(' ');
}

swapCase("hey gurl, lets javascript together sometime")

//3)
const shiftLetters = (string) => { return string.split(" ").map(word => { return word.split("").map(letter => { return String.fromCharCode((letter.charCodeAt() + 1)) }).join('') }).join(' ') }

// shiftLetters('hello')
// shiftLetters ('abcxyz')