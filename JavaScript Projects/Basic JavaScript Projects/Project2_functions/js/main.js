//made an alert and assigned a string
window.alert("Basic JS Functions");

//created two variables and assigned them both a string value
var sent1="This is the beginning of the string",sent2=" and this is the end of the string";

// created and named a function that changes the text on a button once clicked
function My_First_Function() {
    var str="This is the button text!";
    document.getElementById("Button_Text").innerHTML=str;
}

//creating a basic function
function myFunction() {
  var sentence="I am learning";
  sentence+=" a lot from this course!";
  document.getElementById("concatenate").innerHTML=sentence;
}

// Define an array of colors
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

// Function to generate a random color from the array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Change the background color of the document
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Event listener for the spacebar key press
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    changeBackgroundColor();
  }
});
