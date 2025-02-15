const fibonacci = function (n) {
    let first = 0;
    let second = 1;
    let temp = 0;
    if (n < 0) {
        return 'OOPS';
    }
    if (n == 1) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }

    return temp;
};

// let first = 0;
//     let second = 1;
//     let temp = 1;
//     for(let i = 0; i < n - 1; i++) {
//         temp = first + second;
//         first = second;
//         second = temp;
//     }

//     return temp;

// Do not edit below this line
module.exports = fibonacci;
