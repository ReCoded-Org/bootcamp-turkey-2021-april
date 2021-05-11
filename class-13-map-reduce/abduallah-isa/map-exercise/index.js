
// Q1 


const  string =['isa, abduallah']

let makeUpperCase = string.map(string =>
string.toUpperCase())
console.log(makeUpperCase)



// Q2

const capitalize = (string) => {
return string.split(" ").map(word => {
return word.split("").map(letter => {
return letter.toUpperCase();
}).join('')
}).join(' ')
}

const swapCase = (string) => {
return string.split(" ").map((word, index) => {
return (index % 2 === 0) ? capitalize(word) : word
}).join(' ');
}


console.log(swapCase("hey gurl, lets javascript together sometime"))