- Start with this index.html, which has inputs and buttons for things to calculate: 

- Link index.html to index.js using `script` tag.

- Write a function called `squareNumber` that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called `halfNumber` that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

- Write a function called `percentOf` that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called `areaOfCircle` that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

- Bonus: Round the result so there are only two digits after the decimal.

- Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
  1- Take half of the number and store the result.
  2- Square the result of #1 and store that result.
  3- Calculate the area of a circle with the result of #2 as the radius.
  4- Calculate what percentage that area is of the squared result (#3).

- For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.

- Bonus: respond to key presses so that the user doesn't have to click the button.