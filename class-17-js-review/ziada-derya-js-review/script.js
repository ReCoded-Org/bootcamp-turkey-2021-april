// Q1: Write a variable that fetches the data from bootcamp.json and uses `await` to store it. We didn't learn await; you will have to practice your Google skills to look up an example (it's similar to .then()).
// To be clear:
// * jsonResult is not a function. When you console.log it, it should be an object
// * it should not depend on any variables outside of scope
// * it should not modify any other variables
// 
// Every question after question 1 should look something like:
// jsonResult.map(), jsonResult.filter(), etc.
// const jsonResult = <<your code here>>;


async function fetchBootcamp() {
    const url = './bootcamp.json'
    const data = await fetch(url)
    const jsonResult = await data.json()
    // console.log(jsonResult)
    return jsonResult
}

async function renderStudent(){
  console.log(await fetchBootcamp())

  const jsonResult = await fetchBootcamp()
  
  
  // starting challenge 2
  const studentsFirstNameDiv = document.querySelector("#studentsFirstName")
  const challeng2 = jsonResult.students.map (obj => {
    return "-" + obj.split(' ').slice(0,1)
    })
    console.log(challeng2)
    studentsFirstNameDiv.innerText = challeng2.join("\n")


  // starting challenge 3
  const studentsNamesStartWthM = document.querySelector('#studentsNamesStartWthM')
  
  const challenge3 = jsonResult.students.filter(name => {
    
    if (name.charAt(0) === 'M') {
      return name
    }
  })
  // console.log(challenge3)
  studentsNamesStartWthM.innerText = challenge3.join("\n")


  // starting challenge 4
  const numberOfStudentsNamesStartsWithA = document.querySelector('#NumberOfStudentsNamesStartsWithA')

  const challenge4 = jsonResult.students.reduce((acc, curr) => {
  
    if (curr.charAt(0) === "A" || curr.charAt(0) === "a"){
     acc++
    }
    return acc
  }, 0)
  console.log(challenge4)

  numberOfStudentsNamesStartsWithA.innerText = challenge4

  // starting challenge 5
  const indexOfFirstStudentNameStartsWithH = document.querySelector('#IndexOfFirstStudentNameStartsWithH')
  const challenge5 = jsonResult.students.findIndex(name => name.charAt(0)=== "H")
  console.log(challenge5)

  indexOfFirstStudentNameStartsWithH.innerText = challenge5

  // starting challenge 6
  const challenge6 = () => {
    let arrInst = jsonResult.instructors
    const arrStud = jsonResult.students 
    let everybody = []
    everybody =[...arrInst,...arrStud]
    console.log(everybody)
    return everybody
  }
  challenge6()


  // starting challenge 7
  const challenge7 = () =>{
    jsonResult.title = "Re:Coded Istanbul Bootcamp"
    console.log(jsonResult)
}
challenge7()


// starting challenge 8 and 9
  const challenge8and9 = () =>{
    jsonResult['program manager'] = "Jaime Mikush"
    console.log(jsonResult)
}

challenge8and9 ()



}


renderStudent()



// Q2: Using map(), write a function that returns a new array with the students' first names with "-" before each one and displays it in the div with ID "studentsFirstName".





// Q3: Using filter(), write a function that returns an array with students' names that starts with the letter 'm' and display it in the div with ID "studentsNamesStartWthM".




// Q4: Using reduce(), Write a function that returns the number of students that their first name start with the letter 'a' using reduce and display it in div with ID "NumberOfStudentsNamesStartsWithE"





// Q5: Write a function that returns the index of the first student name that starts with the letter 'h' and display it in the div with ID "IndexOfFirstStudentNameStartsWithH".




// Q6: Write a function that adds the instructors array to the beginning of the students array and returns a new array called everybody.
// 1) Console log the new array
// 2) Use a spread operator to achieve this




// Q7: Write a function to update the key: "title" to the value "Re:Coded Istanbul Bootcamp" to the object that you fetched in Q1.
// Did this modify the JSON file? Why or why not? 



// Q8: Write a function to add the key: "program manager" and the value "Jaime Mikush" to the object that you fetched in Q1.

// Q9: Print the object that you fetched in Q1. 

// good luck 😈