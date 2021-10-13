function corn ()    {           //function that I will use to concatenate a sentence
    var part_1 = "I like ";     //first part
    var part_2 = "to eat ";     //second part
    var part_3 = "buttered corn ";  //third part
    var part_4 = "with cheese.";    //4th part
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //this will concatenate all parts to create a full sentence
    document.getElementById("cool").innerHTML = whole_sentence; //will display the concatenated sentenced on the html file

}
function slice_method ()    {                       //function using slice method
    var sentence = "This is a short sentence";      //var to be sliced
    var section = sentence.slice(10,16);            //part to be sliced. the part to be slice will be located using the index
    document.getElementById("slice").innerHTML = section;   //will display the part that was sliced out
}
var to = "This is a creative sentence. <br>";       // var to ranked up to uppercase
document.write(to.toUpperCase());                   // var to is displayed in uppercase
var look = "123456789";                             //var used to try the search method

document.write(look.search("3"));                   //will print the value that was searched for
function string_numbers ()   {                      //function to try to string numbers
    var x = 24;                                     // var x will be strung
    document.getElementById("string_numbers").innerHTML = x.toString(); //displays the number as a string
}
function precision_method () {                      //function i will use to try the precision method
    var x = 31234.123;                              //var that the precison method will be applied to
    document.getElementById("Precision").innerHTML = x.toPrecision(6);  //var x will be displayed after being precised to 6 values
}
function fixing() {                 //function to fix a number to a certain number of decimal points
    var num = 521.123;              //var to be fixed
    var num_fixed = num.toFixed(1); //var num will be fixed to only have one decimal place
    document.getElementById("fixed").innerHTML = num_fixed; //displays the new fixed var num
}
var question =" <br>what does valueof() method do?";    //var used to display the primitive string value
document.write(question.valueOf());     //will display the primitive string value to the user