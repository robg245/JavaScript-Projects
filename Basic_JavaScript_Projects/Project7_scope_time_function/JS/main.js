var x = 10;             //global variable
function Add_numbers_1() {      //function name
    document.write (20+x+"<br>");   //function that tells the browser what to do
}
function Add_Numbers_2 () {     //name of function
    document.write(x+100+"<br>");      //function adds global variable "x" and 100

}
Add_numbers_1 ();               //displays the function on to html page
Add_Numbers_2 ();               //displays function on to html page
function Add_local_numbers_1 () {   //function used to display a local variable
    var y= 10;                      //local variable
    document.write(20 + y+ "<br>");     //displays 30 on the web page
    console.log(15+y);                  //adds 15 and y in the console log
}
function Add_local_numbers_2 () {   //function used to display an error for local variable
    document.write(y+100+"<br>");      //fails to display this as y is a local variable in a different function
    console.log(y+100);                 //shows you the error in the console log
}
Add_local_numbers_1 ();     //displays result of the function
Add_local_numbers_2 ();     //shows error for this function

function get_Dates ()    {  //function used to pull the date 
    if (new Date().getHours() < 18) {       //if its a new date it will check if the hour is before 6 pm
        document.getElementById("HI").innerHTML = "Its anime time";     //if it is before 6 pm the browser will show "its anime time"
    }
}
function Elder ()   {           //function used to tell you if you can vote
    Age = document.getElementById("Age").value; //sets up an input for users to put in their age
    if (Age >=18)   {   //if age >= something will happen
        Vote = "You are old enough to vote!";   //what will happen is message telling you, you can vote. 
    }
    else {      //function that will take effect if user is not 18 or older
        Vote = "You are not old enough to vote!";   //user will see they're not old enough to vote.
    }
    document.getElementById("Old").innerHTML = Vote;    //corresponding result will be shown to the user
}

function Time_function ()   {   //function for time
    var Time = new Date().getHours;     //will get the current time in hours from the local computer system
    var Reply;                             //sets up the response to the time  
    if (Time <12 == Time > 0) {            //will check if the time is less than 12 and if it equals a time greatar than 12
        Reply = "It is morning time!";     //if the conditions above are met the user will see that it is morning time
    }
    else if (Time >= 12 == Time < 18)   {   //if the conditions above are not true it will check if time is greater than or equal to 12 and if time is less than 18
        Reply = "It is afternoon.";         //if the else if conditions are met the user will see "it is afternoon"
    }
    else {                                  //if "if " conditions and "else if " conditions are not met else conditions will take in effect
        Reply = "It is evening time.";      //else statement will show user that it is evening time
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //displays the result of var reply
}