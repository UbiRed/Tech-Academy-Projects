function addition_Funtion() {
  var addition = 3 + 5; // Perform addition of 3 and 5
  document.getElementById("Math_1").innerHTML = "3 + 5 = " + addition;
}

function subtraction_Funtion() {
  var Subtraction = 5 - 3; // Perform subtraction of 5 and 3
  document.getElementById("Math_2").innerHTML = "5 - 3 = " + Subtraction;
}

function multiplication() {
  var multiplication = 5 * 3; // Perform multiplication of 5 and 3
  document.getElementById("Math_3").innerHTML = "5 * 3 = " + multiplication;
}

function division() {
  var division = 15 / 3; // Perform division of 15 by 3
  document.getElementById("Math_4").innerHTML = "15 / 3 = " + division;
}

function big_math() {
  var simple_math = (1 + 2) * 10 / 2 - 5; // Perform complex mathematical operation
  document.getElementById("Math_5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

function modulus_Operator() {
  var simple_math_2 = 25 % 6; // Perform modulus operation on 25 divided by 6
  document.getElementById("Math_6").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math_2;
}

function negation_Operator() {
  var x = 10; // Assign a value to variable x
  document.getElementById("Math_7").innerHTML = -x; // Perform negation of the number -10
}

function increment_Operator() {
  var L = 5; // Initialize variable L with a value of 5
  L++; // Increment the value of L by 1
  document.getElementById("Math_8").innerHTML = "An increment of var L is: " + L; // Display the incremented value of L
}

function decrement_Operator() {
  var L = 5; // Initialize variable L with a value of 5
  L--; // Decrement the value of L by 1
  document.getElementById("Math_9").innerHTML = "A decrement of var L is: " + L; // Display the decremented value of L
}

function random() {
  window.alert(Math.random().toFixed(2)); // Display a random number between 0 and 1 with 2 decimal places in an alert
  document.getElementById("Math_10").innerHTML = "A random number between 1 and 0 is: "; // Display the text for the random number
}

function random_2() {
  window.alert(Math.random().toFixed(2) * 100); // Display a random number between 0 and 100 with 2 decimal places in an alert
  document.getElementById("Math_11").innerHTML = "A random number between 1 and 100 is: "; // Display the text for the random number
}

function round_Operator() {
  let x = 3.14; // Initialize variable x with a value of 3.14
  x = Math.round(x); // Round off the value of x to the nearest integer
  document.getElementById("Math_12").innerHTML = "3.14 round off is equal to: " + x; // Display the rounded value of x
}

function floor_Operator() {
  let x = 3.99; // Initialize variable x with a value of 3.99
  x = Math.floor(x); // Round down the value of x to the nearest integer
  document.getElementById("Math_13").innerHTML = "the floor of the number 3.99 is: " + x; // Display the floor value of x
}

function ceiling_Operator() {
  let x = 3.14; // Initialize variable x with a value of 3.14
  x = Math.ceil(x); // Round up the value of x to the nearest integer
  document.getElementById("Math_14").innerHTML = "the ceiling of the number 3.14 is: " + x; // Display the ceiling value of x
}

function power_Operator() {
  let x = 3.14; // Initialize variable x with a value of 3.14
  x = Math.pow(x, 2); // Calculate x raised to the power of 2
  document.getElementById("Math_15").innerHTML = "3.14 to the power of 2 is: " + x; // Display the result
}

function square_root_Operator() {
  let x = 9; // Initialize variable x with a value of 9
  x = Math.sqrt(x); // Calculate the square root of x
  document.getElementById("Math_16").innerHTML = "the square root of 9 is: " + x; // Display the result
}

function absolute_Operator() {
  let x = -50; // Initialize variable x with a value of -50
  x = Math.abs(x); // Calculate the absolute value of x
  document.getElementById("Math_17").innerHTML = "the absolute value of -50 is: " + x; // Display the result
}

function max_Operator() {
  let x = 50; // Initialize variable x with a value of 50
  let y = 25; // Initialize variable y with a value of 25
  let z = 5; // Initialize variable z with a value of 5
  let maximum; // Declare a variable to store the maximum value
  maximum = Math.max(x, y, z); // Find the maximum value among x, y, and z
  document.getElementById("Math_18").innerHTML = "the max value of this array is: " + maximum; // Display the maximum value
}

function min_Operator() {
  let x = 50; // Initialize variable x with a value of 50
  let y = 25; // Initialize variable y with a value of 25
  let z = 5; // Initialize variable z with a value of 5
  let minimum; // Declare a variable to store the minimum value
  minimum = Math.min(x, y, z); // Find the minimum value among x, y, and z
  document.getElementById("Math_19").innerHTML = "the min value of this array is: " + minimum; // Display the minimum value
}
