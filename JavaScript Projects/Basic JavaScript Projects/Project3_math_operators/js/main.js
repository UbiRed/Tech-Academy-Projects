function addition_Funtion() {
  var addition=3+5;
  document.getElementById("Math_1").innerHTML="3 + 5 = "+addition;
}

function subtraction_Funtion() {
  var Subtraction=5-3;
  document.getElementById("Math_2").innerHTML="5 - 3 = "+Subtraction;
}

function multiplication() {
  var multiplication=5*3;
  document.getElementById("Math_3").innerHTML="5 * 3 = "+multiplication;
}

function division() {
  var division=15/3;
  document.getElementById("Math_4").innerHTML="15 / 3 = "+division;
}

function big_math() {
  var simple_math=(1+2)*10/2-5;
  document.getElementById("Math_5").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+simple_math;
}

function modulus_Operator() {
  var simple_math_2=25%6;
  document.getElementById("Math_6").innerHTML="when you divide 25 by 6 you have a remainder of: "+simple_math_2;
}

function negation_Operator() {
  var x=10;
  document.getElementById("Math_7").innerHTML=-x;
}

function increment_Operator() {
  var L = 5;
  L++;
  document.getElementById("Math_8").innerHTML = "An increment of var L is: " + L;
}

function decrement_Operator() {
  var L = 5;
  L--;
  document.getElementById("Math_9").innerHTML = "A decrement of var L is: " + L;
}

function random() {
  window.alert(Math.random().toFixed(2));
  document.getElementById("Math_10").innerHTML = "A random number between 1 and 0 is: ";
}

function random_2() {
  window.alert(Math.random().toFixed(2)*100);
  document.getElementById("Math_11").innerHTML = "A random number between 1 and 100 is: ";
}

function round_Operator() {
  let x = 3.14
  x = Math.round(x)
  document.getElementById("Math_12").innerHTML = "3.14 round off is equal to: " + x;
}

function floor_Operator() {
  let x = 3.99
  x = Math.floor(x)
  document.getElementById("Math_13").innerHTML = "the floor of the number 3.99 is: " + x;
}

function ceiling_Operator() {
  let x = 3.14
  x = Math.ceil(x)
  document.getElementById("Math_14").innerHTML = "the ceiling of the number 3.14 is: " + x;
}

function power_Operator() {
  let x = 3.14
  x = Math.pow(x, 2)
  document.getElementById("Math_15").innerHTML = "3.14 to the power of 2 is: " + x;
}

function square_root_Operator() {
  let x = 9
  x = Math.sqrt(x)
  document.getElementById("Math_16").innerHTML = "the square root of 9 is: " + x;
}

function absolute_Operator() {
  let x = -50
  x = Math.abs(x)
  document.getElementById("Math_17").innerHTML = "the absolute value of -50 is: " + x;
}

function max_Operator() {
  let x = 50
  let y = 25
  let z = 5
  let maximum;
  maximum = Math.max(x,y,z)
  document.getElementById("Math_18").innerHTML = "the max value of this array is: " + maximum;
}

function min_Operator() {
  let x = 50
  let y = 25
  let z = 5
  let minimum;
  minimum = Math.min(x,y,z)
  document.getElementById("Math_19").innerHTML = "the min value of this array is: " + minimum;
}