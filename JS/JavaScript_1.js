function Animal_Function  () {
    var Animal_Output;
    var animals = document.getElementById("Animal_Input").value;
    var animal_string = " is a great animal! ";
    switch(animals) {
        case "Fox":
            Animal_Output = "Fox" + animal_string;
            break;
            case "Dog":
                Animal_Output = "Dog" + animal_string;
                break;
            case "Cat":
                Animal_Output = "Cat" + animal_string;
                break;
            case "Brontosaurus": 
            Animal_Output = "Brontosaurus" + animal_string;
            break;
            default:
                Animal_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}
function Hello_World_Function ()    {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_me");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();