function societyName(arr) {
    let finalWord = ''
    const newArray = arr.sort()
    for (let i = 0; i < newArray.length; i++) {
        finalWord = finalWord + newArray[i].charAt(0)
    }
    return finalWord
}

console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]))
  //  ➞ "CJMPRR"
