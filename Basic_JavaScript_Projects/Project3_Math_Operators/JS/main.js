var B = 42 ;
B--;
document.write(B);  //decrement of 42


function My_third_Function () {     //Function using the "+" operator
    var operator = "2+2";           //variable of 2+2
    operator += "=4";               //concatenated =4
    document.getElementById("operator").innerHTML = operator;   //Displays function 
}
function subtraction () {           //subtraction function
    var subtraction = 8-1;          //function subtracts 8-1
    document.getElementById("sub").innerHTML = "8-1 = " + subtraction;  //displays subtraction function
}

function multiplication () {        //multiplaction function
    var multiply = 6 * 4 ;          //variables of 6 *4 used for fucntion
    document.getElementById("multi").innerHTML = "6 x 4 = " + multiply;     //displays function multiplication
}

function division () {      //division function
    var div = 49 / 7;       // var div uses 49 / 7 for the function
    document.getElementById("divide").innerHTML = "49 / 7 =" + div;     //displays division function
}

function more () {              // more function
    var math = (4+4) * 12 / 4 - 2;  // variable math and the operators / numbers used
    document.getElementById("adv").innerHTML = "4 plus 4, multiplied by 12, divided in 4 and then subtracted by 5 equals " + math;  //displays the result
}

function modulus_Operator () {      //modulus function
    var module = 30 % 4;            //variable module uses 30 % 4
    document.getElementById("mod").innerHTML = "When you divide 30 by 4 you have a remainder of: " + module;    //displays the remainder
}

function negative () {          //negative function
    var x = "6"                 //value of variable x is 6
    document.getElementById("neg").innerHTML = -x;      //displays the value of -x
}

var A =10;      //increment function
A++;            //variable A will be incremented
document.write(A) ;     //displays incremented value of A


window.alert(Math.random() * 25)    //displays a pop up window of a random value between 0 and 25

document.write(Math.round(3.6)) ;   //displays the rounded value of 3.6