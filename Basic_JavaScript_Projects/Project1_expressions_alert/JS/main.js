window.alert ("Hello, World!");         //Creates a pop up window when entering the page. Displays the message "hello,world!"
document.write("Hello,World!<br>");     //Creates the text on the page displaying "Hello, world"
var A = "Tis be a string<br>"           //This is a variable with a string
document.write(A);                      //This prints out the variable defined as 'A'
var B = "Hulk" + "Smash!<br>"           //This is a concatenated variable with the values 'Hulk' + Smash!
var B = B.fontcolor("yellow");          //Sets the font color of variable B to yellow
document.write(B);          ;            //Prints out Variable 'B'
var C = "Avengers "
var D = "Assemble!<br>";
var E = C + D;
document.write(E)
document.write("Hulk said,\"Hulk Smash!\"<br>");                     //Prints out a statement containing paranthesis
document.write("Empty your mind be formless<br>"                     //First line of concatenated quote
                + "Put water into a cup it becomes the cup<br>"      //second line of concatenated quote
                +"be like water my friend<br>"                       // Third line of concatenated quote
                +"-Bruce Lee<br>");                                  //Last line of concatenated quote
var animals = "kingdom Animalia", fish = "salmon", mammal = "human<br>", reptile = "snake";         //variable with multiple values
var animals = animals.fontcolor("purple");                                                          //sets the fontcolor of value = 'animals' to purple
document.write(mammal) ;                                                                            //prints the result for the value given to index mammal
var greens = "I have the greens.<br>";                                                              //variable defines as greens followed by string
var greens = greens.fontcolor("green")                                                              //sets fontcolor to green for var greens
document.write(greens);                                                                             //prints var greens
document.write("2+4");                                                                              //prints arithmatic 
function My_First_Function () {                                     //Defining a function and naming it
    var str = "This text is green !";                               //Defining a variable and giving it a
                                                                    //string value
    var result = str.fontcolor("green");                            //Using the fontcolor method on
                                                                    //str variable
    document.getElementById("Green_Text").innerHTML = result;       //Putting the value 
                                                                    //of result into HTML element with "Green_Text" id
}   
