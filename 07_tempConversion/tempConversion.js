const ftoc = function (farenheits) {
  let celsius = (farenheits - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const ctof = function (celsius) {
  let farenheits = (celsius * 1.8) + 32;
  return Math.round(farenheits * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
