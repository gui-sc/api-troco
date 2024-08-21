const calculate = require("../helper/calculator");
const validate = require("../helper/validate");

module.exports = (req, res) => {
  const { conta, recebido } = req.body;
  const errors = validate(conta, recebido);
  if (errors) {
    return res.status(400).json(errors);
  }
  const returnedValues = {}

  calculate(conta, recebido, returnedValues)

  if(Object.keys(returnedValues).length === 0) {
    return res.status(200).json({ message: 'Não há troco' });
  }

  const response = Object.entries(returnedValues).reduce((acc, [key, value]) => {
    acc['notas'] = acc['notas'] || {};
    acc['moedas'] = acc['moedas'] || {};
    if (Number(key) > 1) {
      acc['notas'][key] = value;
    } else {
      acc['moedas'][key] = value;
    }

    return acc;
  }, {});


  return res.status(200).json(response);
};
