function countdown () {
var seconds = document.getElementById("seconds").value;


function tick()     {       //function named tick
    seconds = seconds -1;   //makes seconds subtract 1 second from the current number of seconds 
    timer.innerHTML = seconds;  //creates a timer for sesconds to be used in html page
    var time = setTimeout(tick, 1000);  //var time setting the range of values for seconds to be used
    if (seconds == -1) {    //condtional statement for seonds if they equal -1
        alert ("Times's up!");  //if "if " is true it will display times up
        clearTimeout(time);     //time is no longer displayed
        timer.innerHTML = "";   //value input is reset to blank
    }
}
tick ();                        //displays function tick
}
var slideIndex = 1;             //sets var slideIndex to equal 1
showSlides(slideIndex);         //will show slideIndex

// Next/previous controls
function plusSlides(n) {        //function for incrementing the number of the slide
  showSlides(slideIndex += n);  //increments the slideIndex number by n
}

// Thumbnail image controls
function currentSlide(n) {      // function for displaying the index of the current slide
  showSlides(slideIndex = n);   //displays the current slide's index
}

function showSlides(n) {                //function created to show the slide
  var i;                                // creates var i
  var slides = document.getElementsByClassName("mySlides"); //gives var slides a class name in order to link to html file
  var dots = document.getElementsByClassName("dot");           //gives dots a class name IOT to link it to the htmk file
  if (n > slides.length) {slideIndex = 1}                   //conditonal statement if n is greater than the number of slide set index to 1
  if (n < 1) {slideIndex = slides.length}                   // if n is less than one then it will set the index to the total number of slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //displays the slide at current slide index subtracts 1 to make the number of the index to 0
  dots[slideIndex-1].className += " active";
}