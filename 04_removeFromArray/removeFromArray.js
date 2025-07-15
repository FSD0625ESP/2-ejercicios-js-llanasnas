const removeFromArray = function (arrayContent, ...args) {
    let newArray = [];
    arrayContent.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
