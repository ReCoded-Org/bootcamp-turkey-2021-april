// Q1: Write a variable that fetches the data from bootcamp.json and uses `await` to store it. We didn't learn await; you will have to practice your Google skills to look up an example (it's similar to .then()).
// To be clear:
// * jsonResult is not a function. When you console.log it, it should be an object
// * it should not depend on any variables outside of scope
// * it should not modify any other variables
// 
// Every question after question 1 should look something like:
// jsonResult.map(), jsonResult.filter(), etc.
// const jsonResult = <<your code here>>;

const fetchData = async (path) => { 
  
  let response = await fetch(path);
  let jsonResult = await response.json();
  // const jsonStudents = await jsonResult.students;
  return jsonResult;
  
};

fetchData("bootcamp.json");




// Q2: Using map(), write a function that returns a new array with the students' first names with "-" before each one and displays it in the div with ID "studentsFirstName".

const displayFirstNames = async (path) => {

  let json = await fetchData(path);
  let students = await json.students;
  
  let firstNames = await students.map(function(student) {

    let splittedName = student.split(" ");
    return "-" + splittedName[0] ;
  });
  
  let div = document.getElementById("studentsFirstName");
  firstNames.forEach(function(studentName) {

    if (firstNames.indexOf(studentName) === 0) { //if it is first..
      div.innerText = studentName + ",";
    }
    else if (firstNames.indexOf(studentName) === firstNames.length -1) { //if it is last...
      div.innerText += studentName + ".";
    }
    else { //if it is not first or last...
      div.innerText += " " + studentName + "," + " ";
    }
  })

};

 displayFirstNames("bootcamp.json");




// Q3: Using filter(), write a function that returns an array with students' names that starts with the letter 'm' and display it in the div with ID "studentsNamesStartWthM".

const displayTheNamesStartingWithM = async (path) => {

  let json = await fetchData(path);
  let students = await json.students;

  let selectedStudents = students.filter(student => student[0] === "M" || student[0] === "m")
  console.log(selectedStudents);
  let div = document.getElementById("studentsNamesStartWthM");

  selectedStudents.forEach(function(student) {

    if (selectedStudents.indexOf(student) === 0) { //if it is the first...
      div.innerText = student + "," + " ";
    }
    else if (selectedStudents.indexOf(student) === selectedStudents.length - 1) { //if it is the last...
      div.innerText += " " + student + ".";
    }
    else {
      div.innerText += " " + student +  "," + " ";
    }
  });
};

// displayTheNamesStartingWithM("bootcamp.json");



// Q4: Using reduce(), Write a function that returns the number of students that their first name start with the letter 'a' using reduce and display it in div with ID "NumberOfStudentsNamesStartsWithA"

const displayNumber = async(path) => {

  let json = await fetchData(path);
  let students = await json.students;
  let number = await students.reduce( (accumulator, currentStudent) => {
    
    if (currentStudent[0] === "a" || currentStudent[0] === "A") {
      console.log(++accumulator);
      return accumulator;
    }

    return accumulator;
  }, 0);

  let div = document.getElementById("NumberOfStudentsNamesStartsWithA");
  div.innerText = number;
};

// displayNumber("bootcamp.json"); 



// Q5: Write a function that returns the index of the first student name that starts with the letter 'h' and display it in the div with ID "IndexOfFirstStudentNameStartsWithH".

const displayTheNamesStartingWithH = async (path) => {

  let json = await fetchData(path);
  let students = await json.students;

  let selectedStudents = students.filter(student => student[0] === "H" || student[0] === "h")

  let div = document.getElementById("IndexOfFirstStudentNameStartsWithH");
  div.innerText = students.indexOf(selectedStudents[0]) + " ";
 
}; 

 displayTheNamesStartingWithH("bootcamp.json");


// Q6: Write a function that adds the instructors array to the beginning of the students array and returns a new array called everybody.
// 1) Console log the new array
// 2) Use a spread operator to achieve this

// const whatever = async(path) => {

//   let json = await fetchData(path);

//   let instructors = json.instructors;
//   let students = json.students;
//   let result = [...instructors, ...students]
//   console.log(result);
  
//   return result;
// };

// whatever("bootcamp.json");



// Q7: Write a function to update the key: "title" to the value "Re:Coded Istanbul Bootcamp" to the object that you fetched in Q1.
// Did this modify the JSON file? Why or why not? 

// const changeTheTitle = async (path) => {

//   let json = await fetchData(path);
//   json.title = "Re:Coded Istanbul Bootcamp";
//   console.log(json);

//   let anotherJson = await fetchData(path);
//   console.log(anotherJson);
  
// }

// changeTheTitle("bootcamp.json");
//This doesn't modify the JSON file because we manipulated the fetched data not the source one.Because we are using the HTTP GET request we are just retrieving the data from server. But if we want to change the data in server, we need to use the HTTP POST request to achieve that.



// Q8: Write a function to add the key: "program manager" and the value "Jaime Mikush" to the object that you fetched in Q1.

// const addJamieAsManager = async(path) => {

//   let json = await fetchData(path);
//   json["program manager"] = "Jaime Mikush";
//   console.log(json);
  
// };

// addJamieAsManager("bootcamp.json");



// Q9: Print the object that you fetched in Q1. 

const print = async (path) => {

  let json = await fetchData(path);
  console.log(json);
}

 print("bootcamp.json");

// good luck 😈