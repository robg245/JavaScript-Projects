function My_First_Function () {                             //Defines name of my function
    var cyan = "This text is cyan!";                        //Assign string Cyan to variable
    var c_result = cyan.fontcolor("cyan");                    //Assign color cyan to variable cyan
    var magenta = "This text is magenta!";                  //variable magenta contains string magenta
    var m_result = magenta.fontcolor("magenta");              //variable magenta is assigned color magenta
    document.getElementById("Cyan_Text").innerHTML = m_result; // id= 'Cyan_text' is displayed as the color cyan
}

function My_Second_Function () {                                //defines second function
    var imagination = " Imagination is more important than knowledge<br>";  //string is written for variable imagination
    imagination += "Knowledge is limited <br>imagination encircles the world<br>   -Albert Einstein"    //variable imagination is concatenated
    document.getElementById("imagination").innerHTML = imagination;     //id='imagination' is displayed 
}