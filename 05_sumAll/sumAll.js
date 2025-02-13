const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return('ERROR');
    }
    let sum = 0;
    while(num1 > num2) {
        sum += num2;
        num2++;
    }
    while(num2 > num1) {
        sum += num1;
        num1++;
    }
    sum += num1;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
