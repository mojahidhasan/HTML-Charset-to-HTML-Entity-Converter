//global variables
const inputField = document.getElementById('input');
const outputField = document.getElementById('output');

//encoding
function encode() {
    const inputField = document.getElementById('input').value;
    let output = '';
    let inputValIndexNo = 0;

    //converting
    for (let i = 1; i <= inputField.length; i++) {
        output += '&#' + inputField.charCodeAt(inputValIndexNo) + ';';
        inputValIndexNo++;
    }

    outputField.innerText = output;
}

//copy text
function copyText() {
    const getOutput = document.getElementById('output');

    getOutput.select();
    getOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
/**********/


function changeBtnVal() {
    if (btn.value == "Copy Result") {
        btn.setAttribute('value', 'Copied!');
    }
}

//event listeners
const btn = document.getElementById('btn'); //global variable
const btnClear = document.getElementById('btn-clear'); //global variable

window.onload = function(){
    encode();
}

inputField.onkeyup = function(){
    encode();
}
inputField.onkeydown = function(){
    encode();
}

inputField.onfocus = function(){
    btn.setAttribute('value', 'Copy Result');
}

//clear input field
btnClear.onclick = function(){
    inputField.value = '';
}

btn.onclick = function () {
    copyText();
    changeBtnVal();
};
