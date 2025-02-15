const palindromes = function (inputString) {
    // two pointers solution
    inputString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = inputString.length - 1;

    while(left < right) {
        if(inputString[left] != inputString[right]) return false;

        left++;
        right--;
    }

    return true;
};

// reverse solution

// const palindromes = function (inputString) {
//     inputString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return inputString === inputString.split('').reverse().join('');
// };

// Do not edit below this line
module.exports = palindromes;
