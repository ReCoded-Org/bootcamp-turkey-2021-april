// Q1: Write a variable that fetches the data from bootcamp.json and uses `await` to store it. We didn't learn await; you will have to practice your Google skills to look up an example (it's similar to .then()).
// To be clear:
// * jsonResult is not a function. When you console.log it, it should be an object
// * it should not depend on any variables outside of scope
// * it should not modify any other variables
// 
// Every question after question 1 should look something like:
// jsonResult.map(), jsonResult.filter(), etc.
// const jsonResult = <<your code here>>;


const jsonResult = async () => {
  const response = await fetch('/bootcamp.json')
  const users = await response.json() 

  return users
}

const renderStudents = async() => {
  let data = await jsonResult()
  // console.log(data)

}

renderStudents();



// Q2: Using map(), write a function that returns a new array with the students' first names with "-" before each one and displays it in the div with ID "studentsFirstName".

const q2renderStudents = async() => {
  let data = await jsonResult()



  let htmlPart = document.getElementById("studentsFirstName")

  let dashedName = data.students.map(item => {
    let dividedArr = item.split(' ')



    let emptyArr = []
    emptyArr.push(dividedArr[0])



    return `-${emptyArr}<br>`
  }).join(" ")
  
  htmlPart.innerHTML = dashedName

}

q2renderStudents()


// Q3: Using filter(), write a function that returns an array with students' names that starts with the letter 'm' and display it in the div with ID "studentsNamesStartWthM".

const q3renderStudents = async() => {
  let data = await jsonResult()

  function checkMLetter(letter){
    if(letter.charAt(0) == 'M'){
      return letter
    }
  }


  let htmlPart = document.getElementById("studentsNamesStartWthM")

  let mName = data.students.filter(checkMLetter)
  
  htmlPart.innerHTML = mName

}

q3renderStudents()


// Q4: Using reduce(), Write a function that returns the number of students that their first name start with the letter 'a' using reduce and display it in div with ID "NumberOfStudentsNamesStartsWithE"

const q4renderStudents = async() => {
  let data = await jsonResult()


let countedNames = data.students.reduce(function(allNames, name){

  if(name[0] == "E" || name[0] == "e"){
    allNames++
  }
  return allNames
},0)

// console.log(countedNames)

  let htmlPart = document.getElementById("NumberOfStudentsNamesStartsWithE") 
  htmlPart.innerHTML = countedNames

}

q4renderStudents()



// Q5: Write a function that returns the index of the first student name that starts with the letter 'h' and display it in the div with ID "IndexOfFirstStudentNameStartsWithH".


const q5renderStudents = async() => {
  let data = await jsonResult()
  // console.log(data.students)


  for(let i = 0; i < data.students.length; i++){
    if(data.students[i].indexOf("H") == 0){
      let htmlPart = document.getElementById("IndexOfFirstStudentNameStartsWithH")
      return htmlPart.innerHTML = data.students[i]
    }
  }
}
// findIndex!
q5renderStudents()




// Q6: Write a function that adds the instructors array to the beginning of the students array and returns a new array called everybody.
// 1) Console log the new array
// 2) Use a spread operator to achieve this


const q6renderStudents = async() => {
  let data = await jsonResult()
  let studentsArray = data.students
  let instructorsArray = data.instructors
  //  console.log(studentsArray)
  let everybody = [];
  everybody = [...instructorsArray,...studentsArray]
  // console.log(everybody)
  let html = document.getElementById("listOfEverybody") 
  html.innerHTML = everybody
}

q6renderStudents()



// Q7: Write a function to update the key: "title" to the value "Re:Coded Istanbul Bootcamp" to the object that you fetched in Q1.
// Did this modify the JSON file? Why or why not? 



const q7renderStudents = async() => {
  let data = await jsonResult()
  let newData = {...data}
  newData.title = "Re:Coded Istanbul Bootcamp"
  console.log(newData)
  return newData
}

q7renderStudents()

// // Q8: Write a function to add the key: "program manager" and the value "Jaime Mikush" to the object that you fetched in Q1.
const addKey = async() => {
  let data = await jsonResult()
  data['program manager'] = 'Jaime Mikush'
  // Object.assign(data, {"program manager": "Jaime Mikush"});
  console.log(data)
}
addKey()


// // Q9: Print the object that you fetched in Q1. 

const print = async() => {
  let data = await jsonResult()
  console.log(data)
}
print()
// good luck 😈