const findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach(person => {
        if(getAge(person) > getAge(oldest)) {
            oldest = person;
        }
    });

    return oldest;
};

const getAge = function(person) {
    if(person.yearOfDeath == undefined) {
        person.yearOfDeath = new Date().getFullYear();
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// solution with reduce

// return people.reduce((oldest, current) => {
//     return getAge(current) > getAge(oldest) ? current : oldest;
// });

// Do not edit below this line
module.exports = findTheOldest;
