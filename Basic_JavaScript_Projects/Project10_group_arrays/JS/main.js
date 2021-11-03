function Call_Loop ()   {   //function using while loop
    var num = "";       //variable for number
    var x = 1;          //variable that sext x equal to 1
    while (x<12)   {    //while  x is less than 12 exexute the next command
    num += "<br>" + x;      //num will add or equal x
    x++;                    // x is incremented by 1 in the next computation
    document.getElementById("Loop").innerHTML = num;
    }
}

var strng = "Mobile Legends";   //string is created
document.write(strng.length);   //returns the lenght of the string
var instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"]; //var instruments created for for loop
var content = "";       //variable for content is created
var y;                  // variable y is created
function for_Loop ()    {       //for loop function
    for (y = 0; y < instruments.length; y++)    {   //y will be set to 0, if y is less than the instrument string length, increment y
        content += instruments[y] + "<br>";         //content will now be replaced with the instruments and a break will be added between each instrument
    }
    document.getElementById("List_of_Instruments").innerHTML = content;     //displays content variable in the browser
} 
function array_Function ()  {
    var Ramen = [];
    Ramen [0] = "thick";
    Ramen[1] = "normal";
    Ramen [2] = "thin";
    document.getElementById("Array").innerHTML = "I would like my noodles to be " + Ramen[0] + ".";x
    
}

function constant_function ()   {
    const car = {brand: "Toyota ", type: "Camry ", color: "phosporus"};
    car.year = "1998 ";
    car.color = "red";
    document.getElementById("constant").innerHTML = "The new color of the  " + car.brand + car.type + car.year + "is " + car.color + ".";
}

let x = "<br> let it be";
document.write(x);

let car = {             //object created with methods and properties
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return  "This car is a " + this.make + this.model + this.year + this.color; 
    }    
    
    };
    document.getElementById("Car_Object").innerHTML = car.description ();

    for (let i = 0; i<10; i++ ) {
        if (i === 3) {break;}
        text += "The number is" + i + "<br>";
    }
    for (let n= 0; n<10; n++) {
        if (n === 3 ) {continue; }
        text += "the number is " + n +"<br>";
    }
