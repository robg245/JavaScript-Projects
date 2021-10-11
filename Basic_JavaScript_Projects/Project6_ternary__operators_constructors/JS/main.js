function Ride_Function () {     //ternary operator function named Ride_Function
    var Height, Can_ride;       //variables to be used in ternary operation
    Height = document.getElementById("Height").value;   //this will display it the web page when linked to the html as an input
    Can_ride =(Height<52) ? "You are too short": "You are tall enough"; //will display first or second string depending on the result of the operand
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // id used to link the result of ternary operation to the html file
}

function Vote_Function () {         //name of second ternary function
    var Age, Can_Vote;              //name of 2 variables used for ternary function
    Age= document.getElementById("Age").value;  //this will give the user the ability to input their age
    Can_Vote=(Age<18) ? "you are not allowed": "You are allowed";   //the result of the calculation performed
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; //displays the result to the user
}
function Vehicle(Make, Model, Year, Color)  {   //name of the class contructor
    this.Vehicle_Make = Make;                   //indicates that "make" owns property value vehicle_make
    this.Vehicle_Model = Model;                 //indicates that "Model" owns property value vehicle_Model
    this.Vehicle_Year = Year;                   //indicates that "Year" owns property value vehicle_Year
    this.Vehicle_Color = Color;                 //indicates that "Color" owns property value vehicle_Color
}
var Jack = new Vehicle("Dodge", "Viper",2020, "Red");       //object that would be created by var Jack
var Emily = new Vehicle("Jeep ","Trail Hawk", 2019, "White and Black"); //object that could be created for var Emily
var Erik = new Vehicle("Ford ", " Pinto ", 1971, "Mustard ");           //object that could be created for var Erik
function myFunction () {        //actual function used to iniate object
    document.getElementById("Keywords_and_Constructors").innerHTML =    //id given to constructor class in order to initiate it
    "Erik drives a "+ Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in "+ Erik.Vehicle_Year;

}

function ML(Heroe,Type, Gender,)    {       //name of class constructo
        this.ML_Heroe = Heroe;              //indicates "heroe" owns property value of ML_heroe
        this.ML_Type = Type;                //indicates "Type" owns property value of ML_Type
        this.ML_Gender = Gender;            //indicates "Gender" owns propert value of ML_Gender
}
var Minotaur = new ML("Minotaur ","Tank ", "Male ") //an instance of an object that could be created
function MLB () {           //function that will iniate the object
document.getElementById("New_and_This").innerHTML =     //id is assigned in order to populate object for html
"My favorite Mobile Legends character is " + Minotaur.ML_Heroe + "an absolute " + Minotaur.ML_Type + "born a " + Minotaur.ML_Gender //the property's of the object to be iniated
}

function Gods(Myth,Name, Power,)  { //name of class constructo
    this.Gods_Myth = Myth;          //indicates that "myth" owns the value for Gods_Myth
    this.Gods_Name = Name;          //indicates "name" own the value for Gods_Name
    this.Gods_Power = Power;        //indicated "power" owns the value for Gods_Power
}
var Thor = new Gods("Norse God of ","Thor", "Thunder ")     //an object that could be iniated
function create_Gods () {               //function that will iniate object
    document.getElementById("Gods").innerHTML = "A mighty god " + Thor.Gods_Myth + Thor.Gods_Power + Thor.Gods_Name //id assigment for object property's to be displayed
}
function counting ()    {           //name of nested function
    document.getElementById("Nested_Function").innerHTML= Count (); //id assigned to the function to be displayed
    function Count ()   {   //the function inside the parent function
        var starting_point = 12;    //sets the starting number for the inside function
        function Add_one () {starting_point +=1;}   //  function inside the "count ()" that will add +1 to the starting number
        Add_one();  //not sure what this does
        return starting_point;  //takes you back to original number after the Add_one function
    }
}