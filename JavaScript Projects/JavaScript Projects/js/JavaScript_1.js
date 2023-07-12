function Color_Function() {
    var Color_Output;
    var Colors=document.getElementById("Color_Input").value;
    var Color_String=" is a great color!";

    switch(Colors) {

            case "Red":
            Color_Output="Red"+Color_String;
            break;

            case "Yellow":
            Color_Output="Yellow"+Color_String;
            break;

            case "Green":
            Color_Output="Green"+Color_String;
            break;

            case "Blue":
            Color_Output="Blue"+Color_String;
            break;

            case "Pink":
            Color_Output="Pink"+Color_String;
            break;

            case "Purple":
            Color_Output="Purple"+Color_String;
            break;

            Color_Output="Please enter a color exactly as written on the above list."
    }
    document.getElementById("Output").innerHTML=Color_Output;
}

function Hello_World_Function() {
    var A=document.getElementsByClassName("Click");
    A[0].innerHTML="The text has changed!"
}

function displayType(character) {
    var characterType=character.getAttribute("data-character-type");
    alert(characterType+" is in the "+character.innerHTML+" universe!");
}

var ages=[2, 10, 18, 20, 13, 15, 30];

//Using the arrow function to pass in a parameter of age
checkAge=(age)=>age=>18;

function myFunction_5() {
    //Use the .some() to iterate through the array of ages and display the result.
    document.getElementById('displayAge').innerHTML=ages.some(checkAge);
}