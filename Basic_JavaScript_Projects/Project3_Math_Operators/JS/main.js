var B = 42 ;
B--;
document.write(B);


function My_third_Function () {
    var operator = "2+2";
    operator += "=4";
    document.getElementById("operator").innerHTML = operator;
}
function subtraction () {
    var subtraction = 8-1;
    document.getElementById("sub").innerHTML = "8-1 = " + subtraction;
}

function multiplication () {
    var multiply = 6 * 4 ;
    document.getElementById("multi").innerHTML = "6 x 4 = " + multiply; 
}

function division () {
    var div = 49 / 7;
    document.getElementById("divide").innerHTML = "49 / 7 =" + div;
}

function more () {
    var math = (4+4) * 12 / 4 - 2;
    document.getElementById("adv").innerHTML = "4 plus 4, multiplied by 12, divided in 4 and then subtracted by 5 equals " + math;
}

function modulus_Operator () {
    var module = 30 % 4;
    document.getElementById("mod").innerHTML = "When you divide 30 by 4 you have a remainder of: " + module;
}

function negative () {
    var x = "6"
    document.getElementById("neg").innerHTML = -x;
}

var A =10;
A++;
document.write(A) ;


window.alert(Math.random() * 25)

document.write(Math.round(3.6)) ;