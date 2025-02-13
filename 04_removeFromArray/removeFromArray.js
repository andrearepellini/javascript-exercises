const removeFromArray = function(arr, ...nums) {
    return arr.filter(item => !nums.includes(item));
};

/*
solution with a forEach loop

const removeFromArray = function(arr, ...nums) {
    let newArray = [];
    arr.forEach(element => {
        if(!nums.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

*/

// Do not edit below this line
module.exports = removeFromArray;
