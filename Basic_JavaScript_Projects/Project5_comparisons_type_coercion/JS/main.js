document.write("12"+7) //coerced a string and a number
function test_function () {     //names the function
    document.getElementById("Test").innerHTML = 0/0;    //test to see if 0/0 is a number 
}
function test_2 ()  {   //name of second test function
    document.getElementById("T2").innerHTML = 2+2==5;   //tests to see if 2+2 = 5
}

function test_3 ()  {       //test 3 function
    document.getElementById("T3").innerHTML = 2+2==4;   //tests to see if 2+2 is 4
}

document.write(2E311);      //shows infinity
document.write(-10E310);    //shows negative infinity
document.write(15>15.1)     //displays false
document.write(2.1>2)       //displays true
console.log(5+5);           //displays 10 in the console
console.log(5>6);           //Displays false in console
console.log(5==5);          //displays true
console.log((20+20)==20E2); //displays false using == in the console
document.write("2"==2);     //displays true using == in the html file
/*****  Using === to comapare data type and value          */
document.write(4===4);      //displays true for matching data type and value
document.write("four"===4);    //displays false. valua matches but data type does not match
document.write("four"===3);     //displays false, data type and value do not match
document.write(4===3);      //displays false data type match but value does not
document.write (6>2 && 4>1); // displays false using the boolenan operator &&
document.write(6<2 && 4>1); //displayts false using the boolean operator &&
document.write (6>2 || 4>1); //Displays true using the boolean operator ||
document.write (6<2 || 4<1);  //displays false using the boolean operator ||
function not_function ()    {
    document.getElementById("Not").innerHTML = !(20>10);    //Diplays false for the value 20 is not greater than 10
}

function f_but_not_f () {
    document.getElementById("No not").innerHTML = !(20<10); //Displays true for the value 20 is not less than 10
}