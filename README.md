# HTML Charset to HTML Entity Conveter

This project has been done with JavaScript Language. In script file, there are four functions. In these functions, one of them is main and that is `encode()` function.

Here is the `encode()` function given below :

```js

function encode() {
    var inputVal = document.getElementById('input').value; //it gets input values
    var output = ''; // it gathers all of the encoded text and modifies it
    var inputValIndexNo = 0; // it is the index NO. of input values
    var result = document.getElementById('output'); // it gets encoded format from output variable and shows 

    //encoding process started here and it is the MAIN CODE
    for (var i = 1; i <= inputVal.length; i++) {
         output += '&#' + inputVal.charCodeAt(inputValIndexNo) + ';';
        inputValIndexNo++;
    }
    //encoding process ended here

    result.innerText = output; // it has showed encoded text in web page
}

```