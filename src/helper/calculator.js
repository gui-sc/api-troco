const Decimal = require("decimal");
const values = require("../helper/values");
function calculate(value, goal, returnedValues) {
  if (value === goal) {
    return returnedValues;
  }

  const diff = new Decimal(goal).sub(new Decimal(value)).toNumber();

  for (let i = 0; i < values.length; i++) {
    const item = values[i];

    if (diff >= item.value) {

      if (!returnedValues[item.value]) returnedValues[item.value] = 0;
      returnedValues[item.value]++;
      
      calculate(new Decimal(value).add(item.value), goal, returnedValues)
      break;
    }
  }
}

module.exports = calculate
