function Ride_Function() {
  var Height, Can_ride;
  Height=document.getElementById("Height").value;
  Can_ride=(Height<52)?"You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vote_Function() {
  var Age, Can_vote;
  Age=document.getElementById("Age").value;
  Can_vote=(Age<18)?"You are not old enough":"You are old enough";
  document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}

function Vehicle(Make,Model,Year,Color) {
  this.Vehicle_Make=Make;
  this.Vehicle_Model=Model;
  this.Vehicle_Year=Year;
  this.Vehicle_Color=Color;
}

var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emilly=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
var Keaton=new Vehicle("Honda","NSX",2005,"Champion White");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML=
  "Erik Drives a "+Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+
  " Manufactured in "+Erik.Vehicle_Year+".";
}

function New_This_Function() {
  document.getElementById("New_and_This").innerHTML=
  "Keaton Drives a "+Keaton.Vehicle_Color+"-colored "+Keaton.Vehicle_Model+
  " Manufactured in "+Keaton.Vehicle_Year+" by "+Keaton.Vehicle_Make+".";
}

function Toasters(Make,Year,Color) {
  this.Toasters_Make=Make;
  this.Toasters_Year=Year;
  this.Toasters_Color=Color;
}

var Hillary=new Toasters("Hamilton",2020,"Silver");
var Donald=new Toasters("GE",2005,"Black");
var Obama=new Toasters("Nasa",2023,"Diamond");

function Toaster_Function() {
  document.getElementById("Toaster").innerHTML=
  "Obama owns a "+Obama.Toasters_Color+" plated toaster,"+
  " manufactured in "+Obama.Toasters_Year+" by "+Obama.Toasters_Make+".";
}

function count_Function() {
  document.getElementById("Nested_Function").innerHTML=Count();
  function Count() {
    var Starting_point=9;
    function Plus_one() {Starting_point+=1;}
    Plus_one();
    return Starting_point;
  }
}