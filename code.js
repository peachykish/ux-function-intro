/*
   Into to Functions - Practice with Test Driven Development
*/

/* ------------------------------------------------
  Exercise One - getNumberFive

  Return the number 5 from this function.
*/
function getNumberFive() {
  // Your code here
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
console.log("* Result is 5");
console.log(getNumberFive() === 5);

/* ------------------------------------------------
  Exercise Two - multiply

  This function has two arguments, a and b.  These will both be numbers.

  Multiply these two numbers and return the result.
*/
function multiply(a, b) {
  // You code here
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
console.log("* Check for 2 and 3");
console.log(multiply(2, 3) === 6);
console.log("* Check for 5 and 6");
console.log(multiply(5, 6) === 30);
console.log("* Check for 0 and 0");
console.log(multiply(0, 0) === 0);

/* ------------------------------------------------
  Exercise Three - concatenate

  This function has two arguments, message and text.  

  Add the text to the end of the message, and then return the complete string.
*/
function concatenate(message, text) {
  // You code here
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Three-----");
console.log("* Check basic message");
console.log(concatenate("This is a ", "string!") === "This is a string!");
console.log("* Check empty initial message");
console.log(concatenate("", "New text!") === "New text!");

/* ------------------------------------------------
  Exercise Four - absoluteValue

  This function has one argument, number.  

  Use a conditional (if/else) statement to complete this.
  If the number is greater than 0, return the number
  Otherwise, multiply the number by -1 and return it. 
*/
function absoluteValue(number) {
  // You code here
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Four-----");
console.log("* Check for 5");
console.log(absoluteValue(5) === 5);
console.log("* Check for -3");
console.log(absoluteValue(-3) === 3);
console.log("* Check for 0");
console.log(absoluteValue(0) === 0);

/* ------------------------------------------------
  Exercise Five - evenOddOrZero

  This function has one argument, number.  

  Use conditional (if/else) statements to complete this.
  
  If the number is even, return "Even"
  If the number is odd, return "Odd"
  If thenumber is zero, then return "Zero"

  Hint: Remember the Modulo operator! % 
  How can you use it to determine if the number is odd or even? 
  (Look at the lesson on Operators)
*/
function evenOddOrZero(number) {
  // You code here
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Four-----");
console.log("* Check for Even");
console.log(evenOddOrZero(6) === "Even");
console.log("* Check for Odd");
console.log(absoluteValue(13) === "Odd");
console.log("* Check for Zero");
console.log(absoluteValue(0) === "Zero");
