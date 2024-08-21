const Decimal = require("decimal");

function validate(conta, recebido){
    console.log({conta, recebido})
    if ((!conta || !recebido) && (conta !== 0 && recebido !== 0)) {
      return {
        message: "conta e recebido devem ser passados",
      };
    }

    if (typeof conta !== "number" || typeof recebido !== "number") {
      return {
        message: "conta e recebido devem ser numeros",
      };
    }

    if (conta > recebido){
        return {
            message: "O valor recebido deve ser maior ou igual ao valor da conta"
        }
    }
}

module.exports = validate;