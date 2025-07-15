const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const personLastYear = person.yearOfDeath || currentYear;
        const personAge = personLastYear - person.yearOfBirth;

        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;