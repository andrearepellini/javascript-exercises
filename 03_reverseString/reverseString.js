const reverseString = function(inputString) {
    return inputString.split('').reverse().join('');
};

/*
* alternative solution using for loop
*
const reverseString = function(inputString) {
    let reversedString = '';

    for(let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    return reversedString;
};
*/

// Do not edit below this line
module.exports = reverseString;
