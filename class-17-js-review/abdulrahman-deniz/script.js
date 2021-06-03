//Partners Abdulrahman Taji and Deniz

// Q1: Write a variable that fetches the data from bootcamp.json and uses `await` to store it. We didn't learn await; you will have to practice your Google skills to look up an example (it's similar to .then()).
// To be clear:
// * jsonResult is not a function. When you console.log it, it should be an object
// * it should not depend on any variables outside of scope
// * it should not modify any other variables
// 
// Every question after question 1 should look something like:
// jsonResult.map(), jsonResult.filter(), etc.
// const jsonResult = <<your code here>>;

async function getJson () {
  const response = await fetch("./bootcamp.json");
  const data = await response.json();
  // console.log(data)
  return data;
}


// Q2: Using map(), write a function that returns a new array with the students' first names with "-" before each one and displays it in the div with ID "studentsFirstName".

async function q2 () {
  const div = document.querySelector('#studentsFirstName')
  const object = await getJson()
  const result = object.students.map(element => "-" + element)
  div.innerHTML = result
}
q2()

// Q3: Using filter(), write a function that returns an array with students' names that starts with the letter 'm' and display it in the div with ID "studentsNamesStartWthM".

async function q3 () {
  const div = document.querySelector('#studentsNamesStartWthM')
  const object = await getJson()
  const result = object.students.filter(student => student.charAt(0) === "M" || student.charAt(0) === "m" )
  div.innerHTML = result
}
q3()

// Q4: Using reduce(), Write a function that returns the number of students that their first name start with the letter 'a' using reduce and display it in div with ID "NumberOfStudentsNamesStartsWithA"

async function q4 () {
  const div = document.querySelector('#NumberOfStudentsNamesStartsWithA')
  const object = await getJson()
  const result = object.students.reduce((acc,curr) => {
  if (curr.charAt(0) === "A" || curr.charAt(0) === "a")
    {return acc + 1}
    return acc},0)
  div.innerText = result  
}
q4()

// Q5: Write a function that returns the index of the first student name that starts with the letter 'h' and display it in the div with ID "IndexOfFirstStudentNameStartsWithH".


async function q5 () {
  const div = document.querySelector('#IndexOfFirstStudentNameStartsWithH')
  const object = await getJson()
  const result = object.students.findIndex(word => word.charAt(0) === "H" || word.charAt(0) === "h")
  div.innerText = result  
}
q5()

// Q6: Write a function that adds the instructors array to the beginning of the students array and returns a new array called everybody.
// 1) Console log the new array
// 2) Use a spread operator to achieve this

async function q6 () {
  const object = await getJson()
  const result = [...object.instructors, ...object.students]
  console.log(result)
}
// q6()

// Q7: Write a function to update the key: "title" to the value "Re:Coded Istanbul Bootcamp" to the object that you fetched in Q1.
// Did this modify the JSON file? Why or why not? 

async function q7() {
  const object = await getJson()
  object.title = "Re:Coded Istanbul Bootcamp"
  console.log(object)
}
q7()
//It didn't change the JSON, it only changed the local object that is in memory and in this function scope which is created from the JSON file. 

// Q8: Write a function to add the key: "program manager" and the value "Jaime Mikush" to the object that you fetched in Q1.

async function q8() {
  const object = await getJson()
  object["program manager"] = "Jaime Mikush"
  // console.log(object)
}
q8()

// Q9: Print the object that you fetched in Q1. 

async function q9() {
  const object = await getJson()
  // console.log(object)
}
q9()
// good luck 😈