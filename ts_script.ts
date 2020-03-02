let lang = 'Javascript';
let msg1 = `Hello! This is ${lang}!`;
lang = 'Typescript';
let msg2 = `Hello! This is ${lang}!`;

let msg: string = `「${msg1}」<br>「${msg2}」`;

function load() {
    document.querySelector('#msg').innerHTML = msg;
}