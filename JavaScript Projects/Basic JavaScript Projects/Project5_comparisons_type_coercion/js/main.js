function my_Dictionary() { //Defined a Function
  var Car = { //Defined Variables
      Make:"Acura",
      Model:"NSX",
      Engine:"3.0-liter V6",
      Transmission:"Manual",
      Horsepower:"270hp",
      Torque:"210lbs",
      Color:"Champion White"
  };
  delete Car.Color; //Delete var Car.Color
  document.getElementById("Dictionary").innerHTML = Car.Color;
}