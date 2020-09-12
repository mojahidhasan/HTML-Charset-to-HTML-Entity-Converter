function encode() {
    var inputVal = document.getElementById('input').value; //it gets inputed values
    var output = ''; // it gathers all of the encoded text and modifies it
    var inputValIndexNo = 0; // it is the index no. of inputed values
    var result = document.getElementById('output'); // it gets encoded format from output variable and shows 

    //encoding process started here and it is MAIN CODE
    for (var i = 1; i <= inputVal.length; i++) {
        output += '&#' + inputVal.charCodeAt(inputValIndexNo) + ';';
        inputValIndexNo++;
    }
    //encoding process ended here

    result.innerText = output; // it has showed encoded text in web page
}


//this function for copying text
function copyResult() {
    var getOutput = document.getElementById('output');

    getOutput.select();
    getOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

var btn = document.getElementById('btn');

btn.onclick = function () {
    copyResult();
    changeBtnVal();
};

function changeBtnVal() {
    
    if (btn.value == "Copy Result") {
        btn.setAttribute('value', 'Copied!');
    }
}

function focus() {
    var focus = document.getElementById('input');

    focus.onfocus = function () {
        btn.setAttribute('value', 'Copy Result');
    }
}
setInterval(focus, 0);
setInterval(encode, 0);