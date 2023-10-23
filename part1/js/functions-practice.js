/*eslint-env browser*/
/*jslint-env browser*/

//STEP 1
function halfNumber(number) {
    "use Strict";
    var result = number / 2;
    return "Half of " + number + " is " + result;
}

//STEP 2
function squareNumber(number) {
    "use Strict";
    var result = number * number;
    return "The result of squaring the number " + number + " is " + result;
}

//STEP 3
function percentOf(number1, number2) {
    "use Strict";
    var result = (number1 * 100) / number2;
    return number1 + " is " + result + "% of " + number2;
}

//STEP 4
function findModulus(number1, number2) {
    "use Strict";
    var result = number2 % number1;
    return result + " is the modulus of " + number1 + " and " + number2;
}

//STEP 5
function findSum() {
    "use Strict";
    var i;
    var sum = 0;
    var numbers = window.prompt("Enter numbers delimited by commas");
    numbers = numbers.split(",");
    for(i = 0; i < numbers.length; i++){
        sum += parseInt(numbers[i]);
    }
    return sum;
}




var number = window.prompt("Enter a number:");
document.write(halfNumber(number));
var number = window.prompt("Enter a number:");
document.write(squareNumber(number));
var number1 = window.prompt("Enter a number1:");
var number2 = window.prompt("Enter a number2:");
document.write(percentOf(number1, number2));
var number1 = window.prompt("Enter a number1:");
var number2 = window.prompt("Enter a number2:");
document.write(findModulus(number1, number2));

document.write("sum", findSum());