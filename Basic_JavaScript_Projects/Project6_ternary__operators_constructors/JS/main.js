function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride =(Height<52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function () {
    var Age, Can_Vote;
    Age= document.getElementById("Age").value;
    Can_Vote=(Age<18) ? "you are not allowed": "You are allowed";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}
function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper",2020, "Red");
var Emily = new Vehicle("Jeep ","Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford ", " Pinto ", 1971, "Mustard ");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a "+ Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in "+ Erik.Vehicle_Year;

}

function ML(Heroe,Type, Gender,)    {
        this.ML_Heroe = Heroe;
        this.ML_Type = Type;
        this.ML_Gender = Gender;
}
var Minotaur = new ML("Minotaur ","Tank ", "Male ")
function MLB () {
document.getElementById("New_and_This").innerHTML =
"My favorite Mobile Legends character is " + Minotaur.ML_Heroe + "an absolute " + Minotaur.ML_Type + "born a " + Minotaur.ML_Gender
}

function Gods(Myth,Name, Power,)  {
    this.Gods_Myth = Myth;
    this.Gods_Name = Name;
    this.Gods_Power = Power;
}
var Thor = new Gods("Norse God of ","Thor", "Thunder ")
function create_Gods () {
    document.getElementById("Gods").innerHTML = "A mighty god " + Thor.Gods_Myth + Thor.Gods_Power + Thor.Gods_Name
}
function counting ()    {
    document.getElementById("Nested_Function").innerHTML= Count ();
    function Count ()   {
        var starting_point = 12;
        function Add_one () {starting_point +=1;}
        Add_one();
        return starting_point;
    }
}