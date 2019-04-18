let number = "";
let secondNumber = "";
let operator = "";

const onNumberPressed = num => {
  number += num;
  document.querySelector("#result").innerHTML = number;
};

let ops = type => {
  secondNumber = number;
  number = "";
  operator = type;
};

const equals = () => {
  let viewValue = document.querySelector("#result");
  document.querySelector("#ops").innerHTML = "";

  let total = 0;

  const firstNumber = parseInt(number);
  const secNumber = parseInt(secondNumber);

  switch (operator) {
    case "multiply":
      total = firstNumber * secNumber;
      break;
    case "divide":
      total = firstNumber / secNumber;
      break;
    case "add":
      total = firstNumber + secNumber;
      break;
    case "substract":
      total = firstNumber - secNumber;
      break;
    default:
  }

  result.innerHTML = total;
};
