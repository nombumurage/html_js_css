//save the slider from html in a variable
var blue = document.getElementById("slider");
//creating an array of images
var green = ["urL(../img/hd.jpg)", "url(../img/bd1.jpg)", "url(../img/bd2.jpg)", "url(../img/bd3.jpg)", "url(../img/redsky.jpg)"];
//counter varible
var counter = 0;

function colourChanger() {
    blue.style.backgroundImage = green[counter];
    counter++;
    if (counter >= green.length) {
        counter = 0;
    }
}
//timing
setInterval(colourChanger, 3000);
