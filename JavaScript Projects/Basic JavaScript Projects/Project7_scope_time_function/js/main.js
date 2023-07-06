// Variable declaration and assignment
var x = 10;

// Function to add 20 to the variable x and display the result
function Add_numbers_1() {
  document.write(20 + x + "<br>");
}

// Function to add 100 to the variable x and display the result
function Add_numbers_2() {
  document.write(x + 100 + "<br>");
}

// Function to add 20 to the variable y (local variable) and display the result
function Add_numbers_3() {
  var y = 25;
  document.write(20 + y + "<br>");
}

// Function to add 100 to the variable y (local variable) and display the result
function Add_numbers_4() {
  var y = 25;
  document.write(y + 100 + "<br>");
}

// Function to add 15 to the variable z (local variable) and log the result to the console
function Add_numbers_5() {
  var z = 10;
  console.log(15 + z);
}

// Function to add 100 to the variable z (local variable) and log the result to the console
function Add_numbers_6() {
  console.log(z + 100);
}

// Function to check the current time and display a greeting based on the hour
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}

// Function to check if the age is sufficient to vote and display the result
function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote = "You are old enough to vote!";
  } else {
    Vote = "You are not old enough to vote!";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Function to check the current time and display a message based on the hour
function Time_Function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon.";
  } else {
    Reply = "It is evening.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}

// Function calls
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();
Add_numbers_4();
Add_numbers_5();
Add_numbers_6();
