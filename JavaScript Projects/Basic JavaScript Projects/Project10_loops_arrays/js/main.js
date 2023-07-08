function count_to_Ten() {
  var Digit = ""; // Initialize an empty string variable to store the result
  var X = 1; // Initialize a variable with the starting value
  while (X < 11) { // Execute the loop while X is less than 11
      Digit += "<br>" + X; // Concatenate the current number with a line break ("<br>") and add it to the Digit string
      X++; // Increment the value of X by 1
  }
  document.getElementById("Counting_to_Ten").innerHTML = Digit; // Update the content of the HTML element with the ID "Counting_to_Ten" with the Digit string
}

function Call_Loop() {
  var Digit = ""; // Initialize an empty string variable to store the result
  var X = 1; // Initialize a variable with the starting value
  while (X < 69421) { // Execute the loop while X is less than 69421
      Digit += "<br>" + X; // Concatenate the current number with a line break ("<br>") and add it to the Digit string
      X++; // Increment the value of X by 1
  }
  document.getElementById("Loop").innerHTML = Digit; // Update the content of the HTML element with the ID "Loop" with the Digit string
}

function length_method() {
  var Sentence = "All work and no play makes Johnny a dull boy."; // Declare and assign a sentence to the Sentence variable
  var Section = Sentence.length; // Get the length of the Sentence string using the length property
  document.getElementById("Length").innerHTML = Section; // Update the content of the HTML element with the ID "Length" with the length value
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Declare and assign an array of musical instruments
var Content = ""; // Initialize an empty string variable to store the result
var Y; // Declare a variable for the loop

function for_loop() {
  for (Y = 0; Y < Instruments.length; Y++) { // Iterate over the Instruments array using a for loop
      Content += Instruments[Y] + "<br>"; // Concatenate the current instrument with a line break ("<br>") and add it to the Content string
  }
  document.getElementById("List_of_Instruments").innerHTML = Content; // Update the content of the HTML element with the ID "List_of_Instruments" with the Content string
}

function cat_pics() {
  var Cat_Picture = {}; // Declare an empty object
  Cat_Picture[0] = "sleeping"; // Assign a value to the property with key 0
  Cat_Picture[1] = "playing"; // Assign a value to the property with key 1
  Cat_Picture[2] = "eating"; // Assign a value to the property with key 2
  Cat_Picture[3] = "purring"; // Assign a value to the property with key 3
  document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; // Retrieve the value of Cat_Picture[2] and display it in the HTML element with the ID "Cat"
}

function constant_function() {
  const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" }; // Declare and assign a constant object representing a musical instrument
  Musical_Instrument.color = "blue"; // Modify the color property of the Musical_Instrument object
  Musical_Instrument.price = "$900"; // Add a new price property to the Musical_Instrument object
  document.getElementById("Constant").innerHTML = "The cost of the " +
      Musical_Instrument.type + " was " + Musical_Instrument.price; // Display a sentence containing the type and price of the musical instrument in the HTML element with the ID "Constant"
}

function let_Method() {
  let Sentence = "All work and no play makes Johnny a dull boy."; // Declare and assign a variable using the let keyword
  document.getElementById("Let_1").innerHTML = Sentence; // Update the content of the HTML element with the ID "Let_1" with the value of the Sentence variable
}

let car = {
  make: "Dodge ", // Property storing the make of the car
  model: "Viper ", // Property storing the model of the car
  year: "2021 ", // Property storing the year of the car
  color: "red ", // Property storing the color of the car
  description: function() {
    return "The car is a " + this.year + this.color + this.make + this.model; // Method that returns a string describing the car
  }
};
