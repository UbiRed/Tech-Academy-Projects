// Concatenates four parts of a sentence and displays the result
function full_Sentence() {
  var part_1="I have ";
  var part_2="made this ";
  var part_3="into a complete ";
  var part_4="sentence.";
  var whole_sentence=part_1.concat(part_2,part_3,part_4);
  document.getElementById("Concatenate").innerHTML=whole_sentence;
}

// Extracts a section of text from a sentence and displays it
function slice_method() {
  var Sentence="All work and no plat makes Johnny a dull boy.";
  var Section=Sentence.slice(27,33);
  document.getElementById("Slice").innerHTML=Section;
}

// Converts a string to uppercase and displays the result
function upper_method() {
  var Sentence_1="caps lock broke lol";
  var uppercased=Sentence_1.toUpperCase();
  document.getElementById("Upper").innerHTML=uppercased;
}

// Searches for a specific word in a sentence and displays the index
function search_method() {
  let Sentence_2="My favorite color is red!";
  let color_red=Sentence_2.search(/red/i);
  document.getElementById("red").innerHTML=color_red;
}

// Converts a number to a string and displays the result
function string_method() {
  var X=182;
  document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

// Formats a number with a specified precision and displays the result
function precision_Method() {
  var X=129338.30129787376112;
  document.getElementById("Precision").innerHTML=X.toPrecision(10);
}

// Rounds a number to a specified number of decimal places and displays the result
function fixed_Method() {
  var Number=129338.30129787376112;
  var N=Number.toFixed(2);
  document.getElementById("Fixed").innerHTML=N;
}

// Returns the primitive value of a string object and displays the result
function valueof_Method() {
  var text="This is a simple sentence honestly nothing special about it.";
  var result=text.valueOf();
  document.getElementById("Value").innerHTML=result;
}
