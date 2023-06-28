function addition_Funtion() {
  var addition=3+5;
  document.getElementById("Math").innerHTML="3+5="+addition;
}

function subtraction_Funtion() {
  var Subtraction=5-3;
  document.getElementById("Math_2").innerHTML="5-3="+Subtraction;
}

function multiplication() {
  var multiplication=5*3;
  document.getElementById("Math_3").innerHTML="5*3="+multiplication;
}

function division() {
  var division=15/3;
  document.getElementById("Math_4").innerHTML="15/3="+division;
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

function Increment_decrement_Operator() {
  var L=5;
  L++;
  document.write(L);
}
