const repeatString = function (text, repetitions) {
    if (repetitions < 0) return 'ERROR';
    return text.repeat(repetitions);
};

// Do not edit below this line
module.exports = repeatString;