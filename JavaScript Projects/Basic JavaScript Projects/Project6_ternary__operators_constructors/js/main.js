/* Function to check if the height is sufficient to ride */
function Ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

/* Function to check if the age is sufficient to vote */
function Vote_Function() {
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
  document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

/* Constructor function for creating Vehicle objects */
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emilly = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Keaton = new Vehicle("Honda", "NSX", 2005, "Champion White");

/* Function to display information about Erik's vehicle */
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik Drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " Manufactured in " + Erik.Vehicle_Year + ".";
}

/* Function to display information about Keaton's vehicle */
function New_This_Function() {
  document.getElementById("New_and_This").innerHTML =
    "Keaton Drives a " + Keaton.Vehicle_Color + "-colored " + Keaton.Vehicle_Model +
    " Manufactured in " + Keaton.Vehicle_Year + " by " + Keaton.Vehicle_Make + ".";
}

/* Constructor function for creating Toaster objects */
function Toasters(Make, Year, Color) {
  this.Toasters_Make = Make;
  this.Toasters_Year = Year;
  this.Toasters_Color = Color;
}

var Hillary = new Toasters("Hamilton", 2020, "Silver");
var Donald = new Toasters("GE", 2005, "Black");
var Obama = new Toasters("Nasa", 2023, "Diamond");

/* Function to display information about Obama's toaster */
function Toaster_Function() {
  document.getElementById("Toaster").innerHTML =
    "Obama owns a " + Obama.Toasters_Color + " plated toaster," +
    " manufactured in " + Obama.Toasters_Year + " by " + Obama.Toasters_Make + ".";
}

/* Function demonstrating nested function and variable scope */
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();

  /* Nested function to increment a starting point */
  function Count() {
    var Starting_point = 9;
    function Plus_one() {
      Starting_point += 1;
    }
    Plus_one();
    return Starting_point;
  }
}
