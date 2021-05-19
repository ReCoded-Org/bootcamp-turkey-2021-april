// Partners Deniz an Mohammed Alalaya

const capitalize = function(string) 
{
  const arrayOfChars = string.split('');
  const final = arrayOfChars.map(str => str.toUpperCase());
  return final.join('')
}
// capitalize('whoop') // => 'WHOOP'
// capitalize('oh hey gurl') // => "OH HEY GURL"


const swapCase = string => 
{
  const arrayOfWords = string.split(" ");
  const final = arrayOfWords.map((word, index) =>
  {
    if (index % 2 == 0)
    {
      return capitalize(word);
    }else{
      return word
    }
  })
  return final.join(' ')
}

// swapCase('hey gurl, lets javascript together sometime')


const shiftLetters = string => {
  const arrayOfChars = string.split('');
  // console.log(arrayOfChars)
  const final = arrayOfChars.map(string =>String.fromCharCode(string.charCodeAt()+1));
  // console.log(final)
  return final.join('')
}

// shiftLetters('hello')