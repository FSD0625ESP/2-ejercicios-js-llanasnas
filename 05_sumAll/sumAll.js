const sumAll = function (firstNumber, lastNumber) {
    if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number') return 'ERROR';
    if (firstNumber < 0) return "ERROR";
    let sum = 0;
    if (firstNumber > lastNumber) [firstNumber, lastNumber] = [lastNumber, firstNumber];
    for (let i = firstNumber; i <= lastNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
