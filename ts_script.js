var lang = 'Javascript';
var msg1 = "Hello! This is " + lang + "!";
lang = 'Typescript';
var msg2 = "Hello! This is " + lang + "!";
var msg = "\u300C" + msg1 + "\u300D<br>\u300C" + msg2 + "\u300D";
function load() {
    document.querySelector('#msg').innerHTML = msg;
}
