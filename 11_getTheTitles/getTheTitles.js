const getTheTitles = function (arrayOfBooks) {
    return arrayOfBooks.filter(book => book.title != undefined)
        .map(book => book.title);
}

// using forEach

// const getTheTitles = function (arrayOfBooks) {
//     let arrayOfTitles = [];
//     arrayOfBooks.forEach(book => {
//         if(book.title != undefined) arrayOfTitles.push(element.title);
//     });

//     return arrayOfTitles;
// };

// using for .. of ..

// const getTheTitles = function(arrayOfBooks) {
//     let arrayOfTitles = [];
//     for(const book of arrayOfBooks) {
//         if(book.title != undefined) arrayOfTitles.push(book.title);
//     }

//     return arrayOfTitles;
// };

// Do not edit below this line
module.exports = getTheTitles;
