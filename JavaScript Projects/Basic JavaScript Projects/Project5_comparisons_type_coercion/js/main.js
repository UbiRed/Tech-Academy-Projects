// Using document.write to output the result of concatenating the string "10" with the number 3, and determining its type
document.write(typeof "10"+3);

// Using document.write to output the type of the number 3
document.write(typeof 3);

// Declaring a function named my_Function
function my_Function()  {
  // Accessing the element with the ID "Test_1" and setting its innerHTML to the result of 0 divided by 0 (which is NaN)
  document.getElementById("Test_1").innerHTML = 0/0;
  
  // Accessing the element with the ID "Test_2" and setting its innerHTML to the result of isNaN('This is a string') (which is true)
  document.getElementById("Test_2").innerHTML = isNaN('This is a string');
  
  // Accessing the element with the ID "Test_3" and setting its innerHTML to the result of isNaN('007') (which is false)
  document.getElementById("Test_3").innerHTML = isNaN('007');
  
  // Accessing the element with the ID "Test_4" and setting its innerHTML to the value of 2E310 (which is Infinity)
  document.getElementById("Test_4").innerHTML = 2E310;
  
  // Accessing the element with the ID "Test_5" and setting its innerHTML to the value of -2E310 (which is -Infinity)
  document.getElementById("Test_5").innerHTML = -2E310;
}

// Using document.write to output the result of the expression 10 < 2 (which is false)
document.write(10<2);

// Using console.log to output the result of the expression 2 + 2 (which is 4)
console.log(2 + 2);

// Using console.log to output the result of the expression 10 < 2 (which is false)
console.log(10 < 2);

// Using document.write to output the result of the expression 10 == 10 (which is true)
document.write(10 == 10);

// Using document.write to output the result of the expression 3 == 11 (which is false)
document.write(3 == 11);

// Declaring variables Q and R, and using document.write to output the result of the strict equality comparison Q === R (which is true)
Q = 10;
R = 10;
document.write(Q === R);

// Declaring variables P and O, and using document.write to output the result of the strict equality comparison P === O (which is false)
P = 82;
O = "82";
document.write(P === O);

// Declaring variables K and N, and using document.write to output the result of the strict equality comparison K === N (which is false)
K = 13;
N = 9;
document.write(K === N);

// Using document.write to output the result of the logical AND operation 5 > 2 && 10 > 4 (which is true)
document.write(5 > 2 && 10 > 4);

// Using document.write to output the result of the logical AND operation 5 > 10 && 10 > 4 (which is false)
document.write(5 > 10 && 10 > 4);

// Using document.write to output the result of the logical OR operation 5 > 10 || 10 > 4 (which is true)
document.write(5 > 10 || 10 > 4);

// Using document.write to output the result of the logical OR operation 5 > 10 || 10 > 20 (which is false)
document.write(5 > 10 || 10 > 20);

// Declaring a function named not_Function
function not_Function() {
  // Accessing the element with the ID "Not" and setting its innerHTML to the negation of the expression 5 > 10 (which is true)
  document.getElementById("Not").innerHTML=!(5 > 10);
}

// Declaring a function named not_2_Function
function not_2_Function() {
  // Accessing the element with the ID "Not_2" and setting its innerHTML to the negation of the expression 20 > 10 (which is false)
  document.getElementById("Not_2").innerHTML=!(20 > 10);
}
